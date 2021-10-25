import React, { useState } from 'react';

import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { GlobalStyle } from './styles/global';
import { TransactionModal } from './components/TransactionModal';

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

  function handleCloseNewTransactionModal() {
    setIsNewTransactionsModalOpen(false);
  }

  function handleOpenNewTransactionModal() {
    setIsNewTransactionsModalOpen(true);
  }


  return (
    <>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <TransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
