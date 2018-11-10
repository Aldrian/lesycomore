import React, {Component} from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import {AnimatedSwitch, spring} from 'react-router-transition';
import styled from 'react-emotion';
import {Body} from '../../utils/content';
import Landing from '../Landing';
import Home from '../Home';
import Play from '../Play';

import backgroundImage from './background.jpg';

const BodyMain = styled(Body)`
	position: relative;
	width: 100vw;
	height: calc(100vh - 40px);
	background-image: url(${backgroundImage});
	background-size: cover;
	padding: 20px 40px;
`;

const slide = val => spring(val, {
	stiffness: 125,
	damping: 16,
});

const rootTransitions = {
	atEnter: {
		offset: -100,
	},
	atLeave: {
		offset: slide(-150),
	},
	atActive: {
		offset: slide(0),
	},
};

class Root extends Component {
	render() {
		return (
			<Router>
				<Route
					render={({location}) => (
						<BodyMain>
							<AnimatedSwitch
								{...rootTransitions}
								mapStyles={styles => ({
									transform: `translateY(${styles.offset}%)`,
									position: 'absolute',
								})}
							>
								<Route exact path="/" component={Landing} />
								<Route exact path="/home" component={Home} />
								<Route path="/play" component={Play} />
							</AnimatedSwitch>
						</BodyMain>
					)}
				/>
			</Router>
		);
	}
}

export default Root;
