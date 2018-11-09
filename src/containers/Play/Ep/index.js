import React, {Component} from 'react';
import styled from 'react-emotion';
import {Link} from "react-router-dom";

const EpMain = styled('div')`
	width: 100vw;
	height: 100vh;
	background: red;
`;


class Ep extends Component {
	render() {
		return (
			<EpMain>
				
					<Link to="/home">Home</Link>
			</EpMain>
		);
	}
}

export default Ep;
