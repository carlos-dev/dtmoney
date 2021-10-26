import React, { useEffect,  useState } from 'react';
import {AxiosResponse} from 'axios';

import { api } from '../../services/api';

import * as S from './styles';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then((response: AxiosResponse) => {
      setTransactions(response.data.transactions);
    });
  }, []);
  
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{transaction.amount}</td>
              <td>{transaction.category}</td>
              <td>{transaction.createdAt}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </S.Container>
  );
}