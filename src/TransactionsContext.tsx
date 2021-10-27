import React, {createContext, useState, useEffect} from 'react';
import { AxiosResponse } from 'axios';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

interface TransactionProviderProps {
  children: React.ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export function TransactionsProvider({children}: TransactionProviderProps) {
  
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get<Transaction[]>('transactions').then((response: AxiosResponse) => {
      setTransactions(response.data.transactions);
    });
  }, []);
  
  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}
