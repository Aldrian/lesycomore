import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {withRouter} from 'react-router-dom';

import {FlexRow, P, lightBeige} from '../../utils/content';

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
	animation: ${slideTop} 0.8s ease-out;
	padding-top: 20%;
`;

const Trees = styled(FlexRow)``;

const Tree = styled('div')`
	cursor: pointer;
	svg {
		height: 150px;
		width: auto;
		transition: all 0.3s ease;
		display: block;
		margin-left: auto;
		margin-right: auto;
	}
	p {
		font-size: 20px;
		font-style: italic;
		cursor: pointer;
		transition: all 0.3s ease;
		opacity: 0;
		filter: blur(3px);
		&:hover {
			color: ${lightBeige};
		}
	}

	&:hover {
		p {
			opacity: 1;
			filter: blur(0px);
		}
		svg {
			filter: blur(1px);
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
					>
						<Arbre1 />
						<P>Au revoir mon amour</P>
					</Tree>
					<Tree
						onClick={() => {
							this.props.history.push('/play/lacl');
						}}
					>
						<Arbre1 />
						<P>L'acteur, cette larve</P>
					</Tree>
					<Tree
						onClick={() => {
							this.props.history.push('/play/ep');
						}}
					>
						<Arbre1 />
						<P>Éclairage public</P>
					</Tree>
				</Trees>
			</HomeMainContentMain>
		);
	}
}

export default withRouter(HomeMainContent);
