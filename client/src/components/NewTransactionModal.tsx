import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { api } from '../lib/api'

interface NewTransactionModalProps {
  isModalOpen: boolean
  handleOpenModal: () => void
  handleUpdateTransactions: () => void
}

export const NewTransactionModal = ({
  isModalOpen,
  handleOpenModal,
  handleUpdateTransactions,
}: NewTransactionModalProps) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(Number())
  const [type, setType] = useState<'credit' | 'debit'>('credit')

  const handleCreateNewTransaction = async (e: FormEvent) => {
    e.preventDefault()

    if (amount < 0) {
      setType('debit')
    }

    await api.post('/', {
      title,
      amount,
      type,
    })

    setTitle('')
    setAmount(0)
    handleUpdateTransactions()
    handleOpenModal()
  }

  return (
    <Dialog.Root open={isModalOpen} onOpenChange={handleOpenModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/80 fixed inset-0" />
        <Dialog.Content className="absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/4">
          <Dialog.Trigger type="button" className="fixed top-6 right-6">
            <X size={24} color="#7c7c8a" className="hover:brightness-150" />
          </Dialog.Trigger>

          <Dialog.Title className="mb-8 mr-12 text-gray-200 text-2xl">
            Nova Transação
          </Dialog.Title>

          <form
            onSubmit={handleCreateNewTransaction}
            className="flex flex-col gap-4"
          >
            <input
              placeholder="Descrição"
              type="text"
              className="p-4 rounded-md bg-gray-900 text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <input
              placeholder="Preço"
              type="number"
              min={0}
              max={9999999}
              className="p-4 rounded-md bg-gray-900 text-white"
              value={amount === 0 ? '' : amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              required
            />

            <div className="grid grid-flow-col grid-cols-2 gap-4 mt-6 ">
              <button
                type="button"
                onClick={() => setType('credit')}
                className={clsx(
                  'bg-gray-700 py-4 text-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-green-800 hover:text-white group',
                  {
                    'bg-green-800 text-white': type === 'credit',
                  },
                )}
              >
                <ArrowCircleUp
                  size={24}
                  className={clsx('text-green-500 group-hover:text-white', {
                    'text-white': type === 'credit',
                    'text-green-500': type === 'debit',
                  })}
                />
                Entrada
              </button>

              <button
                type="button"
                onClick={() => setType('debit')}
                className={clsx(
                  'bg-gray-700 py-4 text-gray-300 rounded-md flex items-center justify-center gap-2 hover:bg-red-800 hover:text-white group',
                  {
                    'bg-red-800 text-white': type === 'debit',
                  },
                )}
              >
                <ArrowCircleDown
                  size={24}
                  className={clsx('group-hover:text-white', {
                    'text-white': type === 'debit',
                    'text-red-500': type === 'credit',
                  })}
                />
                Saída
              </button>
            </div>

            <button
              type="submit"
              className="mt-10 rounded-md bg-green-500 py-4 px-8 text-white hover:bg-green-300"
            >
              Cadastrar
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
