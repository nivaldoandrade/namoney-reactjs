import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--background: #d9e2ec;
		--green: #33CC95;
		--red: #e52e4d;
		--blue: #102a43;
		--blue-light: #486581;
		--text-title: #243b53;
		--text-body: #627d98;
		--shape: #f0f4f8;
		--background-input: #E7E9EE;
		--border-input: #D7D7D7;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html {
		@media (max-width: 1080px) {
			font-size: 93.75%;
		}

		@media (max-width: 720px) {
			font-size: 87.5%
		}
	}

	body {
		background-color: var(--background);
		-webkit-font-smoothing: antialiased;
	}

	body, textarea, input, button {
		font-family: 'Poppins', sans-serif;
		font-weight: 400;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-weight: 600;
	}

	button {
		cursor: pointer;

		[disabled] {
			opacity: 0.6;
			cursor: not-allowed;
		}
	}

	.react-modal-overlay {
		background-color: rgba(0,0,0, 0.5);

		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		display: flex;
		align-items: center;
		justify-content: center;
	}

	.react-modal-content {
		width: 100%;
		max-width: 576px;
		background-color: var(--background);
		border-radius: 0.3rem;

		position: relative;
	}

	.react-modal-close {
		position: absolute;
		top: 1.31rem;
		right: 1.31rem;
		background-color: transparent;
		border: 0;

		transition:filter 0.2s;

		&:hover {
			filter: brightness(0.8);
		}
	}
`;
