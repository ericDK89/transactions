/* eslint-disable no-useless-constructor */
import { TransactionsRepository } from '../repositories/transactions-repository'

export class GetSummaryTransactionsService {
  constructor(private transactionsRepository: TransactionsRepository) {}

  execute() {
    return this.transactionsRepository.getSummary()
  }
}
