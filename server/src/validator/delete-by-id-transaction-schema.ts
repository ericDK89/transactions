import { z } from 'zod'

export const DeleteByIdTransactionSchema = z.object({
  id: z.string(),
})
