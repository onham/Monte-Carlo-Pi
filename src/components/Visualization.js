import React, { Component } from 'react';



/*
@func: COMPONENT RESPONSIBLE FOR VISUALIZATION
*/
class Visualization extends Component {
	constructor(props) {
	   super(props);
	   this.canvas = React.createRef();
	}

	/*
	@func: WHAT TO DO WHEN THE REACT COMPONENT MOUNTS
	@info: ESTABLISHING THE CANVAS
	*/
	componentDidMount() {
		const context = this.refs.canvas.getContext("2d");

		context.beginPath();
		context.moveTo(100, 200);
		context.lineTo(100, 100);
		context.arc(100, 100, 100, 0, 2 * Math.PI);
		context.stroke();
	}

	/*
	@func: IF THE COMPONENT UPDATES
	@info: IF THE RESET VALUE IS TRUE THEN CLEAN THE POINTS AND REMOUNT THE COMPONENT
	*/
	componentDidUpdate() {
		if (this.props.cleared === true) {
			this.cleanCanvas();
			this.componentDidMount();
		} else {
			this.paint();	
		}
	}	  

	/*
	@func: PAINTS THE POINTS
	*/
	paint() {
		const { x, y } = this.props;
		const context = this.refs.canvas.getContext("2d");
		context.fillStyle = (Math.sqrt(x*x + y*y) < 1) ? 'green' : 'red' ;
		context.fillRect((x*100)+99, (y*100)+99, 2, 2);
	}

	/*
	@func: CLEANS THE POINTS FROM CANVAS
	*/
	cleanCanvas() {
		const context = this.refs.canvas.getContext("2d");
		context.clearRect(0,0,200,200);
	}

	render() {
		const { width, height } = this.props;
		return(
			<div>
				<canvas
			      height={height}
			      width={width}
			      ref="canvas"
			      style={{
			      	border: "solid 2px #CCC",
			      	display: 'inline'
			      }}
			   />
		   </div>
		);
	}
}

export default Visualization;