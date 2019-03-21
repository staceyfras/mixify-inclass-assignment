//select button for gold
var upgButton = document.querySelector('button.btn-up-gold');
var downgButton = document.querySelector('button.btn-down-gold');
var leftgButton = document.querySelector('button.btn-left-gold');
var rightgButton = document.querySelector('button.btn-right-gold');
//select buttons for white
var upwButton = document.querySelector('button.btn-up-white');
var downwButton = document.querySelector('button.btn-down-white');
var leftwButton = document.querySelector('button.btn-left-white');
var rightwButton = document.querySelector('button.btn-right-white');
//if key pressed
var keys = document.querySelector('html');
var bob = {
    x = 1;
    y = 1;
}
var alice = {
    x = 9;
    y = 9;
}
var g = document.getElementsByClassName('player bob');
    console.log(g[0].style);
    g[0].style.display = "grid";
    g[0].style.gridRowStart = bob.x;
//functions for moving gold
function MoveUpg(){
    console.log("upg");
    
    
    g[0].style.gridRowStart = bob.x += 1;

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

//functions for moving white
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
//if glod buttons are clicked
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
//if white buttons are clicked
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
//if key is pressed
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