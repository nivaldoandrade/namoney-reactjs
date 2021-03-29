import { useTransactions } from '../../hooks/useTransactions';

import { formatAmount } from "../../utils/formatAmount";

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { Container } from "./styles";

export function Summary() {
	const { transactions } = useTransactions();

	const summary = transactions.reduce((acc, transaction) => {
		if (transaction.type === 'deposit') {
			acc.deposit += transaction.amount;
			acc.total += transaction.amount;
		} else {
			acc.cashout += transaction.amount;
			acc.total -= transaction.amount;
		}

		return acc;
	}, {
		deposit: 0,
		cashout: 0,
		total: 0,
	})

	const summaryFormatted = {
		deposit: formatAmount(summary.deposit),
		cashout: formatAmount(summary.cashout),
		total: formatAmount(summary.total),
	}

	return (
		<Container>
			<div>
				<header>
					Entrada
					<img src={incomeImg} alt="entrada" />
				</header>
				<strong>{summaryFormatted.deposit}</strong>
			</div>
			<div>
				<header>
					Saídas
					<img src={outcomeImg} alt="saída" />
				</header>
				<strong>{summaryFormatted.cashout}</strong>
			</div>
			<div className="total-highlight">
				<header>
					Total
					<img src={totalImg} alt="total" />
				</header>
				<strong>{summaryFormatted.total}</strong>
			</div>
		</Container>
	)
}
