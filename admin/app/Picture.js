import React, { Component } from 'react';
import PictureList from './PictureList';

class Picture extends Component {
	constructor() {
console.log("Line 6, Picture constructor");
		super();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		var target = event.target ? event.target : event;
		this.props.onUserSubmit(target);
	}

	toggleDetails(e) {
		this.setState({showDetails: !this.state.showDetails});
		e.stopPropagation();
	}
	
	render() {
	    var subPictureList = "";
	    var relatedPictureList = "";
		if(this.props.pictures){

			var title = 'Sub-gallery for "' + this.props.title +'":';
			var path = this.props.path + '.pictures';

			subPictureList = <PictureList 
				path={path}
				listType='subGallery'
				title={title}
				description={this.props.description}
				gallery={this.props.pictures}
				taskCallbacks={this.props.taskCallbacks} //calls picture callback
			/>


		}
		else if(this.props.relatedPictures){
			var title = 'Related Pictures for "' + this.props.title +'":';
			var path = this.props.path + '.relatedPictures';
			
			relatedPictureList = <PictureList 
				path={path}
				listType='relatedPictures'
				title={title}
				description={this.props.description}
				gallery={this.props.relatedPictures}
				taskCallbacks={this.props.taskCallbacks} //calls picture callback
			/>

		}

		var imgSrc = './galleryImages/' + this.props.fileName + '_th.jpg';

		return (
			<div className='picture'>
				<div className='title'>{this.props.title} </div>
				<div className='pictureSubSection'>
					<div> <img src={imgSrc} /> </div>
					<div className='pictureData' data-path={this.props.path}>
						<input type='text' className='title' defaultValue={this.props.title} />
						<input type='text' className='medium' defaultValue={this.props.medium} />
						<input type='textarea' className='description' defaultValue={this.props.description} />
						<button onClick={this.props.taskCallbacks}>Save</button>
					</div>
					{subPictureList}
					{relatedPictureList}
				</div>

			</div>
		);
	}
}


export default Picture;
