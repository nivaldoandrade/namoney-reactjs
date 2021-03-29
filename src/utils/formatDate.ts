export function formatDate(date: string) {
	return new Intl.DateTimeFormat('PT-BR').format(new Date(date))
}
