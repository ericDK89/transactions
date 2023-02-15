/* eslint-disable no-useless-constructor */
import { TransactionsRepository } from '../repositories/transactions-repository'
import { ITransaction } from '../repositories/transactions-repository-interface'

export class CreateTransactionsService {
  constructor(private transactionsRepository: TransactionsRepository) {}

  execute({ amount, title, type }: ITransaction) {
    this.transactionsRepository.create({ title, amount, type })
  }
}
