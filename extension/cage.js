

Array.prototype.forEach.call(document.querySelectorAll('img'), function (img) {
    var height = img.height;
    var width = img.width;

    var rand = (Math.floor(Math.random() * 3))
    if(rand < 1){
	     img.src = 'https://www.fillmurray.com/' + width + '/' + height;
    }
    else if(rand < 2){
	     img.src = 'https://www.stevensegallery.com/' + width + '/' + height;
    }
    else {
	     img.src = 'https://www.placecage.com/' + width + '/' + height;
    }
    //img.src = 'https://www.placecage.com/' + width + '/' + height;

});
