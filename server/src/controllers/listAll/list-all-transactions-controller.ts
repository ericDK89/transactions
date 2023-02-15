/* eslint-disable no-useless-constructor */
import { FastifyReply as Res, FastifyRequest as Req } from 'fastify'
import { ListAllTransactionsService } from '../../services/list-all-transactions-service'

export class ListAllTransactionsController {
  constructor(private listAllControllerService: ListAllTransactionsService) {}

  async handle(req: Req, res: Res) {
    const allTransactions = await this.listAllControllerService.execute()
    return res.status(200).send({ allTransactions })
  }
}
