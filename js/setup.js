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
var createWizard = function () {
  var obj = {
    name: names[getRandomInt(0, names.length - 1)] + surnames[getRandomInt(0, names.length - 1)],
    coatColor: coatColors[getRandomInt(0, names.length - 1)],
    eyesColor: eyesColors[getRandomInt(0, names.length - 1)]
  };
  return obj;
};
var wizards = [createWizard(), createWizard(), createWizard(), createWizard()];

var removeHidden = function (str) {
  document.querySelector(str).classList.remove('hidden');
};

var addWizardsToFragment = function () {
  for (var i = 0; i < wizards.length; i++) {
    var wizardElement = templateWizard.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
    fragment.appendChild(wizardElement);
  }
};
removeHidden('.setup');

var templateWizard = document.querySelector('#similar-wizard-template')
.content.
querySelector('.setup-similar-item');

var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
addWizardsToFragment();
similarListElement.appendChild(fragment);
removeHidden('.setup-similar');
