var upgButton = document.querySelector('button.btn-up-gold');
var downgButton = document.querySelector('button.btn-down-gold');
var leftgButton = document.querySelector('button.btn-left-gold');
var rightgButton = document.querySelector('button.btn-right-gold');

var upwButton = document.querySelector('button.btn-up-white');
var downwButton = document.querySelector('button.btn-down-white');
var leftwButton = document.querySelector('button.btn-left-white');
var rightwButton = document.querySelector('button.btn-right-white');

var keys = document.querySelector('html');

function MoveUpg(){
    console.log("upg");
}
function MoveDowng(){
    console.log("downg");
}
function MoveLeftg(){
    console.log("leftg");
}
function MoveRightg(){
    console.log("rightg");
}

///
function MoveUpw(){
    console.log("upw");
}
function MoveDownw(){
    console.log("downw");
}
function MoveLeftw(){
    console.log("leftw");
}
function MoveRightw(){
    console.log("rightw");
}
///
upgButton.onclick = function() {
    MoveUpg();
}
downgButton.onclick = function() {
    MoveDowng();
}
leftgButton.onclick = function() {
    MoveLeftg();
}
rightgButton.onclick = function() {
    MoveRightg();
}
///
upwButton.onclick = function() {
    MoveUpw();
}
downwButton.onclick = function() {
    MoveDownw();
}
leftwButton.onclick = function() {
    MoveLeftw();
}
rightwButton.onclick = function() {
    MoveRightw();
}
//keyboard input
keys.onkeypress = function(){
    var x = event.key;
    switch(x) {
        case 'w':
            MoveUpg();
          break;
        case 'a':
            MoveLeftg();
          break;
        case 's':
            MoveDowng();
          break;
        case 'd':
            MoveRightg();
          break;
        case 'i':
          MoveUpw();
            break;
        case 'j':
          MoveLeftw();
            break;
        case 'k':
          MoveDownw();
            break;
        case 'l':
          MoveRightw();
            break;
        default:
      }
      
};
 rightgButton = document.querySelector('button.btn-right-gold');

var upwButton = document.querySelector('button.btn-up-white');
var downwButton = document.querySelector('button.btn-down-white');
var leftwButton = document.querySelector('button.btn-left-white');
var rightwButton = document.querySelector('button.btn-right-white');

function MoveUpg(){
    console.log("upg");
}
function MoveDowng(){
    console.log("downg");
}
function MoveLeftg(){
    console.log("leftg");
}
function MoveRightg(){
    console.log("rightg");
}
function MoveUpw(){
    console.log("upw");
}
function MoveDownw(){
    console.log("downw");
}
function MoveLeftw(){
    console.log("leftw");
}
function MoveRightw(){
    console.log("rightw");
}

upgButton.onclick = function() {
    MoveUpg();
}
downgButton.onclick = function() {
    MoveDowng();
}
leftgButton.onclick = function() {
    MoveLeftg();
}
rightgButton.onclick = function() {
    MoveRightg();
}
upwButton.onclick = function() {
    
}
downwButton.onclick = function() {
  
}
leftwButton.onclick = function() {
  
}
rightwButton.onclick = function() {
  
}
.onkeypress = function(){
    var x = event.key;
    switch(x) {
        case 'w':
            MoveUpg();
          break;
        case 'a':
            MoveLeftg();
          break;
        case 's':
            MoveDowng();
          break;
        case 'd':
            MoveRightg();
          break;
        case 'i':
          MoveUpg();
            break;
        case 'j':
          MoveLeftg();
            break;
        case 'k':
          MoveDowng();
            break;
        case 'l':
          MoveRightg();
            break;
        default:
      }
      
};
