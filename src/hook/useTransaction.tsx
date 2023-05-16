import { useContext } from 'react'
import { TransactionsContext } from '../contexts/TransactionsContext'

export function useTransaction() {
  const context = useContext(TransactionsContext)
  return context
}
