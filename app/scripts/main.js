var src = $('.cover-img').css('background-image');
var url = src.match(/\((.*?)\)/)[1].replace(/('|")/g,'');

var img = new Image();
img.onload = function() {
    //alert('image loaded');
    $('.js-wait-for-image').toggleClass('js-wait-for-image animation');
}
img.src = url;
if (img.complete) img.onload();