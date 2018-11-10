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

import {
	FlexRow,
	H4,
	darkBeige,
	primaryWhite,
	lightBeige,
	P,
} from '../../../utils/content';

const PlaySidebar = styled('div')`
	max-height: calc(100vh - 80px);
`;

const SP = styled(P)`
	text-align: justify;
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
`;

const SidebarPlayInfos = styled(P)`
	margin-top: 60px;
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
`;

const EpMain = styled('div')`
	width: calc(100vw - 80px);
`;

class Ep extends Component {
	render() {
		return (
			<EpMain>
				<FlexRow>
					<PlaySidebar>
						<SidebarTitle
							onClick={() => {
								this.props.history.push('/home');
							}}
						>
							retour
						</SidebarTitle>
						<SidebarPlayTitle>
							éclairage <br /> public
						</SidebarPlayTitle>
						<SidebarPlayInfos>
							<SubTitle>durée :</SubTitle> 1h30
							<br />
							<br />
							<SubTitle>conception :</SubTitle>
							<br />
							Nina Ayachi
							<br />
							Salomé Dugraindelorge
							<br /> Victor Inisan
							<br /> Adrien Madinier
							<br />
							<br />
							<SubTitle>
								collaboration <br />à la mise en scène :{' '}
							</SubTitle>
							<br />
							Adrien madinier
							<br />
							<br />
							<SubTitle>chorégraphie : </SubTitle>
							<br />
							Salomé Dugraindelorge
							<br />
							<br />
							<SubTitle>avec :</SubTitle>
							<br /> Nina Ayachi
							<br /> Victor Inisan et
							<br /> Adrien Madinier
							<br /> (en alternance)
						</SidebarPlayInfos>
					</PlaySidebar>
					<PlayContentWrapper>
						<PerfectScrollbar>
							<PlayContent>
								<Carousel autoplay={true}>
									<img src={public1} />
									<img src={public2} />
									<img src={public3} />
									<img src={public4} />
								</Carousel>
								<SP>
									<SubTitle>résumé</SubTitle> Tous les soirs,
									c’est l’hécatombe du petit cosmos : des
									milliers d’insectes, irrésistiblement
									attirés par la lumière artificielle,
									tournent et s’épuisent autour des
									réverbères... C’est le phénomène de
									phototaxie ; triste fait de la pollution
									lumineuse ? Dans un dispositif interactif et
									ludique, <i>Éclairage Public</i> explore le
									chemin de l’insecte à la découverte des
									lampadaires, de la première ampoule au fond
									de la nuit jusqu'au bain glorieux de
									lumière. Un chemin d’épuisement aussi pour
									les performers, qui perturbent et décalent
									l’imaginaire didactique pour interpréter ce
									voyage émotif ; une tentative désespérée de
									reconquérir la nuit.
								</SP>
								<SP>
									<SubTitle>NOTE D’INTENTION </SubTitle>{' '}
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
									série de restrictions récentes :
									interdiction des lampadaires « boule » (qui
									envoient inutilement 50% de leur lumière
									vers le ciel), des enseignes lumineuses, des
									lampes à incandescence… Et pour les
									remplacer : l'unique LED et ses réverbères
									blanchis. La LED - lumière de notre temps -
									est-elle la panacée ?
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
									la Lune : ils s’épuisent à confondre les
									blancs. Autant de morts prématurées… C’est
									le <i>fatum</i> de la phototaxie : le
									mouvement des organismes face à la lumière.
									Qu’elle soit négative (la vie du noir
									disparaît) ou positive (le trop-de-lumière
									désoriente à mourir), l’hécatombe croît sous
									une bannière immaculée. A-t-on oublié que la
									plupart des animaux sont nocturnes ?
								</SP>
								<SP>
									<i>Éclairage Public</i> illustre la
									phototaxie positive d’un insecte — du
									premier réverbère à la profusion de lumière.
									Un voeu d’échec ? Les performers sont
									résolument humains : ils ne peuvent
									s’accoutrer d’aucun déguisement… Il leur
									faut donc réaliser l’impossible : émouvoir
									sur un thème didactique.{' '}
									<i>Éclairage Public</i> a ainsi choisi de
									déranger l’imaginaire pédagogique en
									immergeant le spectateur dans un dispositif
									ludique et interactif qui déniche le
									burlesque du propos. L’acteur n’est pas un
									insecte, il s’en amuse : il devra expliquer
									avec une méthode et des émotions humaines…
									En l’occurrence : l’insecte devient un fan
									de Joe Dassin, suivi à l’instar d’un animal
									dans un reportage animalier. Non pas fortuit
									: la musique de Joe Dassin est à l’émotion
									ce que la lumière est à l’insecte — un
									facteur d’épuisement. La parabole par le fan
									veut humaniser l’inconnu — une utopie
									revendiquée.
								</SP>
								<SP>
									Il est unanime, aujourd’hui, que la lumière
									la moins nocive pour la faune et la flore
									est la lampe au sodium basse pression. Seul
									hic : elle rend les couleurs de manière
									catastrophique… Coïncidence épistémologique
									? Préserver la nature, c’est la rendre sous
									un jour diminué ; la rendre à la nuit.
									<i>Éclairage Public</i> — à travers
									l’épuisement de l’acteur — est une tentative
									désespérée de reconquérir la nuit par
									l’émotion. Mêlant expérimentations
									lumineuses et performance d’acteur, le
									spectacle s’élève contre l’hégémonie des
									blanches lumières ; il trace la carte d’une
									recoloration voire d’un noircissement de la
									nuit.{' '}
									<i>
										« La nuit ne parle que du jour, elle en
										est le pressentiment, elle en est la
										réserve et la profondeur »
									</i>
									, disait Blanchot. Qui veut conquérir la
									nuit remporte le jour : ainsi l’éclairage
									public se fait vaste combat politique.
								</SP>
							</PlayContent>
						</PerfectScrollbar>
					</PlayContentWrapper>
				</FlexRow>
			</EpMain>
		);
	}
}

export default withRouter(Ep);
