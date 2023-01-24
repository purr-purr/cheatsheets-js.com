import { css } from 'styled-components';

export const sizes = {
	mobile: '1024px',
};

export const devices = {
	mobile: `@media (max-width: ${sizes.mobile})`,
};

export const colors = {
	mainBg: '#F9F9F9',
	mainBlack: '#1C1C1C',
	white: '#fff',
	darkShadow: 'rgba(0, 0, 0, 0.08)',
};

export const transition = (element: string, time: number) =>
	css`
		transition: ${time} ease-in-out ${time}s;
	`;
