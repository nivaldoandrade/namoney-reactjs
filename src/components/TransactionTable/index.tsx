import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';


export function TransactionTable() {
	const { transactions } = useTransactions();

	return (
		<Container>
			<table>
				<thead>
					<tr>
						<th>Título</th>
						<th>Preço</th>
						<th>Categoria</th>
						<th>Data</th>
					</tr>
				</thead>

				<tbody>
					{transactions.map(transaction => (
						<tr key={transaction.id}>
							<td>{transaction.title}</td>
							<td className={transaction.type}>
								{transaction.type === 'cashout'
									? `- ${transaction.amountFormatted}`
									: transaction.amountFormatted
								}
							</td>
							<td>{transaction.category}</td>
							<td>{transaction.dateFormatted}</td>
						</tr>
					))}
				</tbody>
			</table>
		</Container>
	)
}
