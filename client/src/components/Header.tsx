import { useState } from 'react'
import logo from '../assets/logo.svg'
import { NewTransactionModal } from './NewTransactionModal'

interface HeaderProps {
  handleUpdateTransactions: () => void
}

export const Header = ({ handleUpdateTransactions }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <header className="bg-gray-900 h-56 flex justify-center w-screen px-2">
        <div className="flex items-center justify-between max-w-5xl w-full mb-10">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Money Tool" />
            <h1 className="text-gray-200 font-bold text-2xl">Money Tool</h1>
          </div>

          <button
            type="button"
            onClick={handleOpenModal}
            className="bg-green-500 text-white py-3 px-5 rounded-md 
          hover:bg-green-300 text-sm font-bold"
          >
            Nova transação
          </button>
        </div>
      </header>

      <NewTransactionModal
        isModalOpen={isModalOpen}
        handleOpenModal={handleOpenModal}
        handleUpdateTransactions={handleUpdateTransactions}
      />
    </>
  )
}
