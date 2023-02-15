import clsx from 'clsx'
import { TrashSimple } from 'phosphor-react'
import { ITransactions } from '../App'
import { api } from '../lib/api'
import { formattedDate } from '../util/date-fns'

interface TableProps {
  transactions: ITransactions[]
  handleUpdateTransactions: () => void
}

export const Table = ({
  transactions,
  handleUpdateTransactions,
}: TableProps) => {
  const handleDeleteTransaction = (id: string) => {
    api.delete(`/${id}`)
    handleUpdateTransactions()
  }

  return (
    <table className="table-fixed max-w-5xl w-full m-auto border-separate first:border-spacing-y-2 pl-2 overflow-x-scroll">
      {transactions.map((item) => {
        return (
          <tbody key={item.id}>
            <tr className="bg-gray-700">
              <td className="w-[50%] rounded-bl-md rounded-tl-md py-5 px-8 text-gray-300 leading-4">
                {item.title}
              </td>
              <td
                className={clsx('w-[20%]', {
                  'text-green-500': item.amount > 0,
                  'text-red-500': item.amount < 0,
                })}
              >
                R$ {item.amount}
              </td>
              <td className="text-gray-300 w-[20%]">
                {formattedDate(item.created_at)}
              </td>
              <td className="text-gray-300 rounded-tr-md rounded-br-md">
                <button
                  type="button"
                  title="Delete transaction"
                  onClick={() => handleDeleteTransaction(item.id)}
                >
                  <TrashSimple
                    size={24}
                    className="text-gray-400 hover:text-gray-200"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        )
      })}
    </table>
  )
}
