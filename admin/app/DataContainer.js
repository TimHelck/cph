import React, { Component } from 'react';
import Gallery from './Gallery';
import 'whatwg-fetch';

class DataContainer extends Component {

	constructor(props){
		super(props);
		this.state={ pictureData: {}};	
		this.handleSubmit = this.handleSubmit.bind(this);
		/*
		fetch('./pictureData.json')
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({pictureData: responseData});
		})
		.catch((error) => {
			console.log('Error fetching and parsing data', error);
		});
		*/
	}
	
	handleSubmit(event){
		var pn  = event.target.parentNode;
		var pnc = pn.children;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = pictureData;
		while(pathArray.length && node) {
			node = node[pathArray.shift()];
		}
		var titleFromPath = node && node.title || ''; 

		if(pnc[0].value !== titleFromPath) {
			node.title = pnc[0].value;
			this.setState({'pictureData': pictureData});
//console.log("Line 30");
//this.setState({'pictureData': pictureData}, function() { console.log(this.state.pictureData);});
//			this.forceUpdate();
		}
	}
 
 
	componentDidMount(){
		fetch('./pictureData.json')
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({pictureData: responseData});
		})
		.catch((error) => {
			console.log('Error fetching and parsing data', error);
		});
	}

	render() {
		
		return (<Gallery 
			galleries={this.state.pictureData} 
			taskCallbacks={this.handleSubmit} 
		/> );
		
	}
};

export default DataContainer;
