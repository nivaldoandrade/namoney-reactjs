import styled from "styled-components";


export const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	margin-top: -4.25rem;

	div {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;

		color: var(--text-title);
		padding: 1.5rem 2rem;
		background-color: var(--shape);
		border-radius: 0.31rem;

		header {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		strong {
			font-size: 2.25rem;
			font-weight: 500;
		}

		&.total-highlight {
			background-color: var(--green);
			color: var(--shape);
		}
	}
`;


