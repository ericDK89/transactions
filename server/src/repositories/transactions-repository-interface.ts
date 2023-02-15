import { Transactions } from '@prisma/client'

export interface ITransaction {
  title: string
  amount: number
  type: 'credit' | 'debit'
}

export interface TransactionsRepositoryInterface {
  create({ amount, title, type }: ITransaction): Promise<void>
  listAllTransactions(): Promise<Transactions[]>
  findById(id: string): Promise<Transactions | null>
  deleteById(id: string): Promise<void>
  updateById(id?: string, title?: string, amount?: number): Promise<void>
  getSummary(): Promise<any>
}
