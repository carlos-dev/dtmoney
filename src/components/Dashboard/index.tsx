import {Summary} from '../Summary'
import { TransactionsTable } from '../transactionsTable';

import * as S from './styles';

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TransactionsTable />
    </S.Container>
  );
}