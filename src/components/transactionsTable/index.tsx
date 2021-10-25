import { useEffect } from 'react';

import { api } from '../../services/api';

import * as S from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions').then(response => {
      console.log(response.data);
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$10.000</td>
            <td>Desenvolvimento</td>
            <td>25/10/2021</td>
          </tr>

          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$1000</td>
            <td>Desenvolvimento</td>
            <td>25/10/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}