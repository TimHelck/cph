import React, { Component } from 'react';
import {render} from 'react-dom';
//import Gallery from './Gallery_3';
import DataContainer from './DataContainer';
/*
class App extends Component {

	constructor() {
		super(...arguments);
		this.state = { title: '', medium: '', description: '' };
	}
*/

let pictureData = {
	auto:{
		fileName: "speedDemons", 
		title: "Motor Sport", 
		description: "Helck dedicated much of his career to chronicling and illustrating the early history of automobile racing.", 
		pictures: [ 
			{ fileName: "speedDemons", title: "Speed Demons of MCMIV", subTitle: "A Motor Race on the Continent in the Early Days", medium: "Tempera", description: "A poor reproduction of a magnificent painting. It was recently sold at auction in Pebble Beach, CA. We should be able to get a better image of it soon.",
				relatedPictures: [
					{ fileName: "johnnyWalker", title: "\"Champion\" -- Johnny Walker Ad", description: "This advertisement for Johnny Walker shows the painting \"Speed Demons of 1904\" in the background. Also note the easel and a piece of furniture which appear in \"Artist in Studio\".", }
				]
			},
			{ fileName: "parisToMadrid", title: "Paris to Madrid", medium: "Tempera or Casein on Illustration Board", description: "This was part of the series that Helck did for Esquire magazine in 1944." },
			{ fileName: "chevyTruckTrainStation", title: "Chevy Truck", description: "During the 40's and the 50's Helck did dozens of advertisements for Chevy Trucks.", 
				pictures: [
					{ fileName: "chevyTruckTrainStation", title: "Loading Freight at Small Town Train Station", subTitle: "1950 Chevy Truck Campaign" },
					{ fileName: "nationalSteelMining", title: "National Steel: Mining Operations", description: "Helck did several advertisements for National Steel. This one appeared in the September 3, 1951 issue of TIME. We found this image at graphic-design.tjs-labs.com." },
					{ fileName: "campbellSoup", title:"Campbell's Soup: WWII Ad", 
						pictures: [
							{ fileName: "morrisCowley", title: "Morris-Cowley Cover", description: "This painting from 1920 appeared on the cover of the British magazine Autocar. Helck was in London at the time studying with the muralist Frank Brangwyn and supporting himself with magazine work on the side. Brangwyn had a country home in Sussex and would allow Gypsies to encamp there. Helck, with his keen eye for the picturesque loved to sketch them, and these romantic people and their quaint caravans often found their way into Helck's paintings from the 1920's." },
							{ fileName: "johnnyWalker", title: "\"Champion\" -- Johnny Walker Ad", description: "This advertisement for Johnny Walker shows the painting \"Speed Demons of 1904\" in the background. Also note the easel and a piece of furniture which appear in \"Artist in Studio\"." }
						]
					}	
				]
			}

		]
	},
	main:{
		fileName: "elevatedStation", 
		title: "Cityscapes", 
		pictures: [
			{ fileName: "elevatedStation", title: "66th Street Elevated Station", medium: "Oil on Canvas", description: "The old Elevated Station on 66th St. in Manhattan.",
				relatedPictures: [
					{ fileName: "elevatedStationPhoto1", medium: "Photograph", title: "66th Street Elevated Station, Street Level", description: "Historic photo of the 66th St. Elevated Station at Columbus Avenue. Photo courtesy of the New York Public Library." },
					{ fileName: "elevatedStationPhoto2", medium: "Photograph", title: "66th Street Elevated Station, Platform Level", description: "Historic photo of the 66th St. Elevated Station at Columbus Avenue. Photo courtesy of the New York Public Library." }
				]
			},
			{ fileName: "weehawken", title: "Weehawken", medium: "Oil on Canvas", description: "The Weehawken Steps in Weehawken, NJ.",
				relatedPictures: [ 
					{ fileName: "weehawkenPhoto", title: "Weehawken Stone Steps", description: "Circa 1920 postcard of the Stone Steps in Weehawken, New Jersey. The Steps, also known as the Grauert Causeway were built in 1915 to connect the ferry landing to what is now JFK Boulevard. The steps are still in existence, though collapsed in places and overgrown with vegetation.This image courtesy of The Weehawken Time Machine which also has some recent photos of the site." }
				]
			},
			{ fileName: "spanishVillage", title: "Spanish Village", medium: "Probably Gouache on Illustration Board", }
		]
	}	
};




window.pictureData = pictureData;

function handleSubmit(event){
console.log(event.target);
	var pnc = event.target.parentNode.children;
	var newTitle       = pnc[0].value;
	var newMedium      = pnc[1].value;
	var newDescription = pnc[2].value;
	this.setState({title:newTitle});
	this.setState({medium:newMedium});
	this.setState({description:newDescription});
console.log("Line 216: " + newTitle);
console.log(this.state);
}


//render(<Gallery galleries={pictureData} />, document.getElementById('root'));
//render(<Gallery galleries={pictureData2deep} />, document.getElementById('root'));
render(<DataContainer />, document.getElementById('root'));
//render(<Gallery galleries={pictureData2deep, onSubmit={this.handleSubmit.bind(this)} />, document.getElementById('root'));


