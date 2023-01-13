import ContentLoader from 'react-content-loader';
import styled from "styled-components";

export const Container = styled.article`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 5;
`;

const Skeleton = () => (
	<Container>
		<ContentLoader
			width="100%"
			height="100%"
			backgroundColor="#f0f0f0"
			foregroundColor="#dedede"
		>
			<rect width="100%" height="100%"/>
		</ContentLoader>
	</Container>
);

export default Skeleton;
