/* eslint-disable no-useless-constructor */
import { TransactionsRepository } from '../repositories/transactions-repository'

export class FindByIdTransactionService {
  constructor(private transactionsRepository: TransactionsRepository) {}

  execute(id: string) {
    return this.transactionsRepository.findById(id)
  }
}
