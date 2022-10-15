
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 24 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in amazement for a few seconds, then :insertz:. Bob saw the whole thing, but was still surprised — :inserta:, weighs 300 pounds and it was a foggy day.";

const insertA = ["Kevin, Keith, Andrew"]
const insertX = ["Brad", "Chad", "Tray", "Kyle"];
const insertY = ["Jamba Juice", "Spaghetti", "Folsom"];
const insertZ = ["shook with intensity", "turned into a peacock", "transformed into a martian"];


var newStory = storyText;


randomize.addEventListener('click', result);

function result() {
var xItem = randomValueFromArray(insertX);
var yItem = randomValueFromArray(insertY);
var zItem = randomValueFromArray(insertZ);
var aItem = randomValueFromArray(insertA);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    const centigrade = (temperature - 32) * 5 / 9;
    const stone = weight / 14;
    newStory = newStory.replace("94 fahrenheit", Math.floor(centigrade) + " celsius");
    newStory = newStory.replace("300 pounds", Math.floor(stone) + " stone");

  }
    newStory = newStory.replace(":insertx:", xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);
    newStory = newStory.replace(":inserta:", AItem);

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
