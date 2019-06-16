'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 20;
var GISTO_HEIGTH = 150;
var COLUMN_WIDTH = 40;
var COLUMN_SPACE = 50;
var columnHeight = GISTO_HEIGTH - GAP;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
var renderText = function (ctx, str, x, y) {
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText(str, x, y);
};
var getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var getColor = function (r, g, b, a) {
  return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
};
var getBarColor = function (name) {
  var barColor = 'rgba(255, 0, 0, 1)';
  if (name !== 'Вы') {
    barColor = getColor(getRandomInt(0, 255), getRandomInt(0, 255), 255, 1);
  }
  return barColor;
};
var renderSingleBar = function (ctx, x, y, width, height, names, times, maxTime, i) {
  renderText(ctx,
      Math.floor(times[i]),
      CLOUD_X + 2 * TEXT_GAP + i * (COLUMN_SPACE + COLUMN_WIDTH),
      CLOUD_HEIGHT - 4 * GAP - times[i] / maxTime * columnHeight
  );
  ctx.fillStyle = getBarColor(names[i]);
  ctx.fillRect(x, y, width, height);
  renderText(ctx,
      names[i],
      CLOUD_X + 2 * TEXT_GAP + i * (COLUMN_SPACE + COLUMN_WIDTH),
      CLOUD_HEIGHT - GAP
  );
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderText(ctx,
      'Ура вы победили!',
      CLOUD_X + TEXT_GAP,
      TEXT_GAP * 2
  );
  renderText(ctx, 'Список результатов:', CLOUD_X + TEXT_GAP, TEXT_GAP * 3);
  var maxTime = getMaxElement(times);
  for (var i = 0; i < names.length; i++) {
    renderSingleBar(ctx,
        CLOUD_X + 2 * TEXT_GAP + i * (COLUMN_SPACE + COLUMN_WIDTH),
        CLOUD_HEIGHT - 3 * GAP - times[i] / maxTime * columnHeight,
        COLUMN_WIDTH,
        times[i] / maxTime * columnHeight,
        names,
        times,
        maxTime,
        i
    );
  }
};
