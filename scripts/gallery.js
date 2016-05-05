

(function($, data) {


function renderGalleries(d) {
	var r = '';
	r += renderGallery(1, 'main',   d['main'].title,   d['main'].description,   d['main'].pictures);
	r += renderGallery(1, 'auto',   d['auto'].title,   d['auto'].description,   d['auto'].pictures);
	r += renderGallery(1, 'advert', d['advert'].title, d['advert'].description, d['advert'].pictures);
	$('#galleries').html(r);
}

function renderGallery(level, key, galleryName, description, d) {
	var r = "<section class='imageGrid'><div class='title'>" + galleryName + "</div>";
	if(description) {
		r += "<div class='galleryDescription'>" + description + "</div>";
	}
	r += "<div>";
	var c;
	if(level > 3) { return; }
	jQuery.each(d, function(i, x) {
		if(x.pictures) { 
			c  =	"	<div class='cell isCollapsed'>";
			c +=	"		<div class='expandable' data-dataaddress='" + key + ":" + i + "'>";
			c +=	"				<img class='basicImg' src='./galleryImages/" + x.fileName + "_th.jpg'>";
			c +=	"				<div class='galleryTitle'>" + x.title + " Gallery</div>";
			c +=	"			<div class='arrowUp'></div>";
			c +=	"		</div>";
			c +=	"		<div class='expand'>";
			c += renderGallery(level+1, key + ':' + i,  x.title, x.description, x.pictures );
			c +=	"		</div>";
			c +=	"	</div>";		
		}
		else {
			c  =	"	<div class='cell isCollapsed'>";
			c +=	"		<div class='expandable' data-dataaddress='" + key + ":" + i + "'>";
			c +=	"				<img class='basicImg' src='./galleryImages/" + x.fileName + "_th.jpg'>";
			c +=	"			<div class='arrowUp'></div>";
			c +=	"		</div>";
			c +=	"		<div class='expand'>";
			c +=    "			<div class='leftColumn'>";
			c += renderPictureDescription(x);
			c +=    "			</div>";
			c +=    "			<div class='leftColumnRelated'></div>";
			c +=	"			<img class='largeImageMain' src='./galleryImages/" + x.fileName + ".jpg'>";
			c +=	"			<img class='largeImageRelated' src=''>";
			c +=    "			<div class='rightColumn'>";
			c +=	"				<a class='expandClose'>&times;</a>";
			c += renderRelatedPictures(x.relatedPictures || [], key + ':' +i);
			c +=    "			</div>";
			c +=	"		</div>";
			c +=	"	</div>";
		}
		r += c;
	});
	r +=	"</div></section>";
	return r;
}

function renderPictureDescription(d) {
	var r = "";
	jQuery.each(['title', 'medium', 'description'], function(i, x) {
		if(d[x]) {
			r += "<div class='" + x + "'>" + d[x] + "</div>";
		}
	});
	return r;
}


function renderRelatedPictures(d, key) {
	var r = "<div class='relatedPictures'>";
	if(d.length) {
		r += "<div class='title'>Related Pictures</div>";
	}	
	var c = '';
	jQuery.each(d, function(i, x) {
		c +=	"		<div class='related' data-dataaddress='" + key + ":" + i + "'>";
		c +=	"			<img class='basicImg' src='./galleryImages/" + x.fileName + "_th.jpg'>";
		c +=	"			<div class='title'>" + (x.title || "") + "</div>";
		c +=	"		</div>";
	});
	r += c;
	r +=	"</div>";
	return r;
}


renderGalleries(data);


var $cell = $('.cell');

$cell.find('.expandable').click(function() {
  var $thisCell = $(this).closest('.cell');
	$('body').trigger('restoreMainPictureEvent');

  if ($thisCell.hasClass('isCollapsed')) {
    $cell.not($thisCell).not($($thisCell.parents())).removeClass('isExpanded').addClass('isCollapsed');
    $thisCell.removeClass('isCollapsed').addClass('isExpanded');
	// I don't know why I added these lines. They seem unnecessary.
	//$($thisCell.find('.LargeImage')[0]).css('display','block');
	//$($thisCell.find('.largeImageRelated')[0]).css('display','none');
  } else {
    $thisCell.removeClass('isExpanded').addClass('isCollapsed');
  }
});

$cell.find('.expandClose').click(function() {
	var $thisCell = $(this).closest('.cell');
	$('body').trigger('restoreMainPictureEvent');

	$thisCell.removeClass('isExpanded').addClass('isCollapsed');
});

function showRelatedImage() {
	var node = getNode($(this).data('dataaddress'), data);
	var relatedImagePath =  './galleryImages/' + node.fileName + '.jpg';
	/*
	var largeImageMain =        $($(this).parents('.expand')[0]).find('.largeImageMain');
	var largeImageRelated = $($(this).parents('.expand')[0]).find('.largeImageRelated');
	largeImageRelated.attr('src', relatedImagePath);
	largeImageRelated.css('display','block');
	largeImageMain.css('display', 'none');
*/

	var largeImageExpand = $($('.isExpanded')[0]).find('.expand');
	var largeImageRelated = largeImageExpand.find('.largeImageRelated');
	largeImageRelated.attr('src', relatedImagePath);
	//var relatedDescription = $($(this).parents('.expand')[0]).find('.leftColumnRelated');
	largeImageExpand.addClass('showRelated');


}

function showRelatedImageDescription() {
	var dataAddress = $(this).data('dataaddress');
	var mainPictureDataAddress = dataAddress.split(':').slice(0,-1).join(':');
	var node     = getNode(dataAddress, data);
	var mainNode = getNode(mainPictureDataAddress, data);
	var r = "";

	r +=	"		<div class='related restoreMainPicture' data-dataaddress='" + mainPictureDataAddress + "'>";
	r +=	"			<img class='basicImg' src='./galleryImages/" + mainNode.fileName + "_th.jpg'>";
	r +=	"			<div class='subTitle'>Return to main picture</div>";
	r +=	"		</div>";
		
	
	jQuery.each(['title', 'medium', 'description'], function(i, x) {
		if(node[x]) {
			r += "<div class='" + x + "'>" + node[x] + "</div>";
		}
	});

	var largeImageExpand = $($('.isExpanded')[0]).find('.expand');
	var relatedDescription = largeImageExpand.find('.leftColumnRelated');
//console.log(relatedDescription);
	//var relatedDescription = $($(this).parents('.expand')[0]).find('.leftColumnRelated');
	relatedDescription.html(r);
	largeImageExpand.addClass('showRelated');


	/*
	var description =        $($(this).parents('.expand')[0]).find('.leftColumn');
	var relatedDescription = $($(this).parents('.expand')[0]).find('.leftColumnRelated');
	relatedDescription.html(r);
	relatedDescription.css('display','block');
	description.css('display', 'none');
	*/
	$('.restoreMainPicture').click(function(){$('body').trigger('restoreMainPictureEvent');});
	
}

$('.relatedPictures .related').click(showRelatedImage);
$('.relatedPictures .related').click(showRelatedImageDescription);

function restoreMainPicture() {
console.log("Line 159");
	var largeImageExpand = $($('.isExpanded')[0]).find('.expand');
	largeImageExpand.removeClass('showRelated');
/*
	var largeImageMain =        $($('.isExpanded')[0]).find('.largeImageMain');
	var largeImageRelated = $($('.isExpanded')[0]).find('.largeImageRelated');
	largeImageRelated.css('display','none');
	largeImageMain.css('display', 'block');

	var description =        $($('.isExpanded')[0]).find('.leftColumn');
	var relatedDescription = $($('.isExpanded')[0]).find('.leftColumnRelated');
	relatedDescription.css('display','none');
	description.css('display', 'block');
*/	
}

$('body').on('restoreMainPictureEvent', restoreMainPicture);

function getNode(address, data) {
	var aa = address.split(':');  // address array
	var a = aa[0];  
	var a = parseInt(a, 10) || a;  
	if (aa.length > 1) {
		if (data[a].pictures) {
			return getNode(aa.slice(1).join(":"), data[a].pictures);
		}
		else if(data[a].relatedPictures) {
			return getNode(aa.slice(1).join(":"), data[a].relatedPictures);
		}
		else {
			return {error:'invalidIndex'};
		}
	}
	else if(data[a]){
		var r = {
			title:       data[a].title || '',
			fileName:    data[a].fileName,
			description: data[a].description   || '',
			medium:      data[a].medium || ''
		};
		return r;
	}
	else {
		return {error:'invalidIndex'};
	}
}

}(jQuery, pictureData))
