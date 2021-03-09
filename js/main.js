var dob; //User's birthday
var dob_month; //dob: month value
var dob_day; //dob: day value
var selected_sign; //Currently selected sign

function playSound() {}

const treeObj = document.getElementById('tree');
const turtleObj = document.getElementById('turtle');
const henObj = document.getElementById('hen');
const birdObj = document.getElementById('bird');
const ringObj = document.getElementById('ring');
const geeseObj = document.getElementById('geese');
const swanObj = document.getElementById('swan');
const maidObj = document.getElementById('maid');
const ladyObj = document.getElementById('lady');
const lordObj = document.getElementById('lord');
const pipesObj = document.getElementById('pipes');
const drumsObj = document.getElementById('drums');

const modal = document.getElementById('modal');
const btnModal = document.querySelectorAll('.toggle-modal');
btnModal.forEach(button => {
    button.addEventListener(
        'click',
        () => {
            modal.hidden = !modal.hidden;
        },
        false
    );
});

const closeModalObj = document.getElementById('btn-modal=close');
//closeModalObj.addEventListener('click', function(){
//    modal.hidden = !modal.hidden;
//});

const userSubmitObj = document.getElementById('userSubmit')

userSubmitObj.addEventListener('click', function(){
    console.log('User submit button clicked');

    const userBday = new Date(document.getElementById('bday').value);
    console.log('userBday is' + userBday);

    let whichMonth = userBday.getUTCMonth();
    whichMonth++;
    console.log('whichMonth is: ' + whichMonth);

    const whichDayOfMonth = userBday.getUTCDate();
    console.log('whichDayOfMonth is: ' + whichDayOfMonth)

    let AstroSign = "";

    if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
        AstroSign = "drums";
      } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
        AstroSign = "pipes";
      } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
        AstroSign = "lord";
      } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
        AstroSign = "lady";
      } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
        AstroSign = "maid";
      } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
        AstroSign = "swan";
      } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
        AstroSign = "geese";
      } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
        AstroSign = "ring";
      } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
        AstroSign = "bird";
      } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
        AstroSign = "hen";
      } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
        AstroSign = "turtle";
      } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
        AstroSign = "tree";
      }

      //console.log('AstroSign is: ' + AstroSign);
      //userPicked(AstroSign);
})

treeObj.addEventListener('click', function(evt) {
    console.log('tree button clicked');
});

turtleObj.addEventListener('click', function(evt) {
    console.log('turtle button clicked');
});

henObj.addEventListener('click', function(evt) {
    console.log('hen button clicked');
});

birdObj.addEventListener('click', function(evt) {
    console.log('bird button clicked');
});

ringObj.addEventListener('click', function(evt) {
    console.log('ring button clicked');
});

geeseObj.addEventListener('click', function(evt) {
    console.log('geese button clicked');
});

swanObj.addEventListener('click', function(evt) {
    console.log('swan button clicked');
});

maidObj.addEventListener('click', function(evt) {
    console.log('maid button clicked');
});

ladyObj.addEventListener('click', function(evt) {
    console.log('lady button clicked');
});

lordObj.addEventListener('click', function(evt) {
    console.log('lord button clicked');
});

pipesObj.addEventListener('click', function(evt) {
    console.log('pipes button clicked');
});

drumsObj.addEventListener('click', function(evt) {
    console.log('drums button clicked');
});


