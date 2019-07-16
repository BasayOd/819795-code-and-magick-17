'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var startPosition = {};
var openWindow = function (str) {
  document.querySelector(str).classList.remove('hidden');
  startPosition = {
    y: document.querySelector(str).style.top,
    x: document.querySelector(str).style.left
  };
};

var closeWindow = function (str) {
  document.querySelector(str).classList.add('hidden');
  document.querySelector(str).style.top = startPosition.y;
  document.querySelector(str).style.left = startPosition.x;
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

var dialogHandle = document.querySelector('.upload');
dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault();
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };
  var onClickPreventDefault = function (evt) {
    evt.preventDefault();
    dialogHandle.removeEventListener('click', onClickPreventDefault);
  };
  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dialogHandle.addEventListener('click', onClickPreventDefault);
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    setup.style.top = (setup.offsetTop - shift.y) + 'px';
    setup.style.left = (setup.offsetLeft - shift.x) + 'px';
  };
  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
