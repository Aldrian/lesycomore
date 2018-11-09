import styled, {css} from 'react-emotion';
import Shevy from 'shevyjs';

const shevy = new Shevy({
	baseFontSize: '17px',
});
const {
	body, content, h1, h2, h3, h4, h5, h6,
} = shevy;

// Colors
export const primaryWhite = '#ffffff';
export const primaryBlue = '#3860ff';
export const primaryNavyBlue = '#171a44';
export const primarySalmon = '#fbada1';
export const secondaryRed = '#e62043';
export const secondaryLightBlue = '#deebff';
export const secondaryLightYellow = '#fffae6';
export const secondaryLightGreen = '#e3fcef';
export const gray50 = '#808080';
export const gray20 = '#f4f5f7';
export const gray30 = '#4d4d4d';
export const gray70 = '#b3b3b3';
export const gray80 = '#cccccc';
export const signalGreen = '#36b37e44';
export const signalOrange = '#ffab0044';
export const signalRed = '#ff563044';
// Typography

export const Body = styled('div')`
	${body};
`;
export const H1 = styled('h1')`
	${h1};
`;
export const H2 = styled('h2')`
	${h2};
`;
export const H3 = styled('h3')`
	${h3};
`;
export const H4 = styled('h4')`
	${h4};
`;
export const H5 = styled('h5')`
	${h5};
`;
export const H6 = styled('h6')`
	${h6};
`;
export const P = styled('p')`
	${content};
`;
export const Ol = styled('ol')`
	${content};
`;
export const Ul = styled('ul')`
	${content};
`;
export const A = styled('a')`
	${content};
`;
// Layout

export const FlexRow = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: ${props => props.justifyContent || 'flex-start'};
`;
export const FlexColumn = styled('div')`
	display: flex;
	flex-direction: column;
	justify-content: ${props => props.justifyContent || 'flex-start'};
	${props => props.flexGrow && `flex-grow: ${props.flexGrow};`};
	${props => props.fullHeight && 'height: 100%;'};
`;
