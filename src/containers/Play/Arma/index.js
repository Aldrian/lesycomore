import React, { Component } from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";

const ArmaMain = styled("div")`
	width: 100vw;
	height: 100vh;
	background: purple;
`;

class Arma extends Component {
	render() {
		return (
			<ArmaMain>
				<Link to="/home">Home</Link>
			</ArmaMain>
		);
	}
}

export default Arma;
