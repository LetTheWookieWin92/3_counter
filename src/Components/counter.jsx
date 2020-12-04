import React, { Component } from "react";

class Counter extends Component {
	//Includes any data this component needs
	state = {
		count: 69,
		tags: ["tag1", "tag2", "tag3"],
	};

	//
	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>
					Increment
				</button>
			</div>
		);
	}

	//Using the predefined badge classes, look at the value of count (under state) and use a warning or primary type badge
	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.state.count === 0 ? "warning" : "primary";
		return classes;
	}

	// Look at the value of count, if it's 0 then write 'Zero' not '0', otherwise the value of count
	formatCount() {
		const { count } = this.state;
		return count === 0 ? "Zero" : count;
	}

	//Event handler for increment button. Note use of arrow function
	handleIncrement = () => {
		console.log("Hi", this.state.count);
	};
}

export default Counter;
