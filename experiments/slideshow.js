var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
var caption = ["caption for image1", "caption for image2", "caption for image3"];

var imageNumber = 0;
var imageLength = images.length - 1;

function changeImage(x) {
	imageNumber += x;
	//if you've reached end of array...start over
	if (imageNumber > imageLength){
		imageNumber = 0;
	}
	if(imageNumber < 0){
		imageNumber = imageLength;
	}

	document.getElementById("slideshow").src = images[imageNumber];
	document.getElementById("caption").innerHTML = caption[imageNumber];

	return false;
}