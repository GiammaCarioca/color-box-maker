import React, { Component } from 'react';

class componentName extends Component {
	render() {
		return (
			<div>
				<div
					style={{
						width: `${this.props.width}em`,
						height: `${this.props.height}em`,
						backgroundColor: this.props.backgroundColor
					}}
				/>
				<button onClick={this.props.removeBox}>x</button>
			</div>
		);
	}
}

export default componentName;
