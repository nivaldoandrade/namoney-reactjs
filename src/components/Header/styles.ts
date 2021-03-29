import styled from 'styled-components';


export const Container = styled.header`
	background-color: var(--blue);
`;

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 2rem 1rem 8.35rem;

	button {
		display: flex;
		align-items: center;
		justify-content: center;

		border: 0;
		border-radius: 5px;
		background-color: var(--blue-light);

		font-weight: 600;
		color: var(--shape);
		padding: 0.75rem  2.18rem;

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.97);
		}
	}
`;
