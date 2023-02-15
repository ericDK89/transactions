import { Table } from './components/Table'
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { useEffect, useState } from 'react'
import { api } from './lib/api'

export interface ITransactions {
  amount: number
  created_at: string
  id: string
  title: string
}

export const App = () => {
  const [transactions, setTransactions] = useState<ITransactions[]>([])
  const [summaryAmount, setSummaryAmount] = useState(0)
  const [update, setUpdate] = useState(false)

  const handleUpdateTransactions = () => {
    setUpdate(!update)
  }

  useEffect(() => {
    api.get('/').then((res) => setTransactions(res.data.allTransactions))
    api.get('/summary').then((res) => setSummaryAmount(res.data.amount))
  }, [update])

  console.log(update)

  return (
    <div className="overflow-y-hidden overflow-x-auto">
      <Header handleUpdateTransactions={handleUpdateTransactions} />
      <div className="flex justify-center gap-8 -translate-y-[50%] max-w-5xl m-auto">
        {/* <Summary type="credit" name="Crédito" value={20} />
        <Summary type="debit" name="Débito" value={20} /> to be finished */}
        <Summary
          type="total"
          name="Total"
          value={summaryAmount > 0 ? summaryAmount : 0}
        />
      </div>

      <div className="w-screen m-auto">
        <Table
          transactions={transactions}
          handleUpdateTransactions={handleUpdateTransactions}
        />
      </div>
    </div>
  )
}
