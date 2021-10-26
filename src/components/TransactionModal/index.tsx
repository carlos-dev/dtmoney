import { useState, FormEvent, useEffect } from 'react';
import Modal from 'react-modal';

import * as S from './styles';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import closeImg from '../../assets/close.svg';

interface TransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  const [type, setType] = useState('deposit');

  useEffect(() => {
    Modal.setAppElement('body');
  }, [])

  function handleCreateTransaction(event: FormEvent) {
    event.preventDefault();

    console.log({
      title,
      value,
      category,
      type,
    });
  }

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

      <S.Form onSubmit={handleCreateTransaction}>
        <h2>Cadastrar transação</h2>
        
        <input 
          placeholder="Título" 
          value={title} 
          onChange={(event) => setTitle(event.target.value)}
        />

        <input 
          placeholder="Valor" 
          type="number"
          value={value} 
          onChange={(event) => setValue(Number(event.target.value))}
        />

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

        <input 
          placeholder="Categoria" 
          value={category} 
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Form>
    </Modal>
  );
}