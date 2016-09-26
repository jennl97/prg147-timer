/**
 * Created by JENN on 9/25/2016.
 */
//Variables
var image = new Image();
var timer;
var currentSlide = 0;

//Create the image array
var images = ["images/Chloe.jpg", "images/interior_1.jpg", "images/landscape_1_1.jpg", "images/landscape_3_1.jpg", "images/Line 1.jpg", "images/LIne 2.jpg", "images/people_1.jpg", "images/people_3.jpg", "images/Sunset.jpg", "images/Window.jpg"];
var titles = ["Chloe", "Inside a Florida Hotel", "Tree in a Pasture", "Lakeview", "Lines", "Implied Lines", "Chloe being cute again", "Chloe coloring", "A Florida Sunset", "Through a Window"];
var captions = ["Chloe with bubbles in her hair", "Cuz everyone looks at a Starbucks cup creatively, right?", "A lucky find while out on a drive", "The view in my old neighborhood", "The lighting was just perfect for this shot", "This baritone has a lot of character", "She is my muse", "A girl and her chalk", "After a storm on the Gulf", "The past locked behind glass"];

var count = images.length;

//preload the images for slideshow
var preload = function () {
    for (var i = 0; i < count; i++)
    {
        image.src = images[i];
        images.push(image);
    }

}

//making the pause/play button work
var slidecontrol = function () {
    var path = document.getElementById("control").src;
    var testState = new RegExp("play");
    if(testState.test(path)){
        document.getElementById("control").src = "images/pause.png";
        displayImage();
    }
    else {
        document.getElementById("control").src = "images/play.png";
        clearTimeout(timer);
    }
}

var displayImage = function () {
    if (currentSlide > 9)
    {
        currentSlide = 0;
    }
    document.getElementById("image").src = images[currentSlide];
    document.getElementById("title").innerHTML = titles[currentSlide];
    document.getElementById("description").innerHTML = captions[currentSlide];

    currentSlide++;
    timer = setTimeout(displayImage, 5000);

}


//Calling functions
window.onload = function () {
    preload();
}