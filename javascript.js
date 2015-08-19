window.onload = function(){
var Train = {
 'lineN': ["Times Square", "34th", "n-28th", 'n-23rd', 'n-Union Square', 'n-8th'],
 'lineL': ["l-8th", "6th", "l-Union Square", "3rd", "1st"],
 'line6': ['Grand Central', '33rd', '6-28th', 'n-23rd', '6-Union Square', 'Astor Place']
};

//Define the choice in dropdown
var start = document.getElementById(startpoint);
var end = document.getElementById(endpoint)
console.log(start)
console.log(end)

//add event listener when the drop downs are CHANGED not 'clicked' 
var end.addEventListener('change', function(e){
  startIndex = Train.lineN.indexOf(start.value)
  endIndex = Train.lineN.indexOf(end.value)
  
//Test everything
  console.log(startIndex)
  console.log(endIndex)
  console.log(end)

e.preventDefault;


var result = Math.abs(startIndex - endIndex);
document.getElementById('answer').innerHTML = result;
  result.className = "show";
  console.log('result' + result);
});

//Tell the computer that there is a line change because of duplicate destinations.
//Result will be for Line L
function lineChange(destination) {
  var destinationLine
  if (Train.lineN.contains(destination)) === true) {
  destinationLine = 'lineL';
  console.log(lineChange);
};
}

//Code to get button DIV displaying like in BMI
var basicAnswer = document.getElementById("answer");

basicAnswer.className = "show";

document.getElementById("basic-answer-alert").innerHTML = "The answer is : " + answer;

};
// var result = Math.abs(lineN.indexOf(start)) - (lineN.indexOf(end));
//   console.log(result);

//chnage inner html to equal the result

// .innerHTML = 