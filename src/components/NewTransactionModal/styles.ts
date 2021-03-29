import styled from "styled-components";
import { darken, transparentize } from 'polished';


export const Container = styled.form`
	padding: 4rem 3rem;

	h2 {
		font-size: 1.5rem;
		color: var(--text-title);
		margin-bottom: 2rem;
	}

	input {
		width: 100%;
		height: 4rem;
		padding: 0 1.5rem;
		background-color: var(--background-input);
		border: 1px solid var(--border-input);
		border-radius: 0.3rem;

		&::placeholder {
			color: var(--text-body);
		}

		& + input {
			margin-top: 1rem;
		}
	}

	button[type="submit"] {
		width: 100%;
		height: 4rem;
		margin-top: 1.5rem;
		background-color: var(--green);
		border: 0;
		border-radius: 0.3rem;
		font-weight: 600;
		color: var(--shape);

		transition: filter 0.2s;

		&:hover {
			filter: brightness(0.9);
		}
	}
`;

export const TransactionTypeContainer = styled.div`
	margin: 1rem 0;
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
`;

interface RadioBoxProps {
	isActive: boolean;
	isActiveColor: 'green' | 'red';
}

const colors = {
	green: '#12A454',
	red: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;

	background: ${(props) =>
		props.isActive
			? transparentize(0.8, colors[props.isActiveColor])
			: 'transparent'
	};
	border-radius: 0.3rem;
	border: 1px solid var(--border-input);

	color: var(--text-title);

	img {
		width: 1.5rem;
		height: 1.5rem;
		margin-right: 1rem;
	}

	&:hover {
		border-color: ${darken(0.1, '#D7D7D7')};
	}
`;
