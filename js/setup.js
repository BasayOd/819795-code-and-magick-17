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
var fireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var createWizard = function () {
  var obj = {
    name: names[getRandomInt(0, names.length - 1)] + surnames[getRandomInt(0, names.length - 1)],
    coatColor: coatColors[getRandomInt(0, names.length - 1)],
    eyesColor: eyesColors[getRandomInt(0, names.length - 1)]
  };
  return obj;
};
var wizards = [createWizard(), createWizard(), createWizard(), createWizard()];

var openWindow = function (str) {
  document.querySelector(str).classList.remove('hidden');
};

var closeWindow = function (str) {
  document.querySelector(str).classList.add('hidden');
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
var closeWindowByMouse = function (selector, click, window) {
  document.querySelector(selector).addEventListener(click, function () {
    closeWindow(window);
  });
};
var openWindowByMouse = function (selector, click, window) {
  document.querySelector(selector).addEventListener(click, function () {
    openWindow(window);
  });
  document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape' && document.activeElement.localName !== 'input') {
      closeWindow(window);
    }
  });

};
var templateWizard = document.querySelector('#similar-wizard-template')
.content.
querySelector('.setup-similar-item');


var similarListElement = document.querySelector('.setup-similar-list');
var fragment = document.createDocumentFragment();
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var createEventListenerForSetupWizard = function (selector, array) {
  document.querySelector('.setup-wizard').
  querySelector(selector).addEventListener('click', function () {
    changeElementOfWizard(selector, array);
  });
};
var changeElementOfWizard = function (selector, array) { // тут меняем произвольно части волшебника
  var randArrayElem = array[getRandomInt(0, array.length - 1)];
  document.querySelector('.setup-wizard').
  querySelector(selector).style.fill = randArrayElem;
  if (selector === '.wizard-coat') {
    document.querySelector('input[name=coat-color]').value = randArrayElem;
  }
  if (selector === '.wizard-eyes') {
    document.querySelector('input[name=eyes-color]').value = randArrayElem;
  }
};
var changeFireballByClick = function () {
  document.querySelector('.setup-fireball-wrap').addEventListener('click', function () {
    var fireballColor = fireballColors[getRandomInt(0, fireballColors.length - 1)];
    document.querySelector('.setup-fireball-wrap').style.background = fireballColor;
    document.querySelector('.setup-fireball-wrap').querySelector('input').value = fireballColor;
  });
};
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openWindow('.setup');
  }
});
addWizardsToFragment();
similarListElement.appendChild(fragment);
openWindow('.setup-similar');
openWindowByMouse('.setup-open', 'click', '.setup');
closeWindowByMouse('.setup-close', 'click', '.setup');
setupClose.addEventListener('keydown ', function (evt) {
  if (evt.key === 'Enter') {
    closeWindow('.setup');
  }
});
setup.querySelector('.setup-close').
addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closeWindow('.setup');
  }
});
createEventListenerForSetupWizard('.wizard-coat', coatColors);
createEventListenerForSetupWizard('.wizard-eyes', eyesColors);
changeFireballByClick();


