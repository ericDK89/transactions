import { Transactions } from '@prisma/client'
import { prisma } from '../lib/prisma'
import {
  ITransaction,
  TransactionsRepositoryInterface,
} from './transactions-repository-interface'

export class TransactionsRepository implements TransactionsRepositoryInterface {
  async create({ amount, title, type }: ITransaction): Promise<void> {
    await prisma.transactions.create({
      data: {
        title,
        amount: type === 'credit' ? amount : amount * -1,
      },
    })
  }

  async listAllTransactions(): Promise<Transactions[]> {
    const allTransactions = await prisma.transactions.findMany()
    return allTransactions
  }

  async findById(id: string): Promise<Transactions | null> {
    const transaction = await prisma.transactions.findUnique({
      where: {
        id,
      },
    })

    return transaction
  }

  async deleteById(id: string): Promise<void> {
    await prisma.transactions.delete({
      where: {
        id,
      },
    })
  }

  async updateById(
    id?: string,
    title?: string,
    amount?: number,
  ): Promise<void> {
    await prisma.transactions.update({
      data: {
        amount,
        title,
      },
      where: {
        id,
      },
    })
  }

  async getSummary() {
    const summaryTotal = await prisma.transactions.aggregate({
      _sum: {
        amount: true,
      },
    })

    return summaryTotal
  }
}
