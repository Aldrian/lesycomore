import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {withRouter} from 'react-router-dom';
import Carousel from 'nuka-carousel';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import larve1 from './larve1.jpg';
import larve2 from './larve2.jpg';
import larve3 from './larve3.jpg';

import {
	FlexRow,
	H4,
	darkBeige,
	primaryWhite,
	lightBeige,
	P,
} from '../../../utils/content';

const PlaySidebar = styled('div')``;

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
	margin-top: 40px;
	line-height: 1.5;
`;

const SidebarPlayInfos = styled(P)`
	margin-top: 80px;
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

const LaclMain = styled('div')`
	width: calc(100vw - 80px);
`;

class Lacl extends Component {
	render() {
		return (
			<LaclMain>
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
							<br /> Icare Bamba
							<br /> Victor Inisan
							<br /> Adrien Madinier
							<br />
						</SidebarPlayInfos>
					</PlaySidebar>
					<PlayContentWrapper>
						<PerfectScrollbar>
							<PlayContent>
								<SP>
									<SubTitle>RÉSUMÉ</SubTitle>{' '}
									<i>« L’acteur, cette larve »</i> : et si on
									prenait la formule au sérieux ? Pour
									(re)devenir des larves, au tout début de la
									vie, il faudrait s’atrophier, s’anémier, se
									déformer ; s’aventurer dans un rapport
									autarcique voire autiste au monde qui nous
									entoure. À l’envers de toute virtuosité, de
									toute performance, la larve cultiverait la
									lenteur, l’émerveillement du nourrisson, une
									certaine maladresse burlesque, la
									presque-capacité de parler et la
									presque-capacité d’agir. Au travers
									d’exercices scéniques, tous plus ou moins
									ramollis mais euphorisant, dans le mouvement
									vers la parole et l’action, espérons-le, la
									larve nous montrerait ce qu’il y a de
									primitif, d’archaïque et de préhistorique
									dans l’acte de jouer.
								</SP>
								<Carousel autoplay={true}>
									<img src={larve1} />
									<img src={larve2} />
									<img src={larve3} />
								</Carousel>
							</PlayContent>
						</PerfectScrollbar>
					</PlayContentWrapper>
				</FlexRow>
			</LaclMain>
		);
	}
}

export default withRouter(Lacl);
