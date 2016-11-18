// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
function makeshape(){
  var circle =  document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",60)
  circle.setAttribute("cy",50)
  circle.setAttribute("r",15)
  circle.setAttribute("fill","red")
   var canvas =  document.getElementById("game-board")
  canvas.appendChild(circle)
}
  function pickles(){
  var circle =  document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",120)
  circle.setAttribute("cy",50)
  circle.setAttribute("r",15)
  circle.setAttribute("fill","red")
   var canvas =  document.getElementById("game-board")
   canvas.appendChild(circle)
}
function poptart (){
  var circle =  document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",180)
  circle.setAttribute("cy",50)
  circle.setAttribute("r",15)
  circle.setAttribute("fill","red")
   var canvas =  document.getElementById("game-board")
   canvas.appendChild(circle)
}
function bigboy(){
var circle =  document.createElementNS(namespace,"circle")
circle.setAttribute("cx",60)
circle.setAttribute("cy",120)
circle.setAttribute("r",15)
circle.setAttribute("fill","red")
 var canvas =  document.getElementById("game-board")
 canvas.appendChild(circle)
}
function fooshigi(){
  var circle =  document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",120)
  circle.setAttribute("cy",120)
  circle.setAttribute("r",15)
  circle.setAttribute("fill","red")
   var canvas =  document.getElementById("game-board")
   canvas.appendChild(circle)
}
function shaq(){
  var circle =  document.createElementNS(namespace,"circle")
  circle.setAttribute("cx",150)
  circle.setAttribute("cy",120)
  circle.setAttribute("r",15)
  circle.setAttribute("fill","red")
   var canvas =  document.getElementById("game-board")
   canvas.appendChild(circle)
}
