console.log("popups.js loaded");
//
// let answer = prompt("How are you?");
// // console.log("The user is "+answer+".");
//
// alert("The user is "+answer+".");

// Tip Calculator lab #1
let answer = "";

let tip = "";
function gettip()
{
  answer = prompt("What was the cost of dinner?")
  tip = answer*.20
  alert("The tip is $"+tip+".00")
}


// Mad Libs lab #2
// let noun1 = "";
// let noun2 = "";
// let verb = "";
// let adjective = "";
// let num1 = "";
// let num2 = "";

let array1 = []
let array2 = []

function popup()
{
  array1[0] = prompt("Please enter a noun.");
  array1[1] = prompt("Please enter a noun.");
  array1[2]= prompt("Please enter a verb.");
  array1[3] = prompt("Please enter an adjective.");
  array2[0] = prompt("What is your favorite number?");
  array2[1] = prompt("What is your second favorite number?");


  alert("Once upon a time the "+array2[1]+" "+array1[0]+" "+array1[2]+" "+array2[0]+" of the "+array1[3]+" "+array1[1]+" in all the land. The "+array1[0]+" was very happy.");
}
// let story = ("")
//
// alert(story)
