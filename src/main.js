import Game from './game.js';
let canvas = document.getElementById('gamefield');
let ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
let game = new Game(canvas.width, canvas.height);

let lastTime = 0;

let loop = (timestamp) => {
  requestAnimationFrame(loop);

  const deltaTime = timestamp - lastTime;

  game.update(deltaTime);
  game.draw(ctx);
};

requestAnimationFrame(loop);
