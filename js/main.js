var dob; //User's birthday
var dob_month; //dob: month value
var dob_day; //dob: day value
var selected_sign; //Currently selected sign

function playSound() {}

const treeObj = document.getElementById('tree');
const turtleObj = document.getElementById('tree');
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
closeModalObj.addEventListener('click', function() {
    modal.hidden = !modal.hidden;
});

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


