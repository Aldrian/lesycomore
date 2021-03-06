import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {withRouter} from 'react-router-dom';

import {
	FlexRow, P, lightBeige, H4, primaryWhite,
} from '../../utils/content';

import {ReactComponent as Arbre1} from './arbre1.svg';
import {ReactComponent as Arbre2} from './arbre2.svg';
import {ReactComponent as Arbre3} from './arbre3.svg';

const slideTop = keyframes`
	from {
		opacity: 0;
		transform: translate3d(0, -300%, 0);
		filter: blur(3px);
	}
	to {
		filter: blur(0px);
		opacity: 1;
		transform: translate3d(0, 0%, 0);
	}
`;

const HomeMainContentMain = styled('div')`
	display: block;
	animation: ${slideTop} 0.8s ease-out;
	padding-top: 20%;
	@media screen and (max-width: 900px) {
		padding-top: 0;
	}
`;

const Trees = styled(FlexRow)`
	@media screen and (max-width: 900px) {
		height: calc(100vh - 180px);
	}
`;

const PlayTitle = styled(H4)`
	font-variant: small-caps;
	letter-spacing: 8px;
	color: ${primaryWhite};
	font-family: 'BWHaas', sans-serif;
	cursor: pointer;
	transition: color 0.3s ease;
	font-size: 110%;
`;

const Tree = styled('div')`
	cursor: pointer;
	text-align: center;
	svg {
		height: 150px;
		width: auto;
		transition: all 0.3s ease;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	h4 {
		cursor: pointer;
		transition: all 0.3s ease;
		opacity: 0;
		filter: blur(3px);
		&:hover {
			color: ${lightBeige};
		}
	}

	&:hover {
		h4 {
			opacity: 1;
			filter: blur(0px);
		}
		svg {
			filter: blur(1px);
		}
	}
	@media screen and (max-width: 900px) {
		margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
		svg {
			height: 120px;
		}
		h4 {
			opacity: 1;
			filter: blur(0px);
			text-align: center;
			font-size: 14px;
		}
	}
`;

class HomeMainContent extends Component {
	render() {
		return (
			<HomeMainContentMain>
				<Trees justifyContent="space-between">
					<Tree
						onClick={() => {
							this.props.history.push('/play/arma');
						}}
						marginTop="15vh"
					>
						<Arbre1 />
						<PlayTitle>au revoir mon amour</PlayTitle>
					</Tree>
					<Tree
						onClick={() => {
							this.props.history.push('/play/ep');
						}}
						marginTop="25vh"
					>
						<Arbre3 />
						<PlayTitle>éclairage public</PlayTitle>
					</Tree>
					<Tree
						onClick={() => {
							this.props.history.push('/play/lacl');
						}}
						marginTop="5vh"
					>
						<Arbre2 />
						<PlayTitle>l'acteur, cette larve</PlayTitle>
					</Tree>
				</Trees>
			</HomeMainContentMain>
		);
	}
}

export default withRouter(HomeMainContent);
