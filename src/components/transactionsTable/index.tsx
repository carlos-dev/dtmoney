import { useEffect } from 'react';
import * as S from './styles';

export function TransactionsTable() {
  useEffect(() => {
    fetch('http://localhost:3000/api/transactions').then(response => {
      return response.json();
    }).then(data => {
      console.log(data);
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