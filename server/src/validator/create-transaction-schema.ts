import { z } from 'zod'

export const CreateTransactionSchema = z.object({
  title: z.string().min(3).max(255),
  amount: z.number(),
  type: z.enum(['credit', 'debit']).default('credit'),
})
