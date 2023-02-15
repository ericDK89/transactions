import { TransactionsRepository } from '../../repositories/transactions-repository'
import { GetSummaryTransactionsService } from '../../services/get-summary-transactions-service'
import { GetSummaryTransactionController } from './get-summary-transaction-controller'

const transactionsRepository = new TransactionsRepository()
const getSummaryTransactionService = new GetSummaryTransactionsService(
  transactionsRepository,
)
export const getSummaryTransactionController =
  new GetSummaryTransactionController(getSummaryTransactionService)
