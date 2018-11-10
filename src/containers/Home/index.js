import React, {Component} from 'react';
import styled from 'react-emotion';
import {Link} from 'react-router-dom';

import SidebarHome from '../../components/SidebarHome';
import HomeEventsContent from '../../components/HomeEventsContent';
import HomeContactContent from '../../components/HomeContactContent';
import HomeMainContent from '../../components/HomeMainContent';
import HomeAboutContent from '../../components/HomeAboutContent';
import {FlexRow, primaryWhite} from '../../utils/content';

const HomeMain = styled('div')`
	width: calc(100vw - 80px);
`;

const MainContentWrapper = styled('div')`
	flex: 2;
	padding-left: 40px;
	padding-right: 40px;
`;

const MainContent = styled('div')`
	margin-left: auto;
	margin-right: auto;
	margin-top: 15vh;
	max-width: 800px;
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
				<FlexRow>
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
				</FlexRow>
			</HomeMain>
		);
	}
}

export default Home;
