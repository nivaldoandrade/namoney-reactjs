import { FormEvent, useState } from 'react';
import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
	const { createTransaction } = useTransactions();

	const [title, setTitle] = useState('');
	const [amount, setAmount] = useState(0);
	const [type, setType] = useState('deposit');
	const [category, setCategory] = useState('');

	async function handleSubmiteNewTransaction(e: FormEvent) {
		e.preventDefault();

		console.log(title);

		await createTransaction({
			title,
			amount,
			category,
			type
		})

		setTitle('');
		setAmount(0);
		setType('deposit');
		setCategory('');

		onRequestClose();
	}

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
		>
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeImg} alt="close modal" />
			</button>
			<Container onSubmit={handleSubmiteNewTransaction}>
				<h2>Cadastrar Transação</h2>
				<input
					placeholder="Título"
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>
				<input
					type="number"
					placeholder="Valor"
					value={amount}
					onChange={e => setAmount(Number(e.target.value))}
				/>
				<TransactionTypeContainer>
					<RadioBox
						type="button"
						onClick={() => setType('deposit')}
						isActive={type === 'deposit'}
						isActiveColor="green"
					>
						<img src={incomeImg} alt="Entrada" />
						Entrada
					</RadioBox>
					<RadioBox
						type="button"
						onClick={() => setType('cashout')}
						isActive={type === 'cashout'}
						isActiveColor="red"
					>
						<img src={outcomeImg} alt="Saída" />
						Saída
					</RadioBox>
				</TransactionTypeContainer>
				<input
					placeholder="Categoria"
					value={category}
					onChange={e => setCategory(e.target.value)}
				/>
				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	)
}
