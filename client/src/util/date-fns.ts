import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formattedDate = (date: string) => {
  return format(parseISO(date), 'P', {
    locale: ptBR,
  })
}
