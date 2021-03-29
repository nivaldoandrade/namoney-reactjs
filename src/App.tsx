import { useState } from 'react';
import { createServer, Model } from 'miragejs';

import { TransactionsProvider } from './hooks/useTransactions';

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';

import { GlobalStyle } from "./styles/global";

createServer({
	models: {
		transactions: Model
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'Desenvolvimento de site',
					amount: 12000,
					category: 'Venda',
					type: 'deposit',
					createAt: new Date('2021-03-25 18:00:00')
				},
				{
					id: 2,
					title: 'Hambuguer',
					amount: 59,
					category: 'Alimentação',
					type: 'cashout',
					createAt: new Date('2021-03-24 15:00:00')
				},
			]
		})
	},

	routes() {
		this.namespace = "api";

		this.get("/transactions", () => {
			return this.schema.all('transactions')
		})

		this.post("/transactions", (schema, request) => {
			const data = JSON.parse(request.requestBody);

			schema.create('transactions', data);

			return data;
		})
	}
})



export function App() {
	const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModal(true);
	};

	function handleCloseNewTransactionModal() {
		setIsNewTransactionModal(false);
	}

	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
			<Dashboard />
			<NewTransactionModal
				isOpen={isNewTransactionModal}
				onRequestClose={handleCloseNewTransactionModal}
			/>
			<GlobalStyle />
		</TransactionsProvider>
	);
}


