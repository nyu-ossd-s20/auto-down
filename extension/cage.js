Array.prototype.forEach.call(document.querySelectorAll('img'), function (img) {
    var height = img.height;
    var width = img.width;
    img.src = 'https://www.placecage.com/' + width + '/' + height;
});
