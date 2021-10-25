import Modal from 'react-modal';

import * as S from './styles';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps) {
  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay" 
      className="react-modal-content">

      <S.Form>
        <h2>Cadastrar transação</h2>
        
        <input placeholder="Título"/>

        <input placeholder="Valor" type="number" />

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </S.Form>
    </Modal>
  );
}