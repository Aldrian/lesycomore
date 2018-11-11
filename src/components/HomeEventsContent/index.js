import React, {Component} from 'react';
import styled, {keyframes} from 'react-emotion';
import PerfectScrollbar from 'react-perfect-scrollbar';

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
	@media screen and (max-width: 900px) {
		display: block;
		padding-left: 20px;
		padding-right: 20px;
		height: calc(100vh - 220px);
		margin-top: 20px;
	}
`;

const Title = styled('span')`
	font-variant: small-caps;
	letter-spacing: 4px;
	color: ${lightBeige};
	font-family: 'BWHaas', sans-serif;
	font-size: 110%;
`;

const Event = styled('div')`
	margin-bottom: 40px;
`;

const A = styled('a')`
	color: ${lightBeige};
`;

class HomeEventsContent extends Component {
	render() {
		return (
			<PerfectScrollbar>
				<HomeEventsContentMain>
					<Event>
						<Title>18 nov. 2018</Title>
						<br />
						Le Sycomore dans <br /> <i>
							À l’écoute du Bal Rêvé
						</i>{' '}
						<br />
						d'Alberto Sorbelli
						<br />
						<Title>horaires :</Title> 17h-22h <br />
						<Title>
							<A
								href="https://www.yesgolive.com/le-generateur/a-lecoute-du-bal-reve"
								target="_blank"
							>
								réservations
							</A>
						</Title>
						<br />
						<Title>
							<A
								href="https://www.facebook.com/events/156896861924818/"
								target="_blank"
							>
								event
							</A>
						</Title>
						<br />
					</Event>

					<Event>
						<Title>23-25 nov. 2018</Title>
						<br />
						Nuits du Sycomore <br />— #Automnale
						<br />
						<i>Au revoir mon amour</i> <br />
						<Title>horaires :</Title>
						<br />
						Vendredi et samedi de 20h à 00h
						<br /> Dimanche de 18h à 22h
						<br />
						<Title>
							<A
								href="mailto:judy@le-sycomore.fr"
								target="_blank"
							>
								réservations
							</A>
						</Title>
						<br />
						<Title>
							<A
								href="https://www.facebook.com/events/2193559374010109/"
								target="_blank"
							>
								event
							</A>
						</Title>
					</Event>
				</HomeEventsContentMain>
			</PerfectScrollbar>
		);
	}
}

export default HomeEventsContent;
