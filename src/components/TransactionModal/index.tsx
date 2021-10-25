import Modal from 'react-modal';

import * as S from './styles';

import { useState } from 'react';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps) {
  const [type, setType] = useState('deposit');

  return (
    <Modal 
      isOpen={isOpen} 
      onRequestClose={onRequestClose} 
      overlayClassName="react-modal-overlay" 
      className="react-modal-content">

      <button 
        type="submit"
        onClick={onRequestClose} 
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Form>
        <h2>Cadastrar transação</h2>
        
        <input placeholder="Título"/>

        <input placeholder="Valor" type="number" />

        <S.TransactionTypeContainer>
          <S.RadioBox 
            type="button" 
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </S.Form>
    </Modal>
  );
}