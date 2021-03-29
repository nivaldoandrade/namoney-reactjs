import styled from "styled-components";


export const Container = styled.div`
	margin-top: 4rem;

	table {
		width: 100%;
		border-spacing: 0 0.5rem;
		text-align: left;
		color: var(--text-body);

		th {
			padding: 0rem 2rem 1.3rem;
			font-weight: 400;
		}

		td {
			padding: 1.3rem 2rem;
			background-color: var(--shape);

			&:first-child {
				border-top-left-radius: 0.3rem;
				border-bottom-left-radius: 0.3rem;
				color: var(--text-title);
			}

			&:last-child {
				border-top-right-radius: 0.3rem;
				border-bottom-right-radius: 0.3rem;
			}

			&.deposit {
				color: var(--green);
			}

			&.cashout {
				color: var(--red);
			}
		}
	}

`;
