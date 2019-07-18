'use strict';


(function () {
  var createWizard = function () {
    var obj = {
      name: window.wizardsdata.names[window.util.getRandomInt(0, window.wizardsdata.names.length - 1)] +
      window.wizardsdata.surnames[window.util.getRandomInt(0, window.wizardsdata.names.length - 1)],
      coatColor: window.wizardsdata.coatColors[window.util.getRandomInt(0, window.wizardsdata.names.length - 1)],
      eyesColor: window.wizardsdata.eyesColors[window.util.getRandomInt(0, window.wizardsdata.names.length - 1)]
    };
    return obj;
  };

  var wizards = [createWizard(), createWizard(), createWizard(), createWizard()];

  var addWizardsToFragment = function () {
    for (var i = 0; i < wizards.length; i++) {
      var wizardElement = templateWizard.cloneNode(true);
      wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
      wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
      wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
      fragment.appendChild(wizardElement);
    }
  };

  var templateWizard = document.querySelector('#similar-wizard-template')
.content.
querySelector('.setup-similar-item');

  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');

  addWizardsToFragment();
  similarListElement.appendChild(fragment);
})();
