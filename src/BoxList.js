import React, { Component } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

export default class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: []
		};
		this.create = this.create.bind(this);
	}

	remove(id) {
		this.setState({ boxes: this.state.boxes.filter(box => box.id !== id) });
	}

	create(newBox) {
		this.setState(st => ({
			boxes: [...st.boxes, newBox]
		}));
	}

	render() {
		const boxes = this.state.boxes.map(box => (
			<Box
				key={box.id}
				id={box.id}
				width={box.width}
				height={box.height}
				backgroundColor={box.backgroundColor}
				removeBox={() => this.remove(box.id)}
			/>
		));

		return (
			<div>
				<NewBoxForm createBox={this.create} />
				{boxes}
			</div>
		);
	}
}
