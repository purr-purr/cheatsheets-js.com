import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import CodeLoadButton from '@modules/code/components/CodeLoadButton';
import CodeSkeleton from '@modules/code/components/CodeSkeleton';

import { useMediaQuery } from '@modules/common/hooks';

import { MOBILE_BREAKPOINT } from '@utils/const';
import messages from '@utils/messages';

import POSTER_MOBILE from '@modules/code/assets/codePoster/codePoster_poster--mobile.png';
import POSTER from '@modules/code/assets/codePoster/codePoster_poster.png';

export const PosterFrame = styled.div`
	position: relative;
	z-index: 3;
	height: 100%;
	width: 100%;

	img {
		display: block;
		width: 100%;
		height: 100%;
		pointer-events: none;
		object-fit: cover;
		object-position: left;
	}
`;

const CodePoster: FC<{
	onClick: () => void;
	isLoading: boolean;
}> = ({ onClick, isLoading = false }) => {
	const isMobile = useMediaQuery(MOBILE_BREAKPOINT);
	return (
		<>
			<PosterFrame>
				<Image
					src={isMobile ? POSTER_MOBILE : POSTER}
					alt={messages.PRELOADER_POSTER}
				/>
				<CodeLoadButton onClick={onClick} isLoading={isLoading} />
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
			</PosterFrame>

			{isLoading && <CodeSkeleton />}
		</>
	);
};

export default CodePoster;
