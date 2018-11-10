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
export const lightBeige = '#ffebcd';
export const darkBeige = '#deb887';
// Typography

export const Body = styled('div')`
	${body};
	color: ${primaryWhite};
`;
export const H1 = styled('h1')`
	${h1};
	font-weight: normal;
`;
export const H2 = styled('h2')`
	${h2};
	font-weight: normal;
`;
export const H3 = styled('h3')`
	${h3};
	font-weight: normal;
`;
export const H4 = styled('h4')`
	${h4};
	font-weight: normal;
	font-size: 20px;
`;
export const H5 = styled('h5')`
	${h5};
	font-weight: normal;
`;
export const H6 = styled('h6')`
	${h6};
	font-weight: normal;
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
