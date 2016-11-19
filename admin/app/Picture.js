import React, { Component } from 'react';
import PictureList from './PictureList';

class Picture extends Component {
	constructor() {
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
		var className = "picture";
		if(this.props.pictures){

			var title = 'Sub-gallery for "' + this.props.title +'":';
			var path = this.props.path + '.pictures';
			className += " hasSubGallery";

			subPictureList = <PictureList 
				path         = {path}
				listType     = 'subGallery'
				title        = {title}
				description  = {this.props.description}
				imageFiles   = {this.props.imageFiles}
				gallery      = {this.props.pictures}
				callbacks    = {this.props.callbacks}
				galleryLevel = 'subTop'
			/>


		}
		else if(this.props.relatedPictures){
			var title = 'Related Pictures for "' + this.props.title +'":';
			var path = this.props.path + '.relatedPictures';
			var gallery = this.props.relatedPictures || [];
			className += " hasRelatedPictures";

			relatedPictureList = <PictureList 
				path         = {path}
				listType     = 'relatedPictures'
				title        = {title}
				description  = {this.props.description}
				imageFiles   = {this.props.imageFiles}
				gallery      = {gallery}
				callbacks    = {this.props.callbacks}
				galleryLevel = 'subTop'
			/>

		}
		var imgSrc = './galleryImages/th/' + this.props.imageFile + '_th.jpg';

		//create imageFile dropdown
		let x = this.props.imageFiles || {};
		let imageFileSelect;
		let options;
		let callbacks = this.props.callbacks;
		options= x.map((imageFile, i) => {
			return <option 
				key={imageFile}
				value={imageFile}
			>{imageFile}</option>
		});
		options.unshift(<option key='imageRequired' value='imageRequired' >imageRequired</option>);

		return (
			<div className={className}>
				<div className='title'>{this.props.displayTitle} </div>
				<div className='pictureSubSection'>
					<div> <img src={imgSrc} /> </div>
					<div className='pictureData' data-path={this.props.path}>
						<input type='text' className='title' defaultValue={this.props.title} autoCompete='off'/>
						<input type='text' className='medium' defaultValue={this.props.medium} />
						<input type='textarea' className='description' defaultValue={this.props.description} />
						<select className='imageFile' defaultValue={this.props.imageFile}>{options}</select>
						<button onClick={callbacks.saveModifiedPicture} className='save'>Save</button>
						<button onClick={callbacks.deletePicture} className='delete pictureNode'>Delete</button>
						<button onClick={callbacks.cutPicture} className='cut pictureNode'>Cut Picture</button>
						<button onClick={callbacks.insertPicture} className='insert pictureNode'>Insert Picture</button>
						<button onClick={callbacks.addNewPicture} className='add pictureNode'>Add New Picture</button>
						<button onClick={callbacks.addNewRelatedPictures} className='add galleryNode'>Add Related Pictures</button>
						<button onClick={callbacks.addNewSubGallery} className='add galleryNode'>Add Sub-gallery</button>
						<button onClick={callbacks.insertSubGallery} className='insert galleryNode'>Insert Sub-gallery</button>
						<button onClick={callbacks.insertRelatedPictures} className='insert galleryNode'>Insert Related Pictures</button>
					</div>
					{subPictureList}
					{relatedPictureList}
				</div>

			</div>
		);
	}
}


export default Picture;
