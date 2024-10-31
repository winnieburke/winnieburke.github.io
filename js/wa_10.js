// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

let insertx = ["Leah", "George", "Sheldon"];

let inserty = ["the grocery store", "Water World", "the basement"];

let insertz = [" exploded", "disappeared", "turned into a butterfly and flew away"];



// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;
    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);


  if(customName.value !== 'bob') {
    const name = customName.value;
    newStory = newStory.replaceAll("bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + "stone";
    const temperature =  Math.round(5/9*(94-32)) + "centigrade";
    newStory = newStory.replaceAll("94 fahrenheit", temperature);
    newStory = newStory.replaceAll("300 pounds", weight);
    

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}