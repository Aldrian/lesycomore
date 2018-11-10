import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styled, {keyframes} from 'react-emotion';

import {H4, primaryWhite} from '../../utils/content';

import {ReactComponent as logo} from '../logo.svg';

const LandingMain = styled('div')`
	width: calc(100vw - 80px);
	height: calc(100vh - 40px);
`;

const slideTop = keyframes`
	from {
		opacity: 0;
		transform: translate3d(-50%, -300%, 0);
		filter: blur(3px);
	}
	to {
		filter: blur(0px);
		opacity: 1;
		transform: translate3d(-50%, -50%, 0);
	}
`;

const LandingIcon = styled('div')`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, -50%, 0);
	animation: ${slideTop} 0.8s ease-out;
	transition: all 0.3s ease;
	cursor: pointer;
	&:hover {
		filter: blur(3px);
	}
`;

const Logo = styled(logo)`
	width: 250px;
	height: auto;
	path {
		fill: white;
	}
`;

const SiteName = styled(H4)`
	text-transform: uppercase;
	letter-spacing: 4px;
	text-align: center;
	color: ${primaryWhite};
	font-family: 'BWHaas', sans-serif;
`;

class Landing extends Component {
	render() {
		return (
			<LandingMain>
				<LandingIcon
					onClick={() => {
						this.props.history.push('/home');
					}}
				>
					<Logo />
					<SiteName>Le sycomore</SiteName>
				</LandingIcon>
			</LandingMain>
		);
	}
}

export default withRouter(Landing);
