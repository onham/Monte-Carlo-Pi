import React, { Component } from 'react';
import { Card, Header } from 'semantic-ui-react';


/*
@func: ESTABLISHING UI COMPONENT
*/
const statsBar = (props) => {
	return(
		<div style={{
			margin: '0px 0 10px 0'
		}}>
		<Header as='h1' block>
			Monte Carlo Approximation of Pi
		</Header>

		<Card.Group centered>
			<Card>
				<Card.Content>
					<Card.Header>Total number of points</Card.Header>
					<Card.Description>{props.totalPts}</Card.Description>
				</Card.Content>
			</Card>

			<Card>
				<Card.Content>
					<Card.Header>Number of points within circle</Card.Header>
					<Card.Description>{props.insidePts}</Card.Description>
				</Card.Content>
			</Card>

			<Card>
				<Card.Content>
					<Card.Header>Pi Approximation</Card.Header>
					<Card.Description>{props.pi}</Card.Description>
				</Card.Content>
			</Card>
		</Card.Group>
		</div>
	)
}


export default statsBar;