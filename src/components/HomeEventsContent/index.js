import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';

import {lightBeige} from '../../utils/content';

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

const HomeEventsContentMain = styled('div')`
	animation: ${slideTop} 0.8s ease-out;
`;

const Title = styled('span')`
	text-transform: uppercase;
	color: ${lightBeige};
	font-family: 'BWHaas', sans-serif;
`;

const Event = styled('div')`
	margin-bottom: 40px;
	text-align: center;
`;

const A = styled('a')`
	color: ${lightBeige};
`;

class HomeEventsContent extends Component {
	render() {
		return (
			<HomeEventsContentMain>
				<Event>
					<Title>18 nov. 2018</Title>
					<br />
					Le Sycomore dans <br /> À l’écoute du Bal Rêvé <br />
					d'Alberto Sorbelli
					<br />
					<br />
					<Title>horaires :</Title> 17h-22h <br />
					<br />
					<Title>
						<A href="">>réservations</A>
					</Title>
					<br />
					<Title>
						<A href="">>event</A>
					</Title>
					<br />
				</Event>

				<Event>
					<Title>23-25 nov. 2018</Title>
					<br />
					Nuits du Sycomore <br />— #Automnale
					<br />
					Au revoir mon amour <br />
					<br />
					<Title>horaires :</Title>
					<br />
					Vendredi et samedi de 20h à 00h
					<br /> Dimanche de 18h à 22h
					<br />
					<br />
					<Title>
						<A href="">>réservations</A>
					</Title>
					<br />
					<Title>
						<A href="">>event</A>
					</Title>
				</Event>
			</HomeEventsContentMain>
		);
	}
}

export default HomeEventsContent;
