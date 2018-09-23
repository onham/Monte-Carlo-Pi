import React, { Component } from 'react';
import { Button, Input, Rating, Card } from 'semantic-ui-react';



/*
@func: COMPONENT RESPONSIBLE FOR HANDLING FRONT END LOGIC
*/
class ButtonFunctionality extends Component {
	constructor(props) {
	   super(props);
	   this.state = {
	   	isStopped: '',
	   	inputValue: '',
	   	readyToRerun: !this.props.cleared,
	   	speed: 1
	   }
	}

	/*
	@func: RUNNING THE APPROXIMATION SIMULATION
	*/
	runSim = () => {
		if(this.props.totalPts == this.state.inputValue){
	   	return this.setState({
	   		isStopped: true
	   	})
		} else if (this.state.isStopped == true || this.state.readyToRerun == false) {
			return this.setState({
				readyToRerun: true
			});
		}
		this.props.approxPi();
		requestAnimationFrame(this.runSim);
	}

	/*
	@func: TAKES INPUT VALUE
	*/
	updateInputValue = (event) => {
		this.setState({
			inputValue: event.target.value
		})
		if (this.state.cleared){
			this.setState({
				inputValue: ''
			})
		}
	}

	/*
	@func: PAUSES THE SIMULATION
	@info: BUTTON NEEDS TO BE PRESSED AGAIN TO "UNLOCK" SIMULATION STATE
	*/
	stopSim = () => {
		const _isStopped = !this.state.isStopped
		this.setState({
			isStopped: _isStopped
		})
	}

	/*
	@func: CHANGES SPEEDS OF SIMULATION
	*/
	changeSpeed = (event) => {
		this.setState({
			speed: event.target.value
		});
		if (this.state.speed == 2){
			requestAnimationFrame(this.runSim);
		} else if (this.state.speed == 3) {
			requestAnimationFrame(this.runSim);
			requestAnimationFrame(this.runSim);
		}
	}

	/*
	@func: CHANGES TEXT CONTENT OF PAUSE BUTTON
	*/
	lockTextChange = () => {
		let text;
		if (this.state.isStopped) {
			return text = 'Paused';
		} else {
			return text = 'Pause';
		}
	}

	/*
	@func: HANDLES RESET LOGIC
	*/
	resetClickHandler = () => {
		this.props.reset();
		this.stopSim();
	}

	render(){
		return (
			<div>
			
				<div>
					<Button onClick={this.props.approxPi}>Click to add point</Button>
				</div>

				<div>
					<Button primary onClick={this.runSim}>Simulate</Button>
					<Input type="text" 
					placeholder="Please specify # of points" 
					value={this.state.inputValue}
					onChange={this.updateInputValue}
					style={{
						margin: "20px 0 20px 0"
					}} />
				</div>

				<div style={{
						margin: "0 0 20px 0"
					}}>
					<Button secondary onClick={this.stopSim} content={this.lockTextChange()}></Button>
					<Button secondary onClick={this.resetClickHandler}>Reset</Button>
				</div>

				<div>
					<Card centered>
						<Card.Content>
							<Card.Header>Speed: {this.state.speed}</Card.Header>
							<Input type='range' 
							min={1} max={3} 
							value={this.state.speed} 
							onChange={this.changeSpeed} />
						</Card.Content>
					</Card>
					<br />
				</div>

			</div>
		);
	}
}

export default ButtonFunctionality;