/* eslint-disable no-useless-constructor */
import { FastifyReply, FastifyRequest } from 'fastify'
import { UpdateByIdTransactionService } from '../../services/update-by-id-transaction-service'
import { UpdateByIdSchema } from '../../validator/update-by-id-transaction-schema'

export class UpdateByIdTransactionController {
  constructor(
    private updateByIdTransactionService: UpdateByIdTransactionService,
  ) {}

  async handle(req: FastifyRequest, res: FastifyReply) {
    const { title, amount } = UpdateByIdSchema.parse(req.body)
    const { id } = UpdateByIdSchema.parse(req.params)

    await this.updateByIdTransactionService.execute(id, title, amount)

    return res.status(201).send()
  }
}
