import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {Link} from 'react-router-dom';

import {lightBeige} from '../../utils/content';

const slideTop = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, -300%, 0);
		filter: blur(3px);
	}
	to {
		filter: blur(0px);
		opacity: 1;
		transform: translate3d(0, 0%, 0);
	}
`;

const HomeContactContentMain = styled('div')`
	animation: ${slideTop} 0.8s ease-out;
`;

const Title = styled('span')`
	text-transform: uppercase;
	color: ${lightBeige};
	font-family: 'BWHaas', sans-serif;
`;

const Event = styled('div')`
	margin-bottom: 40px;
	text-align: center;
`;

const A = styled('a')`
	color: ${lightBeige};
`;

class HomeContactContent extends Component {
	render() {
		return (
			<HomeContactContentMain>
				<Title>le sycomore</Title>
				<br />
				Association loi 1901
				<br />
				177 rue Descroizilles,
				<br />
				76000 Rouen
				<br />
				06 43 65 71 59
				<br />
				<Title>
					<A href="mailto:contact@le-sycomore.com">
						>contact@le-sycomore.com
					</A>
				</Title>
			</HomeContactContentMain>
		);
	}
}

export default HomeContactContent;
