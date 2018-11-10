import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {withRouter} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

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

const PlaySidebar = styled('div')``;

const SidebarTitle = styled(H4)`
	text-transform: uppercase;
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
	text-transform: uppercase;
	letter-spacing: 4px;
	color: ${primaryWhite};
	font-family: 'BWHaas', sans-serif;
	margin-top: 40px;
`;

const SidebarPlayInfos = styled(P)`
	margin-top: 80px;
`;

const SubTitle = styled('span')`
	letter-spacing: 4px;
	color: ${lightBeige};
	font-family: 'BWHaas', sans-serif;
	text-transform: uppercase;
	font-size: 80%;
`;

const PlayContentWrapper = styled('div')`
	flex: 2;
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

const ArmaMain = styled('div')`
	width: 100vw;
`;

class Arma extends Component {
	render() {
		return (
			<ArmaMain>
				<FlexRow>
					<PlaySidebar>
						<SidebarTitle
							onClick={() => {
								this.props.history.push('/home');
							}}
						>
							Retour
						</SidebarTitle>
						<SidebarPlayTitle>
							Au revoir <br /> mon amour
						</SidebarPlayTitle>
						<SidebarPlayInfos>
							<SubTitle>Durée :</SubTitle> 1h30
							<br />
							<br />
							<SubTitle>
								Conception visuelle
								<br /> et mise en scène :
							</SubTitle>
							<br />
							Victor Inisan
							<br />
							<br />
							<SubTitle>Dramaturgie : </SubTitle>
							<br />
							Nina Ayachi et Victor Inisan
							<br />
							<br />
							<SubTitle>Création sonore : </SubTitle>
							<br />
							Pierre Fourmeau
							<br /> Nicolas Hadot
							<br />
							<br />
							<SubTitle>Avec :</SubTitle>
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
							<PlayContent>
								<P>
									<SubTitle>RÉSUMÉ</SubTitle>{' '}
									<i>
										« Deux mondes — deux réalités. La
										frontière qui les sépare s’évapore pour
										Louis ; son corps va bientôt la
										traverser. Une figure de l’autre monde
										le remplacera lors d’une cérémonie de
										départ : qui est-ce ? »
									</i>
								</P>
								<P>
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
								</P>
								<P>
									À mi-chemin entre théâtre et danse,
									<i> Au revoir mon amour</i> imagine une
									parabole visuelle et poétique sur la
									migration des corps et des âmes.{' '}
								</P>
								<Carousel autoplay={true}>
									<img src={arma1} />
									<img src={arma2} />
									<img src={arma3} />
								</Carousel>
							</PlayContent>
						</PerfectScrollbar>
					</PlayContentWrapper>
				</FlexRow>
			</ArmaMain>
		);
	}
}

export default withRouter(Arma);
