import { TransactionsRepository } from '../../repositories/transactions-repository'
import { UpdateByIdTransactionService } from '../../services/update-by-id-transaction-service'
import { UpdateByIdTransactionController } from './update-by-id-transaction-controller'

const transactionsRepository = new TransactionsRepository()
const updateByIdTransactionService = new UpdateByIdTransactionService(
  transactionsRepository,
)
export const updateByIdTransactionsController =
  new UpdateByIdTransactionController(updateByIdTransactionService)
