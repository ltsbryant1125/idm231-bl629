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
const helpObj = document.getElementById('help');

helpObj.addEventListener('click', function(evt) {
  console.log('help button clicked' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

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

const sndTreeObj=document.getElementById('sndTree');
const sndTurtleObj=document.getElementById('sndTurtle');
const sndHenObj=document.getElementById('sndHen');
const sndBirdObj=document.getElementById('sndBird');
const sndRingObj=document.getElementById('sndRing');
const sndGeeseObj=document.getElementById('sndGeese');
const sndSwansObj=document.getElementById('sndSwans');
const sndMaidsObj=document.getElementById('sndMaids');
const sndLadyObj=document.getElementById('sndLady');
const sndLordObj=document.getElementById('sndLord');
const sndPipesObj=document.getElementById('sndPipes');
const sndDrumsObj=document.getElementById('sndDrums');

function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'tree':
      zDisplayObj.src = 'images/PartridgeInATree_Hero.png';
      zTitleObj.innerHTML = 'A Partridge In A Pear Tree';
      zDateRangeObj.innerHTML = '20-January to 18-February';
      zMoreInfo.innerHTML = "<p>You have received a Partridge in a Pear Tree! It's thought that the partridge represents the birth of Jesus Christ because that bird is willing to sacrifice its life to protect its young.</p>";
      stopAllAudio();
      sndTreeObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'turtle':
      zDisplayObj.src = 'images/TwoTurtleDoves_Hero.png';
      zTitleObj.innerHTML = 'Two Turtle Doves';
      zDateRangeObj.innerHTML = '19-February to 20-March';
      zMoreInfo.innerHTML = "<p>You have received Two Turtle Doves! It's thought that the two turtle doves represent the Old and New Testament of the Bible. The doves are the biblical roadmap that is available to everyone.</p>";
      stopAllAudio();
      sndTurtleObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'hen':
      zDisplayObj.src = 'images/ThreeHens_Hero.png';
      zTitleObj.innerHTML = 'Three French Hens';
      zDateRangeObj.innerHTML = '21-March to 19-April';
      zMoreInfo.innerHTML = "<p>You have received Three French Hens! It's thought that the three french hens represent the three theological virtues: Faith, Hope, and Love.</p>";
      stopAllAudio();
      sndHenObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'bird':
      zDisplayObj.src = 'images/FourCallingBirds_Hero.png';
      zTitleObj.innerHTML = 'Four Calling Birds';
      zDateRangeObj.innerHTML = '20-April to 20-May';
      zMoreInfo.innerHTML = "<p>You have received the Four Calling Birds! It's thought that the four calling birds represent the four gospels of Matthew, Mark, Luke, and John.</p>";
      stopAllAudio();
      sndBirdObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'ring':
      zDisplayObj.src = 'images/GoldRings_Hero.png';
      zTitleObj.innerHTML = 'Five Gold Rings';
      zDateRangeObj.innerHTML = '21-May to 21-June';
      zMoreInfo.innerHTML = "<p>You have received Five Golden Rings! It's thought that the five gold rings represent the first five books of the Old Testament, which describe man's fall into sin and the great love of God in sending a Savior.</p>";
      stopAllAudio();
      sndRingObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'geese':
      zDisplayObj.src = 'images/SixGeese_Hero.png';
      zTitleObj.innerHTML = 'Six Geese A-Laying';
      zDateRangeObj.innerHTML = '22-June to 22-July';
      zMoreInfo.innerHTML = "<p>You have received the Six Geese-A-Laying! It's thought that the six geese represent the six days of creation, representing the birth of new life.</p>";
      stopAllAudio();
      sndGeeseObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'swan':
      zDisplayObj.src = 'images/SevenSwans_Hero.png';
      zTitleObj.innerHTML = 'Seven Swans A-Swimming';
      zDateRangeObj.innerHTML = '23-July to 22-August';
      zMoreInfo.innerHTML = "<p>You have received the Seven Swans-A-Swimming! It's thought that the seven swans represent the seven sacraments of the Holy Spirit: Prophecy, Serving, Teaching, Exhortation, Contribution, Leadership, and Mercy.</p>";
      stopAllAudio();
      sndSwansObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'maid':
      zDisplayObj.src = 'images/MaidMilking_Hero.png';
      zTitleObj.innerHTML = 'Eight Maids A-Milking';
      zDateRangeObj.innerHTML = '23-August to 22-September';
      zMoreInfo.innerHTML = "<p>You have received the Eight Maids Maids-A-Milking! It's thought that the eight maids represent the Eight Beatitudes, the most concise summary of the spiritual life of man.</p>";
      stopAllAudio();
      sndMaidsObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'lady':
      zDisplayObj.src = 'images/NineDancers_Hero.png';
      zTitleObj.innerHTML = 'Nine Ladies Dancing';
      zDateRangeObj.innerHTML = '23-September to 23-October';
      zMoreInfo.innerHTML = "<p>You have received the Ladies Dancing! It's thought that the nine ladies dancing represent the nine fruits of the Holy Spirit: Charity, Joy, Peace, Patience, Kindness, Mildness, Fidelity, Modesty, and Chastity.</p>";
      stopAllAudio();
      sndLadyObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'lord':
      zDisplayObj.src = 'images/TenLords_Hero.png';
      zTitleObj.innerHTML = 'Ten Lords A-Leaping';
      zDateRangeObj.innerHTML = '24-October to 21-November';
      zMoreInfo.innerHTML = "<p>You have received the Ten Lords-A-Leaping! It's thought that the ten lords leaping represent the ten commandments given to Moses on Mount Sinai by God.</p>";
      stopAllAudio();
      sndLordObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'pipes':
      zDisplayObj.src = 'images/ElevenPipers_Hero.png';
      zTitleObj.innerHTML = 'Eleven Pipers Piping';
      zDateRangeObj.innerHTML = '22-November to 21-December';
      zMoreInfo.innerHTML = "<p>You have received the Eleven Pipers Piping! It's thought that the eleven pipers represent the eleven faithful Apostles. This does not include Judas, we don't like that guy.</p>";
      stopAllAudio();
      sndPipesObj.play();
      modal.hidden = !modal.hidden;
      break;
    case 'drums':
      zDisplayObj.src = 'images/TwelveDrummers_Hero.png';
      zTitleObj.innerHTML = 'Twelve Drummers Drumming';
      zDateRangeObj.innerHTML = '22-December to 19-January';
      zMoreInfo.innerHTML = "<p>You have received the Twelve Drummers Drumming! It's thought that the twelve  drummers represent the 12 points of the doctrine in the Apostles' Creed.</p>";
      stopAllAudio();
      sndDrumsObj.play();
      modal.hidden = !modal.hidden;
      break;
    default: 
    case 'help':
      zDisplayObj.src = 'images/InfoIcon72.png';
      zTitleObj.innerHTML = 'How to use';
      zDateRangeObj.innerHTML = '';
      zMoreInfo.innerHTML = "<p>Simply input your birthday and find out what gift you'll get this Christmas!<p>";
      modal.hidden = !modal.hidden;
      break;
  }
}

function stopAllAudio() {
  sndTreeObj.pause();
  sndTreeObj.currentTime = 0;
  sndTurtleObj.pause();
  sndTurtleObj.currentTime = 0;
  sndHenObj.pause();
  sndHenObj.currentTime = 0;
  sndBirdObj.pause();
  sndBirdObj.currentTime = 0;
  sndRingObj.pause();
  sndRingObj.currentTime = 0;
  sndGeeseObj.pause();
  sndGeeseObj.currentTime = 0;
  sndSwansObj.pause();
  sndSwansObj.currentTime = 0;
  sndMaidsObj.pause();
  sndMaidsObj.currentTime = 0;
  sndLadyObj.pause();
  sndLadyObj.currentTime = 0;
  sndLordObj.pause();
  sndLordObj.currentTime = 0;
  sndPipesObj.pause();
  sndPipesObj.currentTime = 0;
  sndDrumsObj.pause();
  sndDrumsObj.currentTime = 0;
}

const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
  stopAllAudio();
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
