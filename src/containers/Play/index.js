import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import styled from 'react-emotion';
import Arma from './Arma';
import Ep from './Ep';
import Lacl from './Lacl';

const PlayMain = styled('div')`
`;

class Play extends Component {
	render() {
		return (
			<PlayMain>
				<Switch>
					<Route exact path="/play/arma" component={Arma} />
					<Route exact path="/play/ep" component={Ep} />
					<Route exact path="/play/lacl" component={Lacl} />
				</Switch>
			</PlayMain>
		);
	}
}

export default Play;
