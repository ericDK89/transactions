import clsx from 'clsx'
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'

interface SummaryProps {
  type: 'credit' | 'debit' | 'total'
  name: 'Crédito' | 'Débito' | 'Total'
  value: number
}

export const Summary = ({ type, name, value }: SummaryProps) => {
  return (
    <div
      className={clsx('w-80 h-36 rounded-md p-6 flex flex-col gap-3', {
        'bg-gray-600': type === 'credit' || type === 'debit',
        'bg-green-500': type === 'total',
      })}
    >
      <header className="flex items-center justify-between">
        <span className="text-gray-300 leading-4">{name}</span>
        {type === 'credit' && <ArrowCircleUp size={32} color="#00B37E" />}
        {type === 'debit' && <ArrowCircleDown size={32} color="#F75A68" />}
        {type === 'total' && <CurrencyDollar size={32} color="#FFFFFF" />}
      </header>

      <h2 className="text-gray-100 font-bold text-3xl">R$ {value}</h2>
    </div>
  )
}
