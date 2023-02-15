/* eslint-disable no-useless-constructor */
import { TransactionsRepository } from '../repositories/transactions-repository'

export class ListAllTransactionsService {
  constructor(private transactionsRepository: TransactionsRepository) {}

  execute() {
    return this.transactionsRepository.listAllTransactions()
  }
}
