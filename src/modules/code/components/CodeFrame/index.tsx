import { FC, useState } from 'react';
import styled from 'styled-components';

import CodePoster from '@modules/code/components/CodePoster';

import { devices } from '@styles/theme';
import { CODE_FRAME_ALLOW_ATTR, CODE_FRAME_SANDBOX_ATTR } from '@utils/const';
import { formatSandboxLink } from '@utils/formatters';

export const Container = styled.article`
	position: relative;
	height: 500px;
	width: 100%;
	margin-bottom: 48px;
	border-radius: 10px;
	overflow: hidden;

	${devices.mobile} {
		height: 400px;
	}
`;

export const Frame = styled.iframe<{ isLoading?: boolean }>`
	border-radius: 4px;
	border: 1px solid transparent;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 2;
	height: 100%;
	width: 100%;
	visibility: ${(props) => (props.isLoading ? 'hidden' : 'visible')};
`;

const CodeFrame: FC<{
	source: string;
}> = ({ source }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [isPoster, setIsPoster] = useState(true);
	const [isCodeFrame, setIsCodeFrame] = useState(false);

	return (
		<Container>
			{isPoster && (
				<CodePoster
					onClick={() => {
						setIsLoading(true);
						setIsCodeFrame(true);
					}}
					isLoading={isLoading}
				/>
			)}

			{isCodeFrame && (
				<Frame
					src={formatSandboxLink(source)}
					sandbox={CODE_FRAME_SANDBOX_ATTR}
					allow={CODE_FRAME_ALLOW_ATTR}
					onLoad={() => {
						setIsLoading(false);
						setIsPoster(false);
					}}
					isLoading={isLoading}
					loading="lazy"
				/>
			)}
		</Container>
	);
};

export default CodeFrame;
