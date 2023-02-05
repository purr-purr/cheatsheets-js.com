import { FC } from 'react';
import styled from 'styled-components';

import { devices } from '@styles/theme';
import messages from '@utils/messages';

export const LoadButtonWrapper = styled.div`
	position: absolute;
	top: calc((100% - 30px) / 2);
	left: calc((100% - 160px) / 2);
	width: 160px;
	height: 66px;
	padding-top: 15px;
	padding-bottom: 15px;
	filter: url('#goo');
`;

export const LoadButtonItem = styled.button`
	width: 100%;
	height: 100%;
	background-color: var(--main-bg);
	color: var(--main-black);
	font-size: 16px;
	line-height: 1.1;
	font-weight: 500;
	position: relative;

	${devices.mobile} {
		font-size: 14px;
	}

	:before,
	:after {
		width: 4.4em;
		height: 2.95em;
		position: absolute;
		content: '';
		background-color: var(--main-bg);
		border-radius: 50%;
		transition: transform 1s ease;
		transform: scale(0);
		z-index: -1;
	}

	:before {
		top: -25%;
		left: 20%;
	}

	:after {
		bottom: -25%;
		right: 20%;
	}

	:hover:before,
	:hover:after {
		transform: none;
	}

	span {
		content: '';
		animation: blink 1.5s infinite;
		animation-fill-mode: both;
		display: inline-flex;
		height: 2px;
		width: 2px;
		background-color: var(--main-black);
		border-radius: 50%;
		margin-left: 2px;

		&:nth-child(2) {
			animation-delay: 0.2s;
			margin-left: 3px;
		}

		&:nth-child(3) {
			animation-delay: 0.4s;
			margin-left: 3px;
		}
	}

	@keyframes blink {
		0%,
		100% {
			opacity: 0.1;
		}
		20% {
			opacity: 1;
		}
	}
`;

const CodeLoadButton: FC<{
	onClick: () => void;
	isLoading: boolean;
}> = ({ onClick, isLoading = false }) => {
	return (
		<>
			<LoadButtonWrapper>
				<LoadButtonItem onClick={onClick}>
					{isLoading ? (
						<>
							{messages.LOADING}
							<span />
							<span />
							<span />
						</>
					) : (
						messages.OPEN
					)}
				</LoadButtonItem>
			</LoadButtonWrapper>

			<svg
				style={{ visibility: 'hidden', position: 'absolute' }}
				width="0"
				height="0"
				xmlns="http://www.w3.org/2000/svg"
				version="1.1"
			>
				<defs>
					<filter id="goo">
						<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
						<feColorMatrix
							in="blur"
							mode="matrix"
							values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
							result="goo"
						/>
						<feComposite in="SourceGraphic" in2="goo" operator="atop" />
					</filter>
				</defs>
			</svg>
		</>
	);
};

export default CodeLoadButton;
