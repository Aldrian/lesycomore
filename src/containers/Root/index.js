import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'react-emotion';
import {Body} from '../../utils/content';
import Landing from '../Landing';
import Home from '../Home';
import Play from '../Play';

const BodyMain = styled(Body)`
`;

class Root extends Component {
	render() {
		return (
			<BodyMain>
				<main>
					<Switch>
						<Route exact path="/" component={Landing} />
						<Route exact path="/home" component={Home} />
						<Route path="/play" component={Play} />
					</Switch>
				</main>
			</BodyMain>
		);
	}
}

export default Root;
