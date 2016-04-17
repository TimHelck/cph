
//console.log("Line 3: " + $(".title")[0].innerHTML);

/*
$(".gallery .title").on('click', function(e) {
	if($(e.target).parent().hasClass('openGallery')) {
		closeGallery(e.target);
	} else {
		openGallery(e.target);
	}
});
*/

var pictureData =

{
auto:{pictures: [ {
	fileName: "speedDemons", title: "Speed Demons of 1904", subTitle: "A Motor Race on the Continent in the Early Days", medium: "Tempera", description: "A poor reproduction of a magnificent painting. It was recently sold at auction in Pebble Beach, CA. We should be able to get a better image of it soon.",
	relatedPictures: [{
		fileName: "johnnyWalker", title: "\"Champion\" -- Johnny Walker Ad", description: "This advertisement for Johnny Walker shows the painting \"Speed Demons of 1904\" in the background. Also note the easel and a piece of furniture which appear in \"Artist in Studio\".",
	} ]
},{
	fileName: "parisToMadrid", title: "Paris to Madrid", medium: "Tempera or Casein on Illustration Board", description: "This was part of the series that Helck did for Esquire magazine in 1944.",
},{
	fileName: "countyFair", title: "County Fair 1905", medium: "Tempera or Casein on Illustration Board", description: "One of Helck's boyhood heroes was the race car driver Barney Oldfield. Here he has portrayed him arriving at a country fairgrounds in his Peerless \"Green Dragon\", probably to dazzle the locals with a few demonstration laps on the horse race track.This was part of the series that Helck did for Esquire magazine in 1944.",
},{
	fileName: "gallantDefeat", title: "Gallant Defeat", medium: "Tempera or Casein on Illustration Board", description: "This was part of the series that Peter Helck did for Esquire magazine in 1944. It records a dramatic scene from the 1912 running of the Indianapolis 500. Ralph DePalma, after having led most of the race in his white, number 4, Mercedes, had a mechanical breakdown on the second to last lap. He and his riding mechanic jumped out of the car and vainly attempted to push it to the finish line and claim victory.This painting appeared in Esquire with a quote from Capt. Eddie Rickenbacker (who had been a spectator): \"Eighty thousand people were there; they saw the sweat on his face, they knew what was going on in his mind. They roared out a cheer that has never again been heard at Indianapolis. You have to fail in a peculiar and wonderful way to earn such a cheer.\"",
}]},
main:{pictures: [{
	fileName: "elevatedStation", title: "66th Street Elevated Station", medium: "Oil on Canvas", description: "The old Elevated Station on 66th St. in Manhattan.",
	relatedPictures: [{ 
		fileName: "elevatedStationPhoto1", title: "66th Street Elevated Station", description: "Historic photo of the 66th St. Elevated Station at Columbus Avenue. Photo courtesy of the New York Public Library.",
	},{
		fileName: "elevatedStationPhoto2", title: "66th Street Elevated Station", description: "Historic photo of the 66th St. Elevated Station at Columbus Avenue. Photo courtesy of the New York Public Library.",
	},{
		fileName: "elevatedStationPhoto3", title: "66th Street Elevated Station", description: "Historic photo of the 66th St. Elevated Station at Columbus Avenue. Thanks to Charles Warren for making this picture available.",
	},{
		fileName: "elevatedStationPhoto4", title: "66th Street Elevated Station", description: "1933 photo of the 66th St. Elevated Station at Columbus Avenue. Photo courtesy of the New York City Municipal Archives.",
	}]
},{
	fileName: "weehawken", title: "Weehawken", medium: "Oil on CanvasThe Weehawken Steps in Weehawken, NJ.",
	relatedPictures: [ {
		fileName: "weehawkenPhoto", title: "Weehawken Stone Steps", description: "Circa 1920 postcard of the Stone Steps in Weehawken, New Jersey. The Steps, also known as the Grauert Causeway were built in 1915 to connect the ferry landing to what is now JFK Boulevard. The steps are still in existence, though collapsed in places and overgrown with vegetation.This image courtesy of The Weehawken Time Machine which also has some recent photos of the site.",
	} ]
},{
	fileName: "highBridge", gallery: "main", title: "High Bridge", medium: "Oil on Canvas", description: "The High Bridge Aqueduct, New York City.",
	relatedPictures: [{
		fileName: "highBridgePhoto", title: "Photos of High Bridge Aqueduct", description: "High Bridge Aqueduct is part of the Croton Aqueduct system. It crosses the Harlem River, bringing water into New York City from the Croton Reservoir, 40 miles to the north. The bridge was in service from 1848 until 1917, though it remained open as a pedestrian bridge until 1960. The center spans were replaced by the steel girder arch in 1927. It was designated a landmark in 1970.The tower on the hill to the west of the bridge is the High Bridge Watchtower, used to equalize the water pressure. In the 1995 murder mystery The Alienist by Caleb Carr, the tower was the scene of a climactic confrontation.Photos are by Jim K. Georges, and were taken from the Major Deegan Expressway (I-87). For an excellent history of the bridge, see this link: High Bridge.",
	}]
},{
	fileName: "fruitSeller", title: "Fruit Seller", medium: "Oil on Canvas", description: "The colors in this painting are reminiscent of Houses of Parliament panels painted by Helck's former teacher Frank Brangwyn. The man in the picture was an artist's model who went by the name of Leopold Napoleon Robillard.",
},{
	fileName: "monksInProcession", title: "Monks in Procession", medium: "India Ink, Colored Ink and Paint on Wood", description: "The colors are much faded. The sky was originally painted with a coppery metallic paint which has oxidized to black.",
	relatedPictures: [{
		fileName: "monksInProcessionStudio", title: "Monks in Procession", medium: "India Ink, Colored Ink and Paint on Wood", description: "As published in \"The Studio\" c. 1920. This reproduction gives a better idea of the original colors.",
	},{
		fileName: "sanPedroFacade", title: "\"Church of San Pedro\", Facade of the Iglesia de San Pedro in Avila, Spain", description: "The church in \"Monks in Processio\" is closely based on the Church of San Pedro, in the Plaza de Santa Teresa in Avila, Spain.",
	},{
		fileName: "sanPedroApse", title: "\"Church of San Pedro\", Exterior of the apse of the Iglesia de San Pedro in Avila, Spain", description: "The church in \"Monks in Processio\" is closely based on the Church of San Pedro, in the Plaza de Santa Teresa in Avila, Spain.",
	} ]
},{
	fileName: "artistInStudio", title: "Artist in Studio (Self Portrait)", medium: "Probably Gouache on Illustration Board",
},{
	fileName: "grimSpain", title: "Grim Spain", medium: "Gouache on Illustration Board",
	relatedPictures: [{
		fileName: "theWanderers", title: "The Wanderers", medium: "Gouache on Illustration Board", description: "A color sketch of a scene similar to Grim Spain. It was probably based on sketches he made of English Gypsies while studying with the muralist Frank Brangwyn.",
	} ]
},{
	fileName: "spanishVillage", title: "Spanish Village", medium: "Probably Gouache on Illustration Board",
}]},

advertising:{pictures:[{
	fileName: "silexI", title: "Silex Coffee Filter Ad", description: "This ad appeared in the October 1916 issue of \"Country Life in America\". We are grateful to Mathew Hargreaves of Kent, WA for bringing this painting to our attention and providing us with a high quality scan.",
},{
	fileName: "silexII", title: "Silex Coffee Filter Ad", description: "This ad appeared in the November 1916 issue of \"Country Life in America\". We are grateful to Mathew Hargreaves of Kent, WA for bringing this painting to our attention and providing us with a high quality scan.",
},{
	fileName: "morrisCowley", title: "Morris-Cowley Cover", description: "This painting from 1920 appeared on the cover of the British magazine Autocar. Helck was in London at the time studying with the muralist Frank Brangwyn and supporting himself with magazine work on the side. Brangwyn had a country home in Sussex and would allow Gypsies to encamp there. Helck, with his keen eye for the picturesque loved to sketch them, and these romantic people and their quaint caravans often found their way into Helck's paintings from the 1920's.",
},{
	fileName: "johnnyWalker", title: "\"Champion\" -- Johnny Walker Ad", description: "This advertisement for Johnny Walker shows the painting \"Speed Demons of 1904\" in the background. Also note the easel and a piece of furniture which appear in \"Artist in Studio\".",
},{
	fileName: "campbellSoup", title: "Campbell's Soup: WWII Ad", description: "GIs eating rations that have been warmed in the engine compartment of their jeep.",
},{
	fileName: "nationalSteelMining", title: "National Steel: Mining Operations", description: "Helck did several advertisements for National Steel. This one appeared in the September 3, 1951 issue of TIME. We found this image at graphic-design.tjs-labs.com.",
},{
	fileName: "nationalSteelOpenHearth", title: "National Steel: Open Hearth Furnace", description: "Helck did several advertisements for National Steel. This one appeared in the June 8, 1953 issue of TIME. We found this image at graphic-design.tjs-labs.com.",

},{
	fileName: "puttingUpSilage", title: "Putting up Silage", medium: "Gouache on Illustration Board", description: "This picture was recently acquired by the Bone Creek Museum of Agrarian Art in David City, Nebraska. We appreciate Mark Moseman, the curator, taking the time to contact us about it.It appears that this painting is derived from sketches that Peter Helck made in August 1947 at the Scofield Farm down the road from his studio and home in Millerton, NY. A very similar painting appeared on the cover of Country Gentleman magazine in September 1950 (see below).",
	relatedPictures: [ {
		fileName: "scofieldFarmSilos", title: "Scofield Farm Silos ", subTitle: "Country Gentleman Cover", description: "Country Gentleman was an agricltural magazine that ran from 1831 to 1955. Helck did at least three cover illustrations for the magazine. The other covers can be seen at  Curtis Publishing and at Nostalgiaville ",
	}]
},{
	fileName: "chevyTruckTrainStation", title: "Chevy Truck", pictures: [{
		fileName: "chevyTruckTrainStation", title: "Loading Freight at Small Town Train Station", subTitle: "1950 Chevy Truck Campaign",
	},{
		fileName: "chevyTruckMovieLot", title: "Movie Studio Back Lot ", subTitle: "1955 Chevy Truck Campaign",
	},{
		fileName: "chevyTruckLogging", title: "Transporting Felled Timber", subTitle: "1952 Chevy Truck Campaign",
	},{
		fileName: "chevyTruckWharf", title: "Unloading Freighters ", subTitle: "1953 Chevy Truck Campaign",
	},{
		fileName: "morrisCowley", title: "Morris-Cowley Cover", description: "This painting from 1920 appeared on the cover of the British magazine Autocar. Helck was in London at the time studying with the muralist Frank Brangwyn and supporting himself with magazine work on the side. Brangwyn had a country home in Sussex and would allow Gypsies to encamp there. Helck, with his keen eye for the picturesque loved to sketch them, and these romantic people and their quaint caravans often found their way into Helck's paintings from the 1920's.",
	},{
		fileName: "johnnyWalker", title: "\"Champion\" -- Johnny Walker Ad", description: "This advertisement for Johnny Walker shows the painting \"Speed Demons of 1904\" in the background. Also note the easel and a piece of furniture which appear in \"Artist in Studio\".",
	},{
		fileName: "campbellSoup", title:"Campbell's Soup: WWII Ad", pictures: [{
			fileName: "chevyTruckLogging", title: "Transporting Felled Timber", subTitle: "1952 Chevy Truck Campaign",
		},{
			fileName: "chevyTruckWharf", title: "Unloading Freighters ", subTitle: "1953 Chevy Truck Campaign",
		},{
			fileName: "morrisCowley", title: "Morris-Cowley Cover", description: "This painting from 1920 appeared on the cover of the British magazine Autocar. Helck was in London at the time studying with the muralist Frank Brangwyn and supporting himself with magazine work on the side. Brangwyn had a country home in Sussex and would allow Gypsies to encamp there. Helck, with his keen eye for the picturesque loved to sketch them, and these romantic people and their quaint caravans often found their way into Helck's paintings from the 1920's.",
		},{
			fileName: "johnnyWalker", title: "\"Champion\" -- Johnny Walker Ad", description: "This advertisement for Johnny Walker shows the painting \"Speed Demons of 1904\" in the background. Also note the easel and a piece of furniture which appear in \"Artist in Studio\".",
		}]
	},{
		fileName: "nationalSteelMining", title: "National Steel: Mining Operations", description: "Helck did several advertisements for National Steel. This one appeared in the September 3, 1951 issue of TIME. We found this image at graphic-design.tjs-labs.com.",
	}]
}

]},
sketch:{pictures:[{
	fileName: "ErnestOnTractor", title: "Ernest on Tractor", medium: "Ink on Illustration Board", description: "Ernest Roberts, of Boston Corners, NY, was a neighbor and friend of Peter Helck.",
},{
	fileName: "impatientDriver", title: "Impatient Driver", medium: "Pen and Ink with Wash on Colored Paper", description: "Peter Helck often gave his friends and associates little sketches, often of a light-hearted nature. This one went to John Leathers, a close friend and a founding member of the Veteran Motor Car Club of America. The car looks like a Lorraine Dietrich CR2 circa 1905. Many thanks to John's grandson, Steve Gleason, for sharing this picture with us.",
}]}
};


(function($, data) {


function renderGalleries(d) {
	var r = renderGallery(1, 'auto', d['advertising'].pictures);
	$('#galleries').html(r);
}

function renderGallery(level, galleryName, d) {
	var r = "<section class='imageGrid'>";
	if(level > 3) { return; }
	jQuery.each(d, function(i, x) {
		if(x.pictures) { 
			r +=	"	<div class='cell isCollapsed'>";
			r +=	"		<div class='expandable'>";
			r +=	"				<img id='expand-jump-" + i + "' class='basicImg' src='./galleryImages/" + x.fileName + "_th.jpg'>";
			r +=	"				<div class='galleryTitle'>" + x.title + " Gallery</div>";
			r +=	"			<div class='arrowUp'></div>";
			r +=	"		</div>";
			r +=	"		<div class='expand'>";
			r += renderGallery(level++, x.title, x.pictures );
			r +=	"		</div>";
			r +=	"	</div>";		
		}
		else {
			r +=	"	<div class='cell isCollapsed'>";
			r +=	"		<div class='imageX expandable'>";
			r +=	"				<img id='expand-jump-" + i + "' class='basicImg' src='./galleryImages/" + x.fileName + "_th.jpg'>";
			r +=	"			<div class='arrowUp'></div>";
			r +=	"		</div>";
			r +=	"		<div class='expand'>";
			r +=	"			<a href='#close-jump-" + i + "' class='expand__close'>&times;</a>";
			r +=	"			<img class='imageLarge' src='./galleryImages/" + x.fileName + ".jpg'>";
			r +=	"		</div>";
			r +=	"	</div>";
		}
	});
	r +=	"</section>";


	return r;
}

renderGalleries(data);


var $cell = $('.cell');

$cell.find('.expandable').click(function() {
  var $thisCell = $(this).closest('.cell');

  if ($thisCell.hasClass('isCollapsed')) {
    $cell.not($thisCell).not($($thisCell.parents())).removeClass('is-expanded').addClass('isCollapsed');
    $thisCell.removeClass('isCollapsed').addClass('is-expanded');
  } else {
    $thisCell.removeClass('is-expanded').addClass('isCollapsed');
  }
});

$cell.find('.expand__close').click(function() {
  var $thisCell = $(this).closest('.cell');
  $thisCell.removeClass('is-expanded').addClass('isCollapsed');
});



}(jQuery, pictureData))
