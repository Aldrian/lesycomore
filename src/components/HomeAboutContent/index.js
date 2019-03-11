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
	text-align: ${props => (props.alignRight ? 'right' : 'justify')};
	@media screen and (max-width: 900px) {
		text-align: ${props => (props.alignRight ? 'right' : 'left')};
	}
`;
const Title = styled('span')`
	font-variant: small-caps;
	letter-spacing: 4px;
	color: ${lightBeige};
	font-family: 'BWHaas', sans-serif;
`;

const HomeAboutContentMain = styled('div')`
	max-height: 70vh;
	animation: ${slideTop} 0.8s ease-out;
	padding-left: 20px;
	padding-right: 20px;
	@media screen and (max-width: 900px) {
		height: calc(100vh - 220px);
		max-height: calc(100vh - 220px);
		padding-left: 0px;
		padding-right: 0px;
	}
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
						Dans les premiers spectacles d’André Engel à Strasbourg,
						la fiction s’enclenche «&nbsp;à cause&nbsp;» du
						spectateur.
					</SP>
					<SP>L’histoire&nbsp;:</SP>
					<SP>Le dérèglement d’un spectacle savamment préparé,</SP>
					<SP>
						L’apparence plastique d’une harmonie (surtout dans{' '}
						<i>Yaïck</i>) dont la mise en scène s’écroule pour en
						exhumer une autre&nbsp;: celle du situationniste Engel.
					</SP>
					<SP>
						<i>
							«&nbsp;L’art de l’acteur ne consiste plus à informer
							les spectateurs sur l’acteur et sur la scène, mais
							au contraire à informer le spectateur sur lui-même.»
						</i>
					</SP>
					<SP>
						<i>Le Sycomore</i> veut approfondir le terme de
						spectacle&nbsp;: spectacle social, médiatique et
						artistique.
					</SP>
					<SP>
						Engel écrit en 1977 :<br />
					</SP>
					<SP>
						<i>
							«&nbsp;Privé de toute procuration, le spectateur est
							renvoyé à sa présence suspecte. (…) Or s’il éprouve
							des difficultés à comprendre le pourquoi de sa
							présence, le spectateur doit désormais chercher à la
							justifier. Il n’est plus là pour regarder et
							entendre, mais il doit entendre et regarder afin de
							comprendre pourquoi il est là&nbsp;».
						</i>
					</SP>
					<SP>
						La friction avec le spectateur crée le drame. Plus
						précisément&nbsp;:
					</SP>
					<SP>Le spectateur enclenche la fiction,</SP>
					<SP>
						Le metteur en scène crée un dispositif pour la fiction.
					</SP>
					<SP>
						Kantor dit ceci&nbsp;: <br />
					</SP>
					<SP>
						<i>
							«&nbsp;Dans leur première phase d’existence, ils
							[les acteurs] appartiennent à la réalité de la salle
							— disons simplement qu’ils sont quasiment des
							spectateurs. À partir de là se développent leur
							indépendance, leur individualité, leur altérité, et
							lentement, ils acquièrent un plus grand ou un plus
							petit degré d’illusion de personnages
							scéniques.&nbsp;»
						</i>
					</SP>
					<SP>
						La fiction (des acteurs) se charge petit à petit&nbsp;:
						en illusion et en matière.
					</SP>
					<SP>Elle s’agence&nbsp;: c’est le tempo.</SP>
					<SP>
						Germant lentement à l’intérieur de la réalité et mourant
						à petit feu.
					</SP>
					<SP>
						Voilà — elle ébrèche le spectateur. Le spectacle n’en
						est qu’une mesure (à la limite, la floraison). Point de
						mises en scène du réel à l’intérieur du <i>Sycomore</i>{' '}
						! — Les fictions craignent le naturalisme, elles ont
						connu le monde renversé.
					</SP>
					<SP>
						Peut-être seulement, à force de surcharges (acteurs,
						lumière, son, décor…), qu’elles finiront par tournoyer,
						resplendir, exploser&nbsp;; et seulement là elles seront
						baroques voire pathétiques, et les situations
						deviendront complètement folles, la matière sera
						électrique et les acteurs monstrueux, et on verra à
						l’oeuvre des forces inassouvies.
					</SP>
					<SP>
						<i>
							«&nbsp;Créer en elle [la réalité] un espace
							imaginaire qui devait rapidement s’avérer bien plus
							risqué et bien plus fou que le « merveilleux » du
							surréalisme et la liberté de l’abstraction&nbsp;»
						</i>
						, dit encore Kantor.
					</SP>
					<SP>
						Avides des univers qui lui échappent, le <i>Sycomore</i>{' '}
						part ainsi sur les traces d’un art d’interaction
						(situationniste) et d’immersion (lente).
						<br />
						<br />
					</SP>

					<SP>
						<Title>carnets — #2</Title>
						<br />
						<i>Un art pour les objets.</i>
					</SP>
					<SP>
						Le théâtre qui se met en quête de disséquer la réalité,
						de l'élucider, perd tout ce qui fait sa gloire. Car sur
						la table de chirurgie qu'est devenue la scène, l'objet
						est traité de manière utilitaire, assigné à la tâche de
						s'emparer de la réalité, de la comprendre. Et alors que
						tout a pour fonction de représenter, la matière n'a plus
						droit de vie. L'espace baroque et surchargé lui, empêche
						toute chose – et surtout l'acteur – de vivre de manière
						autonome. La possibilité de vivre et d'habiter un espace
						resurgit alors ; étrangement, on étouffe moins lorsque
						la scène a été vidée de son vide.
					</SP>

					<SP>
						Ainsi, des meubles, des objets – désuets de préférence –
						s'entassent sur la scène. Il s'agit d'amasser fenêtres,
						tapis, cloisons, poutres, bibelots de toute sorte. Grâce
						à cet amas de matière, il est soudain possible de
						protéger les réalités les plus décisives, celles qui
						sont derrière le théâtre et en nous. Si le paravent est
						l'objet le plus impérieux du théâtre, c'est parce qu'il
						peut dissimuler à la vue du public des scènes, composer
						des coins d'ombre. Si nous parvenions à créer une
						architecture labyrinthique, un bastion empêchant
						d'accéder à ce qui ne veut pas être vu, le théâtre ne
						serait pas des entrailles ouvertes que l'on exhibe
						impudiquement au public mais un ruban cousu sur une
						plaie, la possibilité de faire contrebande de secrets.
					</SP>

					<SP>
						Aussi, l'objet sur scène doit être libéré de sa fonction
						de représenter. Ce que renferme le meuble est plus
						décisif pour le théâtre que ce qu'il doit représenter.
						Si une armoire est sur scène, elle n'est pas là pour
						figurer un intérieur, mais pour exciter en nous le désir
						d'ouvrir ses portes, de fouiller ses tiroirs. Et si
						quelqu'un venait à plonger au fond pour lui arracher ses
						secrets, d'étonnants enchevêtrements de bois, de
						planches et d'homme pourraient alors se réaliser.
					</SP>

					<SP alignRight>
						<i>À suivre</i>
					</SP>
				</HomeAboutContentMain>
			</PerfectScrollbar>
		);
	}
}

export default HomeAboutContent;
