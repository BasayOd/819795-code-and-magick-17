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
var maxResult = 0;
var columnHeight = GISTO_HEIGTH - GAP;
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};
window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');

  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'black';
  ctx.fillText('Ура вы победили!', CLOUD_X + TEXT_GAP, TEXT_GAP * 2);
  ctx.fillText('Список результатов:', CLOUD_X + TEXT_GAP, TEXT_GAP * 3);
  for (var i = 0; i < names.length; i++) {
    times[i] = Math.floor(times[i]);
    if (times[i] > maxResult) {
      maxResult = times[i];
    }
  }
  for (i = 0; i < names.length; i++) {
    ctx.fillText(Math.floor(times[i]), CLOUD_X + 2 * TEXT_GAP + i * (COLUMN_SPACE + COLUMN_WIDTH), CLOUD_HEIGHT - 4 * GAP - times[i] / maxResult * columnHeight);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
    }
    ctx.fillRect(CLOUD_X + 2 * TEXT_GAP + i * (COLUMN_SPACE + COLUMN_WIDTH), CLOUD_HEIGHT - 3 * GAP - times[i] / maxResult * columnHeight, COLUMN_WIDTH, times[i] / maxResult * columnHeight);
    ctx.fillStyle = 'black';
    ctx.fillText(names[i], CLOUD_X + 2 * TEXT_GAP + i * (COLUMN_SPACE + COLUMN_WIDTH), CLOUD_HEIGHT - GAP);
  }
  debugger;
};