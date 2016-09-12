import React, { Component } from 'react';
import Picture from './Picture';

class PictureList extends Component {
	constructor() {
		super(...arguments);
		if(this.props.listType === "gallery") {
			this.state = { showDetails: true };
		} else {
			this.state = { showDetails: false };
		}
	}

	toggleDetails(e) {
		this.setState({showDetails: !this.state.showDetails});
		e.stopPropagation();
	}

	render() {
	
		let pictures;
		pictures = this.props.gallery.map((picture, i) => {

			var path = this.props.path + '[' + i + ']';
			return <Picture 
				path={path}
				key={picture.fileName}
				fileName={picture.fileName}
				title={picture.title}
				medium={picture.medium}
				description={picture.description}
				pictures={picture.pictures}
				relatedPictures={picture.relatedPictures}
				taskCallbacks={this.props.taskCallbacks}   // call pictureList callback
			/>

		});
		
		var className = "pictureList " + this.props.listType + (this.state.showDetails? " isOpen" : " isClosed");
		return (
			<div className={className}  >
				<h1 onClick={this.toggleDetails.bind(this)}>{this.props.title}</h1>	
				<div>
				{pictures}
				</div>
			</div>
		);
	}
};

export default PictureList;
