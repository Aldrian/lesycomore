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
						<Title>25-26 jan. 2019</Title>
						<br />
						Nuits du Sycomore <br />— #Hivernales
						<br />
						<Title>horaires :</Title>
						<br />
						Vendredi et samedi de 17h à 00h
						<br />
						<Title>
							<A
								href="https://www.helloasso.com/associations/le-sycomore/evenements/nuits-du-sycomore-hivernales?fbclid=IwAR33C02CEybtkJD9PLLSx-F2FW7AkFh_25v2b2FDmq_wGJtKq6SmqIbdndk"
								target="_blank"
							>
								réservations
							</A>
						</Title>
						<br />
						<Title>
							<A
								href="https://www.facebook.com/events/389724231764739/"
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
