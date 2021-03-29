import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatAmount } from '../utils/formatAmount';
import { formatDate } from '../utils/formatDate';

interface Transaction {
	id: string;
	title: string;
	amountFormatted: number;
	amount: number;
	category: string;
	type: string;
	createAt: string;
	dateFormatted: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'amountFormatted' | 'dateFormatted' | 'createAt'>;

interface TransactionsProviderProps {
	children: ReactNode;
}

interface TransactionsContextData {
	transactions: Transaction[];
	createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
	{} as TransactionsContextData
);


export function TransactionsProvider({ children }: TransactionsProviderProps) {
	const [transactions, setTransactions] = useState<Transaction[]>([]);

	useEffect(() => {
		api.get('transactions')
			.then(response => {
				const transactionsFormatted = response.data.transactions
					.map((transaction: Transaction) => ({
						...transaction,
						amountFormatted: formatAmount(transaction.amount),
						dateFormatted: formatDate(transaction.createAt),
					}))

				setTransactions(transactionsFormatted);
			})
	}, []);

	async function createTransaction(transactionInput: TransactionInput) {
		const response = await api.post('transactions', {
			...transactionInput,
			createAt: new Date()
		});

		const transaction = response.data;

		const transactionsFormatted = {
			...transaction,
			amountFormatted: formatAmount(transaction.amount),
			dateFormatted: formatDate(transaction.createAt),
		}

		setTransactions(state => [...state, transactionsFormatted]);

	}
	return (
		<TransactionsContext.Provider value={{ transactions, createTransaction }}>
			{children}
		</TransactionsContext.Provider>
	)
}

export function useTransactions() {
	const context = useContext(TransactionsContext);

	return context;
}

