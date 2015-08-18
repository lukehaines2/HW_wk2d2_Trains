
Var Train = {
 'lineN' = ["Times Square", "34th", "n-28th", 'n-23rd', 'n-Union Square', 'n-8th'],
 'lineL' = ["l-8th", "6th", "l-Union Square", "3rd", "1st"],
 'line6' = ['Grand Central', '33rd', '6-28th', 'n-23rd', '6-Union Square', 'Astor Place']
};

var start = document.getElementById(startpoint);
var end = document.getElementById(endpoint)
 
end.addEventListener('change', function(event){
  startIndex = Train.lineN.indexOf(start.value)
  endIndex = Train.lineN.indexOf(end.value)
});

var x = document.getElementById("mySelect").value;
// var x = document.getElementById("myForm").elements.length;

event.preventDefault;

var result = Math.abs(lineN.indexOf(start)) - (lineN.indexOf(end));
  console.log(result);

//chnage inner html to equal the result

.innerHTML = 