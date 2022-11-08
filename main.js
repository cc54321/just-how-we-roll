/**********
 * DATA *
 **********/

let sixes = [];
let doubleSixes = [];
let twelves = [];
let twenties = [];

/********************
 * HELPER FUNCTIONS *
********************/

    const getRandomNumber = function(max) { 
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    return result;
}

/*******************
 * YOUR CODE BELOW *
 *******************/
//reset button "#reset-button"
 let resetButton = document.querySelector('#reset-button');
 //"d6 roll"
 let imageD6 = document.querySelector('#d6-roll');

 let meanD6 = document.querySelector("#d6-rolls-mean");

//d12 roll"
 let imageD12 = document.querySelector('#d12-roll');

 let meanD12 = document.querySelector("#d12-rolls-mean");

 //roll d20
 let imageD20 = document.querySelector('#d20-roll');

 let meanD20 = document.querySelector("#d20-rolls-mean");
//double sixes "double dice
 let d6RollDouble1 = document.querySelector("#double-d6-roll-1");
 d6RollDouble1.src = "images/start/d6.png"; 

 let d6RollDouble2 = document.querySelector("#double-d6-roll-2");
 d6RollDouble2.src = "images/start/d6.png"; 
 //doble rollarea
 let d6DoubleArea = document.querySelector("#double-d6-buttons");

 let d6MeanDoubleM = document.querySelector("#double-d6-rolls-mean");
  d6MeanDoubleM.innerText = "n/a"

let y = 0;


 
/*******************
 * EVENT LISTENERS *
 *******************/


imageD6.addEventListener('click', function(){
    console.log("single die clicked!");
    d6RollFunction();
});

resetButton.addEventListener('click', function(){
    console.log('just reset');
    reset();
});


console.log('just reset');
    reset();


imageD12.addEventListener('click', function(){
    console.log("Click The Die To Roll");
    d12RollFunction();
    
});
console.log('just reset');
    reset();

imageD20.addEventListener('click', function(){
    console.log('click to roll dice')
    d20RollFunction();
});  

console.log('just reset');
    reset();

d6DoubleArea.addEventListener('click',function(){
    console.log('click to roll dice');
    d6MeanDoubleFunction();

});

console.log('just reset');
     reset();




/******************
 * RESET FUNCTION *
 ******************/
//set global array
function reset(){
    sixes = [];

 //reset images// images start/d6.png
 imageD6.src = "./images/start/d6.png";

 //change text to n/a
 meanD6.innerText = "n/a"


//set global array
    twelves = [];
    //reset images start/d12.png
  imageD12.src = "./images/start/d12.jpeg";

   meanD12.innerText = "n/a"

 //set global array
    twenties = [];
    //reset images start /d20.jpg 
    imageD20.src = "./images/start/d20.jpg";

    meanD20.innerText = "n/a"

    //set global array
    doubleSixes = [];
// reset images start
     d6RollDouble1.src = "./images/start/d6.png";
     d6RollDouble2.src = "./images/start/d6.png";
}
     

reset();
/****************************
 * CLICK HANDLING FUNCTIONS *
****************************/
function d6RollFunction(){

let result = getRandomNumber(6);
console.log(result);
//process dice roll 1-6
imageD6.src = `./images/d6/${result}.png`;

//push to array
sixes.push(result);

console.log(sixes);

//calling function
 meanD6.innerText = getMean(sixes);

}

function d12RollFunction(){


 let result = getRandomNumber(12);
  console.log(result);
  //process roll 1-12
  imageD12.src = `./images/numbers/${result}.png`;

  //push to array
  twelves.push(result);

  console.log(twelves);

//calling function

meanD12.innerText = getMean(twelves);
}
function d20RollFunction(){

  let result = getRandomNumber(20);
  console.log(result);

  //process roll 1 - 20
   imageD20.src =`./images/numbers/${result}.png`;
   //PUSH TO ARRAY
   twenties.push(result);
   console.log(twenties);

   meanD20.innerText = getMean(twenties);

}

function d6MeanDoubleFunction(){

  
    //let result = getRandomNumber(6);
    //console.log(result);
    //dice 1
    y = getRandomNumber(6);
    d6RollDouble1.src =`images/d6/${y}.png`
    doubleSixes.push(y);
    console.log(doubleSixes);
  
    //DICE 2
    y = getRandomNumber(6);
    d6RollDouble2.src = `images/d6/${y}.png`
    doubleSixes.push(y);
   console.log(doubleSixes);

    d6MeanDoubleM.innerText = getMean(doubleSixes);
};


/****************
 * MATH SECTION *
 ****************/
 //Now let's find a way to calculate the mean (or average) of our die rolls!  Remember, to find the averagage we get the total of our die rolls and divide it by how many times we've rolled (in this scenario, for each respective die).


 function getMean(array){
    //get total and / length of array
    let total = 0;

    for(let i = 0; i < array.length; i++){
        
        total = total + array[i];
    }    
    return total/array.length;
  

 }

