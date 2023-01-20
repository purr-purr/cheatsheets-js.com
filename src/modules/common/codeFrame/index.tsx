import { FC } from 'react';
import {CODE_FRAME_ALLOW_ATTR, CODE_FRAME_SANDBOX_ATTR} from '@utils/const';
import Skeleton from "@modules/common/Skeleton";
import styled from "styled-components";
import {ICodeFrameProps} from "@utils/types";
import {fixSandboxLink} from "@utils/index";

export const Container = styled.article`
	position: relative;
	height: 500px;
	width: 100%;
	margin-bottom: 48px;
`;

export const Frame = styled.iframe<ICodeFrameProps>`
	border-radius: 4px;
	border: 1px solid transparent;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 4;
	height: 100%;
	width: 100%;
	${({ isLoading }) =>
	`
		visibility: ${isLoading} ? 'hidden' : 'visible',
	`}
`;

const CodeFrame: FC<{
	iframeLoading?: boolean;
	onLoad?: () => void;
	source: string;
}> = ({ iframeLoading = false, source, onLoad }) => {
	return (
		<Container>
			{iframeLoading && <Skeleton />}
			<Frame
				src={fixSandboxLink(source)}
				sandbox={CODE_FRAME_SANDBOX_ATTR}
				allow={CODE_FRAME_ALLOW_ATTR}
				onLoad={onLoad}
			/>
		</Container>

	);
};

export default CodeFrame;
