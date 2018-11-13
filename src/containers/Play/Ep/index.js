import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {withRouter} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import public1 from './public1.jpg';
import public2 from './public2.JPG';
import public3 from './public3.JPG';
import public4 from './public4.JPG';

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

const EpMain = styled('div')`
	width: calc(100vw - 80px);
	@media screen and (max-width: 900px) {
		width: calc(100vw - 20px);
	}
`;

class Ep extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxWidth: 0,
		};
		this.playMain = React.createRef();
	}

	updateDimensions = () => {
		this.setState({
			boxWidth: this.playMain.getBoundingClientRect().width,
		});
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
			<EpMain>
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
							éclairage <br /> public
						</SidebarPlayTitle>
						<SidebarPlayInfos>
							<SubTitle>durée&nbsp;:</SubTitle> 1h
							<br />
							<br />
							<SubTitle>conception&nbsp;:</SubTitle>
							<br />
							Nina Ayachi
							<br />
							Salomé Dugraindelorge
							<br /> Victor Inisan
							<br /> Adrien Madinier
							<br />
							<br />
							<SubTitle>mise en scène&nbsp;:</SubTitle>
							<br />
							Victor Inisan
							<br />
							<br />
							<SubTitle>
								assistanat <br />à la mise en scène&nbsp;:{' '}
							</SubTitle>
							<br />
							Adrien Madinier
							<br />
							<br />
							<SubTitle>chorégraphie&nbsp;: </SubTitle>
							<br />
							Salomé Dugraindelorge
							<br />
							<br />
							<SubTitle>avec :</SubTitle>
							<br /> Nina Ayachi
							<br /> Victor Inisan
							<br /> Adrien Madinier
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
										éclairage <br /> public
									</SidebarPlayTitle>
								</SP>
								<SP>
									<SubTitle>résumé</SubTitle> Tous les soirs,
									c’est l’hécatombe du petit cosmos&nbsp;: des
									milliers d’insectes, irrésistiblement
									attirés par la lumière artificielle,
									tournent et s’épuisent autour des
									réverbères... C’est le phénomène de
									phototaxie&nbsp;; triste fait de la
									pollution lumineuse&nbsp;? Dans un
									dispositif interactif et ludique,{' '}
									<i>Éclairage Public</i> explore le chemin de
									l’insecte à la découverte des lampadaires,
									de la première ampoule au fond de la nuit
									jusqu'au bain glorieux de lumière. Un chemin
									d’épuisement aussi pour les performers, qui
									perturbent et décalent l’imaginaire
									didactique pour interpréter ce voyage
									émotif. Qu’est-ce que la phototaxie
									expliquée par un fan de Joe Dassin&nbsp;?
								</SP>
								<Carousel
									autoplay={true}
									width={`${this.state.boxWidth}px`}
								>
									<img src={public1} />
									<img src={public2} />
									<img src={public3} />
									<img src={public4} />
								</Carousel>
								<SP>
									<SubTitle>note d'intention </SubTitle>{' '}
									<i>
										« On a les Lumières qu'on peut, notre
										époque sera éclairée à la pollution
										lumineuse. »
									</i>{' '}
									— Annie Le Brun, <i>Du trop de réalité </i>
								</SP>
								<SP>
									Aujourd’hui, l’éclairage représente 15% de
									la facture d’électricité mondiale, avec 4
									milliards de lampes d’éclairage public en
									fonction, dont 11 millions en France.
									Autrement dit, la pollution est lumineuse —
									tous les soirs la Voie Lactée disparaît pour
									un tiers du monde — et énergétique, avec
									1150 millions de tonnes de CO2 rejetés par
									an. Cependant, un esprit écologique
									s’emploie heureusement à la pallier par une
									série de restrictions récentes&nbsp;:
									interdiction des lampadaires
									«&nbsp;boule&nbsp;» (qui envoient
									inutilement 50% de leur lumière vers le
									ciel), des enseignes lumineuses, des lampes
									à incandescence… Et pour les
									remplacer&nbsp;:&nbsp;l'unique LED et ses
									réverbères blanchis. La LED - lumière de
									notre temps - est-elle la panacée&nbsp;?
								</SP>

								<SP>
									<i>Éclairage Public </i>
									exhume une des apories de la LED : sa
									couleur. Car son spectre froid — se
									substituant au jaune chaleureux des lampes à
									vapeur de sodium — dérègle en effet la
									production de la mélatonine chez l’homme
									(l’hormone du sommeil) et perturbe
									considérablement la faune et la flore
									environnante. La LED est notamment la diode
									tombale des insectes qui se repèrent grâce à
									la Lune&nbsp;: ils s’épuisent à confondre
									les blancs. Autant de morts prématurées…
									C’est le <i>fatum</i> de la
									phototaxie&nbsp;: le mouvement des
									organismes face à la lumière. Qu’elle soit
									négative (la vie du noir disparaît) ou
									positive (le trop-de-lumière désoriente à
									mourir), l’hécatombe croît sous une bannière
									immaculée. A-t-on oublié que la plupart des
									animaux sont nocturnes&nbsp;?
								</SP>
								<SP>
									<i>Éclairage Public</i> illustre la
									phototaxie positive d’un insecte — du
									premier réverbère à la profusion de lumière.
									Un voeu d’échec&nbsp;? Les performers sont
									résolument humains&nbsp;: ils ne peuvent
									s’accoutrer d’aucun déguisement… Il leur
									faut donc réaliser l’impossible&nbsp;:
									émouvoir sur un thème didactique.{' '}
									<i>Éclairage Public</i> a ainsi choisi de
									déranger l’imaginaire pédagogique en
									immergeant le spectateur dans un dispositif
									ludique et interactif qui déniche le
									burlesque du propos. L’acteur n’est pas un
									insecte, il s’en amuse&nbsp;: il devra
									expliquer avec une méthode et des émotions
									humaines… En l’occurrence&nbsp;: l’insecte
									devient un fan de Joe Dassin, suivi à
									l’instar d’un animal dans un reportage
									animalier. Non pas fortuit : la musique de
									Joe Dassin est à l’émotion ce que la lumière
									est à l’insecte — un facteur d’épuisement.
									La parabole par le fan veut humaniser
									l’inconnu.
								</SP>
								<SP>
									Il est unanime, aujourd’hui, que la lumière
									la moins nocive pour la faune et la flore
									est la lampe au sodium basse pression. Seul
									hic&nbsp;: elle rend les couleurs de manière
									catastrophique… Coïncidence épistémologique
									? Préserver la nature, c’est la rendre sous
									un jour diminué ; la rendre à la nuit.{' '}
									<i>Éclairage Public</i> — à travers
									l’épuisement de l’acteur — est une tentative
									désespérée de reconquérir la nuit par
									l’émotion. Mêlant expérimentations
									lumineuses et performance d’acteur, le
									spectacle s’élève contre l’hégémonie des
									blanches lumières&nbsp;; il trace la carte
									d’une recoloration voire d’un noircissement
									de la nuit.{' '}
									<i>
										«&nbsp;La nuit ne parle que du jour,
										elle en est le pressentiment, elle en
										est la réserve et la profondeur&nbsp;»
									</i>
									, disait Blanchot. Qui veut conquérir la
									nuit remporte le jour&nbsp;: ainsi
									l’éclairage public se fait vaste combat
									politique.
								</SP>
							</PlayContent>
						</PerfectScrollbar>
					</PlayContentWrapper>
				</PlayRow>
			</EpMain>
		);
	}
}

export default withRouter(Ep);
