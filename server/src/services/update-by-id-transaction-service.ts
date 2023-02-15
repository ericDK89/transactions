/* eslint-disable no-useless-constructor */
import { TransactionsRepository } from '../repositories/transactions-repository'

export class UpdateByIdTransactionService {
  constructor(private transactionsRepository: TransactionsRepository) {}

  execute(id?: string, title?: string, amount?: number) {
    return this.transactionsRepository.updateById(id, title, amount)
  }
}
