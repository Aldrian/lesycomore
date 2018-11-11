import React, {Component} from 'react';
import styled from 'react-emotion';
import {Link} from 'react-router-dom';

import SidebarHome from '../../components/SidebarHome';
import HomeEventsContent from '../../components/HomeEventsContent';
import HomeContactContent from '../../components/HomeContactContent';
import HomeMainContent from '../../components/HomeMainContent';
import HomeAboutContent from '../../components/HomeAboutContent';
import {
	FlexRow, primaryWhite, H4, darkBeige,
} from '../../utils/content';

import {ReactComponent as logo} from '../logo.svg';

const AppIcon = styled('div')`
	transition: all 0.3s ease;
	&:hover {
		filter: blur(3px);
	}
	cursor: pointer;
	@media screen and (min-width: 900px) {
		display: none;
	}
`;

const Logo = styled(logo)`
	width: 100px;
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

const Title = styled(H4)`
	font-variant: small-caps;
	letter-spacing: 8px;
	color: ${props => (props.isActive && !props.alwaysWhite ? darkBeige : primaryWhite)};
	font-family: 'BWHaas', sans-serif;
	cursor: pointer;
	transition: color 0.3s ease;
	font-size: 110%;
	text-align: center;
	&:hover {
		color: ${props => (props.alwaysWhite ? primaryWhite : darkBeige)};
	}
`;

const HomeMain = styled('div')`
	width: calc(100vw - 80px);
`;

const MainContentWrapper = styled('div')`
	flex: 2;
	padding-left: 40px;
	padding-right: 40px;
	@media screen and (max-width: 900px) {
		padding-left: 0px;
		padding-right: 0px;
	}
`;

const MainContent = styled('div')`
	margin-left: auto;
	margin-right: auto;
	margin-top: 15vh;
	max-width: 800px;
	@media screen and (max-width: 900px) {
		margin-top: 20px;
	}
`;

const HomeRow = styled(FlexRow)`
	@media screen and (max-width: 900px) {
		flex-direction: column-reverse;
	}
`;

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			activeMode: 'main',
		};
	}

	setActiveMode = (mode) => {
		this.setState({activeMode: mode});
	};

	render() {
		const {activeMode} = this.state;

		return (
			<HomeMain>
				<AppIcon
					onClick={() => {
						this.setActiveMode('main');
					}}
				>
					<Logo />
					<Title alwaysWhite={true}>le sycomore</Title>
				</AppIcon>
				<HomeRow>
					<SidebarHome
						setActiveMode={this.setActiveMode}
						activeMode={activeMode}
					/>
					<MainContentWrapper>
						<MainContent>
							{(() => {
								switch (activeMode) {
								case 'about':
									return <HomeAboutContent />;
								case 'events':
									return <HomeEventsContent />;
								case 'contact':
									return <HomeContactContent />;
								default:
									return <HomeMainContent />;
								}
							})()}
						</MainContent>
					</MainContentWrapper>
				</HomeRow>
			</HomeMain>
		);
	}
}

export default Home;
