import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import {Link} from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {P, lightBeige} from '../../utils/content';
import 'react-perfect-scrollbar/dist/css/styles.css';

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

const SP = styled(P)`
	text-align: justify;
`;
const Title = styled('span')`
	text-transform: uppercase;
	color: ${lightBeige};
	font-family: 'BWHaas', sans-serif;
`;

const HomeAboutContentMain = styled('div')`
	max-height: 70vh;
	animation: ${slideTop} 0.8s ease-out;
`;

class HomeAboutContent extends Component {
	render() {
		return (
			<PerfectScrollbar>
				<HomeAboutContentMain>
					<SP>
						<Title>carnets — #1</Title>
						<br />
						<i>Un art pour le spectateur.</i>
					</SP>
					<SP>
						Dans les premiers spectacles d’Engel à Strasbourg, la
						fiction s’enclenche « à cause » du spectateur.
						L’histoire : le dérèglement d’un spectacle savamment
						préparé. L’apparence plastique d’une harmonie (surtout
						dans <i>Yaïck</i>) dont la mise en scène s’écroule pour
						en exhumer une autre : celle du situationniste Engel.
					</SP>
					<SP>
						<i>
							« L’art de l’acteur ne consiste plus à informer les
							spectateurs sur l’acteur et sur la scène, mais au
							contraire à informer le spectateur sur lui-même.»
						</i>
					</SP>
					<SP>
						Le <i>Sycomore</i> veut approfondir le terme de
						spectacle : spectacle social, médiatique et artistique.
						Engel écrit en 1977 :<br />
						<i>
							«Privé de toute procuration, le spectateur est
							renvoyé à sa présence suspecte. (…) Or s’il éprouve
							des difficultés à comprendre le pourquoi de sa
							présence, le spectateur doit désormais chercher à la
							justifier. Il n’est plus là pour regarder et
							entendre, mais il doit entendre et regarder afin de
							comprendre pourquoi il est là ».
						</i>
					</SP>
					<SP>
						La friction avec le spectateur crée le drame. Plus
						précisément : le spectateur enclenche la fiction, le
						metteur en scène crée un dispositif pour la fiction.
						Kantor dit ceci : <br />
						<i>
							« Dans leur première phase d’existence, ils [les
							acteurs] appartiennent à la réalité de la salle —
							disons simplement qu’ils sont quasiment des
							spectateurs. À partir de là se développent leur
							indépendance, leur individualité, leur altérité, et
							lentement, ils acquièrent un plus grand ou un plus
							petit degré d’illusion de personnages scéniques. »
						</i>
					</SP>
					<SP>
						La fiction (des acteurs) se charge petit à petit : en
						illusion et en matière. Elle s’agence : c’est le tempo.
						Germant lentement à l’intérieur de la réalité et mourant
						à petit feu. Voilà — elle ébrèche le spectateur. Le
						spectacle n’en est qu’une mesure (à la limite, la
						floraison). Point de mises en scène du réel à
						l’intérieur du <i>sycomore</i> ! — Les fictions
						craignent le naturalisme, elles ont connu le monde
						renversé. Peut-être seulement, à force de surcharges
						(acteurs, lumière, son, décor…), qu’elles finiront par
						tournoyer, resplendir, exploser ; et seulement là elles
						seront baroques voire pathétiques, et les situations
						deviendront complètement folles, la matière sera
						électrique et les acteurs monstrueux, et on verra à
						l’oeuvre des forces inassouvies.
					</SP>
					<SP>
						<i>
							« Créer en elle [la réalité] un espace imaginaire
							qui devait rapidement s’avérer bien plus risqué et
							bien plus fou que le « merveilleux » du surréalisme
							et la liberté de l’abstraction »
						</i>
						, dit encore Kantor.
					</SP>
					<SP>
						Avides des univers qui lui échappent, le <i>sycomore</i>{' '}
						part ainsi sur les traces d’un art d’interaction
						(situationniste) et d’immersion (lente).
					</SP>
					<SP>À SUIVRE</SP>
				</HomeAboutContentMain>
			</PerfectScrollbar>
		);
	}
}

export default HomeAboutContent;
