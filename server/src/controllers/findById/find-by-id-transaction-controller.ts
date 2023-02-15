/* eslint-disable no-useless-constructor */
import { FastifyReply as Res, FastifyRequest as Req } from 'fastify'
import { FindByIdTransactionService } from '../../services/find-by-id-transaction-service'
import { FindByIdTransactionSchema } from '../../validator/find-by-id-transaction-schema'

export class FindByIdTransactionController {
  constructor(private findByIdTransactionService: FindByIdTransactionService) {}

  async handle(req: Req, res: Res) {
    const { id } = FindByIdTransactionSchema.parse(req.params)
    const transaction = await this.findByIdTransactionService.execute(id)

    return res.status(200).send({ transaction })
  }
}
