import { z } from 'zod'

export const FindByIdTransactionSchema = z.object({
  id: z.string(),
})
