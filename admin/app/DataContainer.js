import React, { Component } from 'react';
import Gallery from './Gallery';
import 'whatwg-fetch';

class DataContainer extends Component {

	constructor(props){
		super(props);
		this.state={ pictureData: {}};	
		this.callbacks = {
			saveModifiedPicture:     this.saveModifiedPicture.bind(this),
			deletePicture:           this.deletePicture.bind(this),
			deleteSubGallery:        this.deleteSubGallery.bind(this),
			deleteGallery:           this.deleteGallery.bind(this),
			cutPicture:              this.cutPicture.bind(this),
			cutGallery:              this.cutGallery.bind(this),
			cutSubGallery:           this.cutSubGallery.bind(this),
			insertPicture:           this.insertPicture.bind(this),
			insertPictureAtTop:      this.insertPictureAtTop.bind(this),
			insertSubGallery:        this.insertSubGallery.bind(this),
			insertGallery:           this.insertGallery.bind(this),
			insertRelatedPictures:   this.insertRelatedPictures.bind(this),
			addNewPicture:           this.addNewPicture.bind(this),
			addNewTopPicture:        this.addNewTopPicture.bind(this),
			addNewRelatedPictures:   this.addNewRelatedPictures.bind(this),
			addNewSubGallery:        this.addNewSubGallery.bind(this),
			addNewGallery:           this.addNewGallery.bind(this)
		};
	}
/*	
	makePictureList(data) {
console.log("Line 24");


		function getImages(data) {
			Object.keys(data).map(function(key, val) {
				if(key === "imageFile") {
					images.push(data[key]);
				}
				else if ( typeof data[key] === "object") {
					getImages(data[key]);
				}
			});
		}
		var images = [];
		getImages(x);
console.log(images);
		data.imageList = images;
		return data;
	}
*/
	// this function compares data AND updates it, so it needs a better name
	hasDataChanged(stateData, inputs) {
		var ret = false;
		for (let input of inputs) {
			for (let inputClassName of input.className.split(' ')) {
				if(stateData[inputClassName] != null) {
					if(stateData[inputClassName] !== input.value) {
						stateData[inputClassName] = input.value;
						ret = true;
					}
				}
			}
		}
		return ret;

	}
/*

 	getDataNode(data, path, getParent) {
		var getParent = typeof getParent === 'undefined' ? true : getParent;
		var pathArray = path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var index, node = data;
		while(pathArray.length > +getParent && node) {
			index = pathArray.shift();
			node = node[index];		
		}
		if(getParent) { 
			index = pathArray.shift();
		}
console.log("Line 74: " + index);
console.log(node);
		return [node, parseInt(index, 10) || index];
	}

*/
	saveModifiedPicture(event){
		var pn  = event.target.parentNode;
//console.log("Line 67");
//console.log(pn);
		var pnc = pn.children;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		
		var node = this.state.pictureData;
		// use pathArray to point node to the part of state.pictureData that has the
		// (possibly) modified fields, then compare with the inputs in the DOM.
		while(pathArray.length && node) {
			node = node[pathArray.shift()];
		}
		var updateFlag = this.hasDataChanged(node, pnc);
		if(updateFlag) {
			this.setState({'pictureData': this.state.pictureData});
		}

	}
	
	deletePicture(event){
		var pn  = event.target.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = parseInt(pathArray[0]);
		if(typeof index === 'number') {
			node.splice(index, 1);
			this.setState({'pictureData': this.state.pictureData});
		}
		
	}
		
	deleteGallery(event){
		var pn  = event.target.parentNode;
		if(typeof pn.dataset.path === 'undefined') { pn = pn.parentNode; }
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		var index;
		while(pathArray.length > 2 && node) {
			index = pathArray.shift();
			node = node[index];
		}
		index = parseInt(pathArray.shift(), 10);
		
		if(typeof index === 'number') {
			delete(node[index]);
			this.setState({'pictureData': this.state.pictureData});
		}
	}


	deleteSubGallery(event){
		var pn  = event.target.parentNode;
		if(typeof pn.dataset.path === 'undefined') { pn = pn.parentNode; }
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = pathArray[0];
		
		if(index === 'relatedPictures' || index === 'pictures') {
			delete(node[index]);
			this.setState({'pictureData': this.state.pictureData});
		}
		
	}
	
	cutPicture(event){
		var pn  = event.target.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = parseInt(pathArray[0]);
		this.state.clipboardPicture = node[index];

		if(typeof index === 'number') {
			node.splice(index, 1);
			this.setState({'pictureData': this.state.pictureData});
		}
		
	} 
	
	cutGallery(event){
		var pn  = event.target.parentNode;
		if(typeof pn.dataset.path === 'undefined') { pn = pn.parentNode; }
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		var index;
		while(pathArray.length > 2 && node) {
			index = pathArray.shift();
			node = node[index];
		}
		index = parseInt(pathArray.shift(), 10);

		this.state.clipboardGallery = node[index];

		if(typeof index === 'number') {
			node.splice(index, 1);
			this.setState({'pictureData': this.state.pictureData});
		}
	} 

	cutSubGallery(event){
		var pn  = event.target.parentNode;
		if(typeof pn.dataset.path === 'undefined') { pn = pn.parentNode; }
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = pathArray[0];
		this.state.clipboardGallery = node[index];

		if(index === 'relatedPictures' || index === 'pictures') {
			delete(node[index]);
			this.setState({'pictureData': this.state.pictureData});
		}
		
	} 

	insertPictureAtTop(event){
		var pn  = event.target.parentNode;
		if(typeof pn.dataset.path === 'undefined') { pn = pn.parentNode; }
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 0 && node) {
			node = node[pathArray.shift()];
		}
		var index = 0;
		if(typeof index === 'number' && this.state.clipboardPicture) {
			node.splice(index, 0, this.state.clipboardPicture);
			delete this.state.clipboardPicture;
			this.setState({'pictureData': this.state.pictureData});
		}
		else {
			console.log("insertPictureNodeAtTop -- unable to insert " + this.state.clipboardPicture.title + " at " + pn.dataset.path + "."); 
		}
		
	} 
	

	insertPicture(event){
		var pn  = event.target.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = parseInt(pathArray[0]) || 0;
		if(typeof index === 'number' && this.state.clipboardPicture) {
			node.splice(index + 1, 0, this.state.clipboardPicture);
			delete this.state.clipboardPicture;
			this.setState({'pictureData': this.state.pictureData});
		}
		else {
			console.log("insertPictureNode -- unable to insert " + this.state.clipboardPicture.title + " at " + pn.dataset.path + "."); 
		}
		
	} 
	

	insertSubGallery(event){
		var pn  = event.target.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = parseInt(pathArray[0]) || 0;
		if(typeof index === 'number' && this.state.clipboardGallery) {
			node[index].pictures = this.state.clipboardGallery;
			delete this.state.clipboardGallery;
			this.setState({'pictureData': this.state.pictureData});
		}
		
	} 
	
	insertGallery(event){

		var pn  = event.target.parentNode;
		if(typeof pn.dataset.path === 'undefined') { pn = pn.parentNode; }
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		var index;
		while(pathArray.length > 0 && node) {
			index = pathArray.shift();
			node = node[index];
		}
		index = parseInt(pathArray[0]) || 0;
		if(typeof index === 'number' && this.state.clipboardGallery) {
			node.splice(index, 0, this.state.clipboardGallery);
			delete this.state.clipboardGallery;
			this.setState({'pictureData': this.state.pictureData});
		}
		
	} 

	addNewGallery(event){
		// this may not exactly be the React.js way of doing things.
		var newGalleryName = document.getElementById("newGalleryTitle").value;
		if(newGalleryName === '' || newGalleryName === 'REQUIRED FIELD') {
			document.getElementById("newGalleryTitle").value = 'REQUIRED FIELD';
			return;
		}
		document.getElementById("newGalleryTitle").value = '';

		var pn  = event.target.parentNode;
		if(typeof pn.dataset.path === 'undefined') { pn = pn.parentNode; }
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		var index;
		while(pathArray.length > 0 && node) {
			index = pathArray.shift();
			node = node[index];
		}
		index = parseInt(pathArray[0]) || 0;
		var newNode = { 
			"title": newGalleryName, 
			"pictures": new Array
		};

		if(typeof index === 'number') {
			node.splice(index, 0, newNode);
			this.setState({'pictureData': this.state.pictureData});
		}
		
	} 

	insertRelatedPictures(event){

		var pn  = event.target.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = parseInt(pathArray[0]) || 0;
		if(typeof index === 'number' && this.state.clipboardGallery) {
			node[index].relatedPictures = this.state.clipboardGallery;
			delete this.state.clipboardGallery;
			this.setState({'pictureData': this.state.pictureData});
		}
		else {
			console.log("insertPictureNode -- unable to insert " + this.state.clipboardGallery.title + " at " + pn.dataset.path + "."); 
		}
		
	} 
	
	addNewPicture(event){
		var pn  = event.target.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = parseInt(pathArray[0]);
		if(typeof index === 'number') {
			var newNode = { 
				"imageFile": "imageRequired", 
				"fileSizes":{ "th": 1, "reg": 1, "lg": 0 }, 
				"title": "", 
				"medium": "", 
				"description": "" 
			};
			node.splice(index + 1, 0, newNode);
			this.setState({'pictureData': this.state.pictureData});
		}
	}
	
	addNewTopPicture(event){
		var pn  = event.target.parentNode.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		while(pathArray.length > 1 && node) {
			node = node[pathArray.shift()];
		}
		var index = pathArray[0];
		if(index === 'relatedPictures' || index === 'pictures') {
			var newNode = { 
				"imageFile": "imageRequired", 
				"fileSizes":{ "th": 1, "reg": 1, "lg": 0 }, 
				"title": "", 
				"medium": "", 
				"description": "" 
			};
			node[index].unshift(newNode);
			this.setState({'pictureData': this.state.pictureData});
//console.log("Line 132");
//console.log(JSON.stringify(this.state.pictureData));
		}
	}
	
	addNewRelatedPictures(event){
		var pn  = event.target.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		var index;
		var error;
		while(pathArray.length && node) {
			index = pathArray.shift();
			node = node[index];
		}
		index = parseInt(index, 10);
		if(node.pictures) {
			error = "There is already a Sub-gallery. You cannot have a Sub-gallery and a Related Pictures Gallery on the same node.";
		}
		else if(node.relatedPictures) {
			error = "Related Pictures Gallery already exists!!!";
		}
		if(error == null) {
			if(typeof index === 'number') {
				node.relatedPictures = new Array;
				this.setState({'pictureData': this.state.pictureData});
			}
		}	
		else {
			console.log("*** ERROR *** " + error);
		}
	}	
	
	addNewSubGallery(event){
		var pn  = event.target.parentNode;
		var pathArray = pn.dataset.path.split(/\.|\[|\]/).filter(function(v){return v!==''});
		var node = this.state.pictureData;
		var index;
		var error;
		while(pathArray.length && node) {
			index = pathArray.shift();
			node = node[index];
		}
		index = parseInt(index, 10);
		if(node.relatedPictures) {
			error = "There is already a Related Pictures Gallery. You cannot have a Sub-gallery and a Related Pictures Gallery on the same node.";
		}
		else if(node.pictures) {
			error = "Sub-gallery already exists!!!";
		}
		if(error == null) {
			if(typeof index === 'number') {
				node.pictures = new Array;
				this.setState({'pictures': this.state.pictureData});
			}
		}
		else {
			console.log("*** ERROR *** " + error);
		}
	}	
 
/*
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
*/
 
	// same as above but with unecessary {}, () and ; removed in accordance with
	// arrow function syntax
	componentDidMount(){
		fetch('./pictureData.json')
		.then(response => response.json())
		.then(responseData => this.setState({pictureData: responseData}))
		.catch(error => console.log('Error fetching and parsing data', error));

	}
	

	render() {
		
		return (<Gallery 
			galleries                       = {this.state.pictureData.galleries} 
			imageFiles                      = {this.state.pictureData.imageFiles} 
			callbacks                       = {this.callbacks}
			clipboardPicture                = {this.state.clipboardPicture} 
			clipboardGallery                = {this.state.clipboardGallery} 
		/> );
		
	}
};

export default DataContainer;
