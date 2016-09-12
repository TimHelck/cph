import React, { Component } from 'react';
import PictureList from './PictureList';

class Gallery extends Component {
	
	render() {

		let x = this.props.galleries || {};
		let galleries;
		galleries = Object.keys(x).map((key) => {

			var path = key + '.pictures';
			return <PictureList 
				path={path}
				title={x[key].title}
				description={x[key].description}
				gallery={x[key].pictures}
				listType='gallery'
				taskCallbacks={this.props.taskCallbacks}
			/>
		});

		return (
			<div className='gallery'>
				<h1>Peter Helck</h1>
				{galleries}
			</div>
		);
	};
}

export default Gallery;
