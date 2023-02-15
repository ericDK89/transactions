import { TransactionsRepository } from '../../repositories/transactions-repository'
import { DeleteByIdTransactionService } from '../../services/delete-by-id-transaction-service'
import { DeleteByIdTransactionController } from './delete-by-id-controller'

const transactionsRepository = new TransactionsRepository()
const deleteByIdTransaction = new DeleteByIdTransactionService(
  transactionsRepository,
)
export const deleteByIdTransactionController =
  new DeleteByIdTransactionController(deleteByIdTransaction)
