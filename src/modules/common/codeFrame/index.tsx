import { FC, useState } from 'react';
import styled from 'styled-components';

import Poster from '@modules/common/poster';
import { fixSandboxLink } from '@utils/index';
import { ICodeFrameProps } from '@utils/types';

import { CODE_FRAME_ALLOW_ATTR, CODE_FRAME_SANDBOX_ATTR } from '@utils/const';

export const Container = styled.article`
	position: relative;
	height: 500px;
	width: 100%;
	margin-bottom: 48px;
	border-radius: 10px;
	overflow: hidden;
`;

export const Frame = styled.iframe<ICodeFrameProps>`
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
				<Poster
					onClick={() => {
						setIsLoading(true);
						setIsCodeFrame(true);
					}}
					isLoading={isLoading}
				/>
			)}

			{isCodeFrame && (
				<Frame
					src={fixSandboxLink(source)}
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
