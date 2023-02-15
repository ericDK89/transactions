import { FastifyInstance } from 'fastify'
import { createTransactionController } from '../controllers/create/create-transaction-factory'
import { deleteByIdTransactionController } from '../controllers/deleteById/delete-by-id-factory'
import { findByIdTransactionController } from '../controllers/findById/find-by-id-transaction-factory'
import { getSummaryTransactionController } from '../controllers/getSummary/get-summary-transaction-factory'
import { listAllTransactionsController } from '../controllers/listAll/list-all-transactions-factory'
import { updateByIdTransactionsController } from '../controllers/updateById/update-by-id-transaction-factory'

export const transactionsRoutes = async (app: FastifyInstance) => {
  app.post('/', async (req, res) => {
    return createTransactionController.handle(req, res)
  })

  app.get('/', async (req, res) => {
    return listAllTransactionsController.handle(req, res)
  })

  app.get('/:id', async (req, res) => {
    return findByIdTransactionController.handle(req, res)
  })

  app.delete('/:id', async (req, res) => {
    return deleteByIdTransactionController.handle(req, res)
  })

  app.patch('/:id', async (req, res) => {
    return updateByIdTransactionsController.handle(req, res)
  })

  app.get('/summary', async (req, res) => {
    return getSummaryTransactionController.handle(req, res)
  })
}
