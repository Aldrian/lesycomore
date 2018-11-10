import React, {Component} from 'react';
import styled from 'react-emotion';
import {Link} from 'react-router-dom';

import {
	FlexColumn, primaryWhite, H4, darkBeige,
} from '../../utils/content';

import {ReactComponent as logo} from '../../containers/logo.svg';

import {ReactComponent as Facebook} from './facebook.svg';
import {ReactComponent as Vimeo} from './vimeo.svg';
import {ReactComponent as Instagram} from './instagram.svg';

const SidebarHomeMain = styled(FlexColumn)`
	height: 94vh;
`;

const LandingIcon = styled('div')`
	transition: all 0.3s ease;
	&:hover {
		filter: blur(3px);
	}
	cursor: pointer;
`;

const Logo = styled(logo)`
	width: 120px;
	height: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
	path {
		fill: white;
	}
	margin-left: auto;
	margin-right: auto;
	display: block;
`;

const SidebarTitle = styled(H4)`
	font-variant: small-caps;
	letter-spacing: 8px;
	color: ${props => (props.isActive ? darkBeige : primaryWhite)};
	font-family: 'BWHaas', sans-serif;
	cursor: pointer;
	transition: color 0.3s ease;
	font-size: 130%;
	&:hover {
		color: ${darkBeige};
	}
`;

const SocialIcons = styled('div')`
	margin-top: 40px;
	svg {
		width: 20px;
		height: auto;
		margin-right: 15px;
		cursor: pointer;
	}
`;

class SidebarHome extends Component {
	render() {
		const {setActiveMode, activeMode} = this.props;

		return (
			<SidebarHomeMain justifyContent="space-between">
				<LandingIcon
					onClick={() => {
						setActiveMode('main');
					}}
				>
					<Logo />
					<SidebarTitle isActive={activeMode === 'main'}>
						le sycomore
					</SidebarTitle>
				</LandingIcon>
				<div>
					<SidebarTitle
						isActive={activeMode === 'about'}
						onClick={() => {
							setActiveMode('about');
						}}
					>
						à propos
					</SidebarTitle>
					<SidebarTitle
						isActive={activeMode === 'events'}
						onClick={() => {
							setActiveMode('events');
						}}
					>
						évènements
					</SidebarTitle>
					<SidebarTitle
						isActive={activeMode === 'contact'}
						onClick={() => {
							setActiveMode('contact');
						}}
					>
						contact
					</SidebarTitle>
					<SocialIcons>
						<a href="https://www.facebook.com/GroupeLeSycomore/">
							<Facebook />
						</a>
						<a href="https://www.instagram.com/lesycomore/">
							<Instagram />
						</a>
					</SocialIcons>
				</div>
			</SidebarHomeMain>
		);
	}
}

export default SidebarHome;
