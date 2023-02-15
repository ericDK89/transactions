import { TransactionsRepository } from '../../repositories/transactions-repository'
import { ListAllTransactionsService } from '../../services/list-all-transactions-service'
import { ListAllTransactionsController } from './list-all-transactions-controller'

const transactionsRepository = new TransactionsRepository()
const listAllTransactionsService = new ListAllTransactionsService(
  transactionsRepository,
)
export const listAllTransactionsController = new ListAllTransactionsController(
  listAllTransactionsService,
)
