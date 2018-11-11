import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {withRouter} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import louis from './louis.jpg';
import arma1 from './arma1.JPG';
import arma2 from './arma2.jpg';
import arma3 from './arma3.jpg';

import {
	FlexRow,
	H4,
	darkBeige,
	primaryWhite,
	lightBeige,
	P,
} from '../../../utils/content';

import {ReactComponent as logo} from '../../logo.svg';

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
		flex-direction: column-reverse;
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
	margin-top: 20px;
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

const ArmaMain = styled('div')`
	width: calc(100vw - 80px);
	max-height: calc(100vh - 80px);
	@media screen and (max-width: 900px) {
		width: calc(100vw - 20px);
	}
`;

class Arma extends Component {
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
			<ArmaMain>
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
							au revoir <br /> mon amour
						</SidebarPlayTitle>
						<SidebarPlayInfos>
							<SubTitle>durée :</SubTitle> 1h30
							<br />
							<br />
							<SubTitle>
								conception visuelle
								<br /> et mise en scène :
							</SubTitle>
							<br />
							Victor Inisan
							<br />
							<br />
							<SubTitle>dramaturgie : </SubTitle>
							<br />
							Nina Ayachi et Victor Inisan
							<br />
							<br />
							<SubTitle>création sonore : </SubTitle>
							<br />
							Pierre Fourmeau
							<br /> Nicolas Hadot
							<br />
							<br />
							<SubTitle>avec :</SubTitle>
							<br /> Nina Ayachi
							<br /> Giulia de Sia
							<br /> Adrien Madinier
							<br /> Jean-Baptiste Gautain
							<br /> Zoé Guillemaud
							<br /> Salomé Dugraindelorge
							<br /> Clara Chrétien
							<br />
							Juliette De Ribaucourt
							<br /> Ruben Badinter
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
										au revoir <br /> mon amour
									</SidebarPlayTitle>
								</SP>

								<SP>
									<SubTitle>résumé</SubTitle>{' '}
									<i>
										« Deux mondes — deux réalités. La
										frontière qui les sépare s’évapore pour
										Louis ; son corps va bientôt la
										traverser. Une figure de l’autre monde
										le remplacera lors d’une cérémonie de
										départ : qui est-ce ? »
									</i>
								</SP>
								<SP>
									Qui tente l’expérience d’
									<i>Au revoir mon amour</i> devient un
									complice parfaitement informé de la vie de
									Louis — ses tourments, ses joies, sa
									solitude… Secrètement invité à le rencontrer
									pour sa dernière nuit, le voilà guidé
									doucement par Judy dans l’obscurité d’un
									lieu insolite afin d’échanger en toute
									liberté avec lui. C’est grâce au spectateur,
									venu spécialement pour assister au départ de
									Louis, que le protagoniste pourra renaître
									sereinement lors d’une cérémonie hypnotique.
								</SP>
								<SP>
									À mi-chemin entre théâtre et danse,
									<i> Au revoir mon amour</i> imagine une
									parabole visuelle et poétique sur la
									migration des corps et des âmes.{' '}
								</SP>
								<Carousel
									autoplay={true}
									width={`${this.state.boxWidth}px`}
								>
									<img src={louis} />
									<img src={arma1} />
									<img src={arma2} />
									<img src={arma3} />
								</Carousel>
							</PlayContent>
						</PerfectScrollbar>
					</PlayContentWrapper>
				</PlayRow>
			</ArmaMain>
		);
	}
}

export default withRouter(Arma);
