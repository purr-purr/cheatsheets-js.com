import styled from 'styled-components';

export const Container = styled.article`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
	cursor: progress;
	background-color: transparent;

	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		transform: translateX(-100%);
		background-image: linear-gradient(
			90deg,
			rgba(255, 255, 255, 0) 0,
			rgba(255, 255, 255, 0.2) 20%,
			rgba(255, 255, 255, 0.5) 60%,
			rgba(255, 255, 255, 0)
		);
		animation: shimmer 2s infinite;
		z-index: 2;
	}

	img {
		display: block;
		width: 100%;
		height: 100%;
		object-position: left;
		object-fit: cover;
	}

	@keyframes shimmer {
		100% {
			transform: translateX(100%);
		}
	}
`;

const CodeSkeleton = () => <Container />;

export default CodeSkeleton;