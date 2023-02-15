import { TransactionsRepository } from '../../repositories/transactions-repository'
import { CreateTransactionsService } from '../../services/create-transaction-service'
import { CreateTransactionController } from './create-transaction-controller'

const transactionsRepository = new TransactionsRepository()
const createTransactionService = new CreateTransactionsService(
  transactionsRepository,
)
export const createTransactionController = new CreateTransactionController(
  createTransactionService,
)
