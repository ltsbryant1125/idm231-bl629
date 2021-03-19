var dob; //User's birthday
var dob_month; //dob: month value
var dob_day; //dob: day value
var selected_sign; //Currently selected sign

const soundButtons = document.querySelectorAll('.soundtrack');
const soundStopButton = document.getElementById('btn-stop-sounds');
const speakers = document.getElementById('speakers');

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

treeObj.addEventListener('click', function(evt) {
    console.log('tree button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

turtleObj.addEventListener('click', function(evt) {
    console.log('turtle button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

henObj.addEventListener('click', function(evt) {
    console.log('hen button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

birdObj.addEventListener('click', function(evt) {
    console.log('bird button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

ringObj.addEventListener('click', function(evt) {
    console.log('ring button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

geeseObj.addEventListener('click', function(evt) {
    console.log('geese button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

swanObj.addEventListener('click', function(evt) {
    console.log('swan button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

maidObj.addEventListener('click', function(evt) {
    console.log('maid button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

ladyObj.addEventListener('click', function(evt) {
    console.log('lady button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

lordObj.addEventListener('click', function(evt) {
    console.log('lord button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

pipesObj.addEventListener('click', function(evt) {
    console.log('pipes button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

drumsObj.addEventListener('click', function(evt) {
    console.log('drums button clicked' + evt.target.id);
    const idName = evt.target.id;
    userPicked(idName);
});

function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'tree':
      zDisplayObj.src = 'images/PartridgeInATree_Hero.png';
      zTitleObj.innerHTML = 'A Partridge In A Pear Tree';
      zDateRangeObj.innerHTML = '20-January to 18-February';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'turtle':
      zDisplayObj.src = 'images/TwoTurtleDoves_Hero.png';
      zTitleObj.innerHTML = 'Two Turtle Doves';
      zDateRangeObj.innerHTML = '19-February to 20-March';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'hen':
      zDisplayObj.src = 'images/ThreeHens_Hero.png';
      zTitleObj.innerHTML = 'Three French Hens';
      zDateRangeObj.innerHTML = '21-March to 19-April';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'bird':
      zDisplayObj.src = 'images/FourCallingBirds_Hero.png';
      zTitleObj.innerHTML = 'Four Calling Birds';
      zDateRangeObj.innerHTML = '20-April to 20-May';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'ring':
      zDisplayObj.src = 'images/GoldRings_Hero.png';
      zTitleObj.innerHTML = 'Five Gold Rings';
      zDateRangeObj.innerHTML = '21-May to 21-June';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'geese':
      zDisplayObj.src = 'images/SixGeese_Hero.png';
      zTitleObj.innerHTML = 'Six Geese A-Laying';
      zDateRangeObj.innerHTML = '22-June to 22-July';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'swan':
      zDisplayObj.src = 'images/SevenSwans_Hero.png';
      zTitleObj.innerHTML = 'Seven Swans A-Swimming';
      zDateRangeObj.innerHTML = '23-July to 22-August';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'maid':
      zDisplayObj.src = 'images/MaidMilking_Hero.png';
      zTitleObj.innerHTML = 'Eight Maids A-Milking';
      zDateRangeObj.innerHTML = '23-August to 22-September';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'lady':
      zDisplayObj.src = 'images/NineDancers_Hero.png';
      zTitleObj.innerHTML = 'Nine Dancers Dancing';
      zDateRangeObj.innerHTML = '23-September to 23-October';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'lord':
      zDisplayObj.src = 'images/TenLords_Hero.png';
      zTitleObj.innerHTML = 'Ten Lords A-Leaping';
      zDateRangeObj.innerHTML = '24-October to 21-November';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'pipes':
      zDisplayObj.src = 'images/ElevenPipers_Hero.png';
      zTitleObj.innerHTML = 'Eleven Pipers Piping';
      zDateRangeObj.innerHTML = '22-November to 21-December';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
    case 'drums':
      zDisplayObj.src = 'images/TwelveDrummers_Hero.png';
      zTitleObj.innerHTML = 'Twelve Drummers Drumming';
      zDateRangeObj.innerHTML = '22-December to 19-January';
      zMoreInfo.innerHTML = '<p>pls put filler here</p>';
      modal.hidden = !modal.hidden;
      break;
  default: 
  }
}

const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
});

const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreINfoObj = document.getElementById('zMoreInfo');
  
const userSubmitObj = document.getElementById('userSubmit');

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

      console.log('AstroSign is: ' + AstroSign);
      userPicked(AstroSign);
});
