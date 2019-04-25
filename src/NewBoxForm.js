import React, { Component } from 'react';
import uuid from 'uuid/v4';

export default class NewBoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			height: '',
			width: '',
			backgroundColor: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleSubmit = e => {
		e.preventDefault();

		const newBox = {
			...this.state,
			id: uuid()
		};

		this.props.createBox(newBox);
		this.setState({
			height: '',
			width: '',
			backgroundColor: ''
		});
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="height">Height: </label>
					<input
						type="text"
						id="height"
						name="height"
						value={this.state.height}
						onChange={this.handleChange}
					/>
					<label htmlFor="width">Width: </label>
					<input type="text" id="width" name="width" value={this.state.width} onChange={this.handleChange} />
					<label htmlFor="backgroundColor">backgroundColor: </label>
					<input
						type="text"
						id="backgroundColor"
						name="backgroundColor"
						value={this.state.backgroundColor}
						onChange={this.handleChange}
					/>
					<button>Add a new box!</button>
				</form>
			</div>
		);
	}
}
