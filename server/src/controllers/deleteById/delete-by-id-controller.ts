/* eslint-disable no-useless-constructor */
import { FastifyReply as Res, FastifyRequest as Req } from 'fastify'
import { DeleteByIdTransactionService } from '../../services/delete-by-id-transaction-service'
import { DeleteByIdTransactionSchema } from '../../validator/delete-by-id-transaction-schema'

export class DeleteByIdTransactionController {
  constructor(private deleteByIdService: DeleteByIdTransactionService) {}

  async handle(req: Req, res: Res) {
    const { id } = DeleteByIdTransactionSchema.parse(req.params)
    await this.deleteByIdService.execute(id)

    return res.status(200).send()
  }
}
