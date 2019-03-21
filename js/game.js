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
    x: 0,
    y: 0
};

var alice = {
    x: 7,
    y: 7
};    

function updatePlayerPosition() {
    // Ensure they don't fall off the end of the Earth
    bob.x = Math.min(Math.max(bob.x, 0), 7);
    bob.y = Math.min(Math.max(bob.y, 0), 7);
    alice.x = Math.min(Math.max(alice.x, 0), 7);
    alice.y = Math.min(Math.max(alice.y, 0), 7);

    console.log(bob)
    console.log(alice)

    var b = document.getElementsByClassName('bob')[0];
    b.style.gridRowStart = bob.y+1;
    b.style.gridColumnStart = bob.x+1;

    var a = document.getElementsByClassName('alice')[0];    
    a.style.gridRowStart = alice.y+1;
    a.style.gridColumnStart = alice.x+1;
}

updatePlayerPosition();

//functions for moving gold
function MoveUpg(){
    bob.y--;
    updatePlayerPosition();
}
function MoveDowng(){
    bob.y++;
    updatePlayerPosition();

}
function MoveLeftg(){
    bob.x--;
    updatePlayerPosition();
}
function MoveRightg(){
    bob.x++;
    updatePlayerPosition();
}

//functions for moving white
function MoveUpw(){
    alice.y--;
    updatePlayerPosition();
}
function MoveDownw(){
    alice.y++;
    updatePlayerPosition();
}
function MoveLeftw(){
    alice.x--;
    updatePlayerPosition();
}
function MoveRightw(){
    alice.x++;
    updatePlayerPosition();
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