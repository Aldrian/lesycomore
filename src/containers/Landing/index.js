import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import styled, {keyframes} from 'react-emotion';

import {H4, primaryWhite} from '../../utils/content';

import {ReactComponent as logo} from '../logo.svg';

const LandingMain = styled('div')`
	width: calc(100vw - 80px);
	height: calc(100vh - 40px);
	@media screen and (max-width: 900px) {
		width: calc(100vw - 20px);
	}
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
	animation: ${slideTop} 1.5s ease-out;
	transition: all 0.6s ease;
	cursor: pointer;
	&:hover {
		svg {
			filter: blur(3px);
		}
		h4 {
			filter: blur(0px);
			opacity: 1;
		}
	}
	h4 {
		filter: blur(3px);
		opacity: 0;
	}
`;

const Logo = styled(logo)`
	width: 150px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	height: auto;
	transition: all 0.6s ease;
	path {
		fill: white;
	}
`;

const SiteName = styled(H4)`
	font-variant: small-caps;
	letter-spacing: 8px;
	margin-top: 50px;
	text-align: center;
	color: ${primaryWhite};
	font-family: 'BWHaas', sans-serif;
	width: 250px;
	transition: all 0.6s ease;
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
					<SiteName>le sycomore</SiteName>
				</LandingIcon>
			</LandingMain>
		);
	}
}

export default withRouter(Landing);
