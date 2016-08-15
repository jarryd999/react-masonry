import React from 'react'

export default class Tile extends React.Component {
	constructor(props){
		super(props);
		this.state = { loaded: this.props.loaded }
	}

	render() {
		let className = this.props.favorite ? "tile tile-favorite" : "tile";
		let loaded = this.state.loaded;
		if (loaded)
			className += " loaded";

		return (
			<li className={className} onClick={e => this.props.onClick(e)}>
				<img src={this.props.imgSrc} width='100%' onLoad={
					() => this.setState({ loaded: true })}/>
				<div className='overlay'>Views: {this.props.viewCount}
					<div>Click to toggle favorite</div>
				</div>
			</li>
		)
	}
}