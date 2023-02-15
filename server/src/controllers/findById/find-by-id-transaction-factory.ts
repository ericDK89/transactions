import { TransactionsRepository } from '../../repositories/transactions-repository'
import { FindByIdTransactionService } from '../../services/find-by-id-transaction-service'
import { FindByIdTransactionController } from './find-by-id-transaction-controller'

const transactionsRepository = new TransactionsRepository()
const findByIdTransactionService = new FindByIdTransactionService(
  transactionsRepository,
)
export const findByIdTransactionController = new FindByIdTransactionController(
  findByIdTransactionService,
)
