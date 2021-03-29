export function formatAmount(amount: number) {
	return new Intl.NumberFormat('PT-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(amount);
}
