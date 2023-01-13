import { FC } from 'react';
import { CODE_FRAME_SANDBOX_ATTR } from '@utils/const';

const CodeFrame: FC<{
	iframeLoading: boolean;
	onLoad: () => void;
	source: string;
}> = ({ iframeLoading, source, onLoad }) => {
	return (
		<iframe
			style={{
				display: iframeLoading ? 'none' : 'block',
				marginBottom: '24px',
				height: '500px',
				width: '100%',
				borderRadius: '4px',
				overflow: 'hidden',
			}}
			src={source}
			sandbox={CODE_FRAME_SANDBOX_ATTR}
			onLoad={onLoad}
		/>
	);
};

export default CodeFrame;
