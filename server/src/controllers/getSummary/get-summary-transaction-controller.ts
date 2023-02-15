/* eslint-disable no-useless-constructor */
import { FastifyReply as Res, FastifyRequest as Req } from 'fastify'
import { GetSummaryTransactionsService } from '../../services/get-summary-transactions-service'

export class GetSummaryTransactionController {
  constructor(
    private getSummaryTransactionService: GetSummaryTransactionsService,
  ) {}

  async handle(req: Req, res: Res) {
    const transactionsSummary =
      await this.getSummaryTransactionService.execute()

    const { amount } = transactionsSummary._sum

    return res.status(200).send({ amount })
  }
}
