import React, { Component } from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
const LaclMain = styled("div")`
	width: 100vw;
	height: 100vh;
	background: teal;
`;

class Lacl extends Component {
	render() {
		return (
			<LaclMain>
				<Link to="/home">Home</Link>
			</LaclMain>
		);
	}
}

export default Lacl;
