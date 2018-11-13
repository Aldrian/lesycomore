import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {withRouter} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import larve1 from './larve1.jpg';
import larve2 from './larve2.jpg';
import larve3 from './larve3.jpg';

import {ReactComponent as logo} from '../../logo.svg';

import {
	FlexRow,
	H4,
	darkBeige,
	primaryWhite,
	lightBeige,
	P,
} from '../../../utils/content';

const AppIcon = styled('div')`
	transition: all 0.3s ease;
	&:hover {
		filter: blur(3px);
	}
	cursor: pointer;
	@media screen and (min-width: 900px) {
		display: none;
	}
`;

const Logo = styled(logo)`
	width: 100px;
	height: auto;
	display: block;
	margin-left: auto;
	margin-right: auto;
	path {
		fill: white;
	}
	margin-left: auto;
	margin-right: auto;
	display: block;
`;

const Title = styled(H4)`
	font-variant: small-caps;
	letter-spacing: 8px;
	color: ${props => (props.isActive && !props.alwaysWhite ? darkBeige : primaryWhite)};
	font-family: 'BWHaas', sans-serif;
	cursor: pointer;
	transition: color 0.3s ease;
	font-size: 110%;
	text-align: center;
	&:hover {
		color: ${props => (props.alwaysWhite ? primaryWhite : darkBeige)};
	}
`;

const PlayRow = styled(FlexRow)`
	@media screen and (max-width: 900px) {
		flex-direction: column-reverse;
	}
`;

const PlaySidebar = styled('div')`
	max-height: calc(100vh - 80px);
	@media screen and (max-width: 900px) {
		margin-top: 40px;
	}
`;

const SP = styled(P)`
	text-align: justify;
	@media screen and (max-width: 900px) {
		text-align: left;
	}
`;

const SidebarTitle = styled(H4)`
	font-variant: small-caps;
	letter-spacing: 4px;
	color: ${props => (props.isActive ? darkBeige : primaryWhite)};
	font-family: 'BWHaas', sans-serif;
	cursor: pointer;
	transition: color 0.3s ease;
	&:hover {
		color: ${darkBeige};
	}
`;

const SidebarPlayTitle = styled(H4)`
	font-variant: small-caps;
	letter-spacing: 4px;
	color: ${primaryWhite};
	font-family: 'BWHaas', sans-serif;
	margin-top: 2v0px;
	line-height: 1.5;
	@media screen and (min-width: 900px) {
		display: ${props => (props.isMobile ? 'none' : 'block')};
	}
	@media screen and (max-width: 900px) {
		display: ${props => (props.isMobile ? 'block' : 'none')};
	}
`;

const SidebarPlayInfos = styled(P)`
	margin-top: 20px;
`;

const SubTitle = styled('span')`
	letter-spacing: 4px;
	color: ${lightBeige};
	font-family: 'BWHaas', sans-serif;
	font-variant: small-caps;
	font-size: 110%;
`;

const PlayContentWrapper = styled('div')`
	padding-left: 40px;
	padding-right: 40px;
	flex: 2;
	max-height: calc(100vh - 80px);
	@media screen and (max-width: 900px) {
		padding-left: 0px;
		padding-right: 0px;
	}
`;

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

const PlayContent = styled('div')`
	margin-left: auto;
	margin-right: auto;
	margin-top: 15vh;
	max-width: 800px;
	max-height: 70vh;
	animation: ${slideTop} 0.8s ease-out;
	@media screen and (max-width: 900px) {
		margin-top: 20px;
		min-height: calc(100vh - 230px);
		max-height: calc(100vh - 230px);
	}
`;

const LaclMain = styled('div')`
	width: calc(100vw - 80px);
	@media screen and (max-width: 900px) {
		width: calc(100vw - 20px);
	}
`;

class Lacl extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxWidth: 0,
		};
		this.playMain = React.createRef();
	}

	updateDimensions = () => {
		this.setState({boxWidth: this.playMain.getBoundingClientRect().width});
	};

	componentDidMount() {
		window.addEventListener('resize', this.updateDimensions);
		this.updateDimensions();
	}

	compomentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	render() {
		return (
			<LaclMain>
				<AppIcon
					onClick={() => {
						this.props.history.push('/home');
					}}
				>
					<Logo />
					<Title alwaysWhite={true}>le sycomore</Title>
				</AppIcon>
				<PlayRow>
					<PlaySidebar>
						<SidebarTitle
							onClick={() => {
								this.props.history.push('/home');
							}}
						>
							retour
						</SidebarTitle>
						<SidebarPlayTitle isMobile={false}>
							l'acteur,
							<br />
							cette larve
						</SidebarPlayTitle>
						<SidebarPlayInfos>
							<SubTitle>durée :</SubTitle>
							<br /> 2h (version courte) <br /> 4h (version
							longue)
							<br />
							<br />
							<SubTitle>
								conception
								<br /> et direction :
							</SubTitle>
							<br />
							Nina Ayachi
							<br /> Gaspar Delusio
							<br /> Victor Inisan
							<br /> Adrien Madinier
							<br />
						</SidebarPlayInfos>
					</PlaySidebar>
					<PlayContentWrapper>
						<PerfectScrollbar>
							<PlayContent
								innerRef={(elem) => {
									this.playMain = elem;
								}}
							>
								<SP>
									<SidebarPlayTitle isMobile={true}>
										l'acteur,
										<br />
										cette larve
									</SidebarPlayTitle>
								</SP>
								<SP>
									<SubTitle>atelier</SubTitle>
								</SP>
								<SP>
									<SubTitle>résumé</SubTitle>{' '}
									<i>« L’acteur, cette larve »</i> : et si on
									prenait la formule au sérieux ? Pour
									(re)devenir des larves, au tout début de la
									vie, il faudrait s’atrophier, s’anémier, se
									déformer&nbsp;; s’aventurer dans un rapport
									autarcique voire autiste au monde qui nous
									entoure. À l’envers de toute virtuosité, de
									toute performance, la larve cultiverait la
									lenteur, l’émerveillement du nourrisson, une
									certaine maladresse burlesque, la
									presque-capacité de parler et la
									presque-capacité d’agir. Au travers
									d’exercices scéniques, tous plus ou moins
									ramollis mais euphorisants, dans le
									mouvement vers la parole et l’action,
									espérons-le, la larve nous montrerait ce
									qu’il y a de primitif, d’archaïque et de
									préhistorique dans l’acte de jouer.
								</SP>
								<Carousel
									autoplay={true}
									width={`${this.state.boxWidth}px`}
								>
									<img src={larve1} />
									<img src={larve2} />
									<img src={larve3} />
								</Carousel>
							</PlayContent>
						</PerfectScrollbar>
					</PlayContentWrapper>
				</PlayRow>
			</LaclMain>
		);
	}
}

export default withRouter(Lacl);
