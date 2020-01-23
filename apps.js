'use strict'

Bus.allImages = [];

//Step 1) determine when image is clicked on//
var busParent = document.getElementById('items');
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');

var item1Index = null;
var item2Index = null;
var item3Index = null;


//Global tracker of votes and views
var NumberOfVotes = 0;
var totalRounds = 5;


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

//create an array with the output from the last round, just to ensure items are not repeating per round
var indexArray = [];


//generate a random number for Item1 and Item 2, Do again if the numbers are the same
function renderBus(){
    do {
        item1Index = randomItem();
        item2Index = randomItem(); 
        item3Index = randomItem(); 
    } while(item1Index === item2Index || item1Index === item3Index || item2Index === item3Index || indexArray.includes(item1Index) || indexArray.includes(item2Index) || indexArray.includes(item3Index));
    // or index array. allimages
    
    //add occurrence of view in the constructor for each of the random items that were generated in the do loop.
    Bus.allImages[item1Index].views++;
    Bus.allImages[item2Index].views++;
    Bus.allImages[item3Index].views++;
    
    
    //go through the array of all images and get the index# from the randomitem# that was generated in the do loop. select that image and insert it into the html section
    
    item1.src = Bus.allImages[item1Index].image;
    item2.src = Bus.allImages[item2Index].image;
    item3.src = Bus.allImages[item3Index].image;
    
    //index array from top, push in item1Index, ..... into array position
    indexArray[0] = item1Index;
    indexArray[1] = item2Index;
    indexArray[2] = item3Index;

}


//create our clicking function
var handleClickOnBus = function(event){
    NumberOfVotes++;
    //creating a tracker for each time each item is clicked
    var busClicked = event.target.id;
    // console.log('busClicked', busClicked);
    

    // if user does not click on an item1-3
    if(busClicked === 'item1' || busClicked === 'item2' || busClicked === 'item3') {
        // console.log('global array', Bus.allImages);

        // if image1 is selected, add 1 to Bus.allImages[item1Index].clicked++
            if (busClicked === 'item1'){
                Bus.allImages[item1Index].clicked++
            }
            else if (busClicked === 'item2'){
                Bus.allImages[item2Index].clicked++
            }
            else (busClicked === 'item3') 
                Bus.allImages[item3Index].clicked++
            
    

    } else {
        alert('try again');
    }
       
    
    
    //total rounds exceeds 10/25, display results
    if(NumberOfVotes === totalRounds){
        busParent.removeEventListener('click', handleClickOnBus);
    alert('thank you for your votes');
    
    for (var i = 0; i < Bus.allImages.length; i++){
        var bus = Bus.allImages[i];
        console.log(`${bus.name} received ${bus.clicked} votes with ${bus.views} views.`);
        //add chart after all votes have been counted
        renderChart('my-chart');
    }
} else {
    renderBus();
};
 updateStorage();
}

//function 1
function updateStorage(){
// use global variable of Bus.allImages = [];
var arrayString = JSON.stringify(Bus.allImages);
//transfer to local storage data using stringify
localStorage.setItem('Key',arrayString);
}

//function 2
function getItems (){
    if(localStorage.length > 0)
        //get string from local storage and call it storageData
           var storageData = localStorage.getItem('Key');
       
           // take storage data and parse it into an object
           var storageObject = JSON.parse(storageData);

           //take object and run through constructor
           Bus.allImages = storageObject;

           renderChart();
    }
    //run chart function using render to populate data into local storage





















//Instantiating new items and pushing them into the array

new Bus('bag', 'img/bag.jpg');
new Bus('banana', '/img/banana.jpg');
new Bus('bathroom', '/img/bathroom.jpg');
new Bus('boots', '/img/boots.jpg');
new Bus('breakfast', '/img/breakfast.jpg');
new Bus('bubblegum', '/img/bubblegum.jpg');
new Bus('chair', '/img/chair.jpg');
new Bus('cthulhu', '/img/cthulhu.jpg');
new Bus('dogduck', '/img/dogduck.jpg')
new Bus('dragon', '/img/dragon.jpg')
new Bus('pen', '/img/pen.jpg')
new Bus('petsweep', '/img/petsweep.jpg')
new Bus('scissors', '/img/scissors.jpg')
new Bus('shark', '/img/shark.jpg')
new Bus('sweep', '/img/sweep.png')
new Bus('tauntaun', '/img/tauntaun.jpg')
new Bus('unicorn', '/img/unicorn.jpg')
new Bus('usb', '/img/usb.gif')
new Bus('watercan', '/img/watercan.jpg')
new Bus('wineglass', '/img/wineglass.jpg')




//attach an event listener
busParent.addEventListener('click', handleClickOnBus, true);


///////////////Chart JS//////////////////////


// creates click data, and passes that into a chart js constructor
// var button = document.getElementById('draw');
// button.addEventListener('click', renderChart);
function renderChart() {
  var labelData = [];
  var clickData = [];
  var viewData = [];
  for (var i = 0; i < Bus.allImages.length; i++) {
    labelData.push(Bus.allImages[i].name);
    clickData.push(Bus.allImages[i].clicked);
    viewData.push(Bus.allImages[i].views);
}

  var ctx = document.getElementById('my-chart').getContext('2d');
  
  new Chart(ctx, {
      type: 'bar',
    data: {
        labels: labelData,
        datasets: [{
            label: '# of Clicks',
        data: clickData,
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    }, 
      {
        label: '# of Views',
        data: viewData,
        backgroundColor: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      }]
    },
    options: {
        scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
    }
}
})
}

renderBus();