import cors from '@fastify/cors'
import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions-routes'

export const app = fastify()

app.register(cors)

app.register(transactionsRoutes, {
  prefix: '/transactions',
})
