import React, {Component} from 'react';
import styled from 'react-emotion';
import {Link} from "react-router-dom";

const HomeMain = styled('div')`
	width: 100vw;
	height: 100vh;
	background: blue;
`;


class Home extends Component {
	render() {
		return (
			<HomeMain>
					<Link to="/play/arma">Arma</Link>
					<Link to="/play/ep">Ep</Link>
					<Link to="/play/lacl">lacl</Link>
			</HomeMain>
		);
	}
}

export default Home;
