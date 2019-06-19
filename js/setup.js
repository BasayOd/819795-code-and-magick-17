'use strict';

var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = [' да Марья', ' Верон', ' Мирабелла', ' Вальц', ' Онопко', ' Топольницкая', ' Нионго', ' Ирвинг'];
var coatColors = ['rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [{
  name: names[getRandomInt(0, names.length - 1)] + surnames[getRandomInt(0, names.length - 1)],
  coatColor: coatColors[getRandomInt(0, names.length - 1)],
  eyesColor: eyesColors[getRandomInt(0, names.length - 1)]
},
{
  name: names[getRandomInt(0, names.length - 1)] + surnames[getRandomInt(0, names.length - 1)],
  coatColor: coatColors[getRandomInt(0, names.length - 1)],
  eyesColor: eyesColors[getRandomInt(0, names.length - 1)]
},
{
  name: names[getRandomInt(0, names.length - 1)] + surnames[getRandomInt(0, names.length - 1)],
  coatColor: coatColors[getRandomInt(0, names.length - 1)],
  eyesColor: eyesColors[getRandomInt(0, names.length - 1)]
},
{
  name: names[getRandomInt(0, names.length - 1)] + surnames[getRandomInt(0, names.length - 1)],
  coatColor: coatColors[getRandomInt(0, names.length - 1)],
  eyesColor: eyesColors[getRandomInt(0, names.length - 1)]
}];

var setupBlock = document.querySelector('.setup');
setupBlock.classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var template = document.querySelector('#similar-wizard-template');

