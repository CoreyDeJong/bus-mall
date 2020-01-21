'use strict'


//Step 1) determine when image is clicked on//
var busParent = document.getElementById('item');
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');

var item1Index = null;
var item2Index = null;
var item3Index = null;


//
// imagevotes = 0;
// var totalVotes = 10;

//global array
Bus.allImages=[];


//Step 4) Constructor Function
function Bus(name, image){
    this.name = name;
    this.image = image;
    this.clicked = 0;
    this.views = 0;

// creating an array by pushing in the images
    Bus.allImages.push(this);
}

//random number between 0 and total length of the Bus.allImages array
function randomItem(){
    var randomNumber = Math.floor(Math.random() * Bus.allImages.length);
    return randomNumber;
}
// console.log(randomItem);


//generate a random number for Item1 and Item 2, Do again if the numbers are the same
function renderBus(){
    do {
        item1Index = randomItem();
        item2Index = randomItem(); 
        item3Index = randomItem(); 
} while(item1Index === item2Index || item1Index === item3Index || item2Index === item3Index);

//add occurrence of view in the constructor for each of the random items that were generated in the do loop.
Bus.allImages[item1Index].views++;
Bus.allImages[item2Index].views++;


//go through the array of all images and get the index# from the randomitem# that was generated in the do loop. select that image and insert it into the html section

item1.src = Bus.allImages[item1Index].image;
item2.src = Bus.allImages[item2Index].image;
item3.src = Bus.allImages[item3Index].image;
}



//Step 3) create our clicking function, must be defined before our event listener. Variable is pointing to a place in the memory of the site where each instance is recorded.
var handleClickOnBus = function(event){
    
//Step 6) creating a tracker for each time each item is clicked
    var busClicked = event.target.id;
}

//Step 5) Instantiating new items and pushing them into the array

var bag = new Bus('bag', 'img/bag.jpg');
var banana = new Bus('banana', '/img/banana.jpg');
var bathroom = new Bus('bathroom', '/img/bathroom.jpg');
var boots = new Bus('boots', '/img/boots.jpg');
var breakfast = new Bus('breakfast', '/img/breakfast.jpg');
var bubblegum = new Bus('bubblegum', '/img/bubblegum.jpg');
var chair = new Bus('chair', '/img/chair.jpg');
var cthulhu = new Bus('cthulhu', '/img/cthulhu.jpg');
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')
// var  = new Busmall ('', '/img/.jpg')



renderBus();



//Step 2) attach an event listener
// busParent.addEventListener('click', handleClickOnBus)





// Do :use the random number generator to get a number for the 1st/left item. Use the random number generator to get a number for the 2nd/right item.
//while: continue to do the do if the random numbers are ====.

//take the random numbers that were created and use that number to go through the global array of all the images (every instantiation was populated into a global array)

// take that image from the globbl array and insert it into the html.