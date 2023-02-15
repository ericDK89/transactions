/* eslint-disable no-useless-constructor */
import { FastifyReply as Res, FastifyRequest as Req } from 'fastify'
import { CreateTransactionsService } from '../../services/create-transaction-service'
import { CreateTransactionSchema } from '../../validator/create-transaction-schema'

export class CreateTransactionController {
  constructor(private createTransactionService: CreateTransactionsService) {}

  async handle(req: Req, res: Res) {
    const { amount, title, type } = CreateTransactionSchema.parse(req.body)

    this.createTransactionService.execute({ amount, title, type })

    return res.status(201).send()
  }
}
