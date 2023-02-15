import { z } from 'zod'

export const UpdateByIdSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  amount: z.number().optional(),
})
