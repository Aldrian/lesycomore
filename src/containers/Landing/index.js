import React, {Component} from 'react';
import {Link} from "react-router-dom";
import styled from 'react-emotion';

const LandingMain = styled('div')`
	width: 100vw;
	height: 100vh;
	background: pink;
`;


class Landing extends Component {
	render() {
		return (
			<LandingMain>
					<Link to="/home">Home</Link>
			</LandingMain>
		);
	}
}

export default Landing;
