import Input from './input.js';
import Invader from './invader.js';
import Missle from './missile.js';
import Ship from './ship.js';

export const MOVEMENT = {
  LEFT: -1,
  RIGHT: 1,
  STOP: 0,
};

export default class Game {
  constructor(width, height) {
    this.gameWidth = width;
    this.gameHeight = height;

    this.ship = new Ship(this);
    new Input(this);
    this.missiles = [];
    this.invaders = this.buildInvaders(6);
    this.gameObjs = [this.ship, ...this.invaders];
  }

  update(deltaTime) {
    this.gameObjs.forEach((obj) => {
      obj.update(deltaTime);
    });

    this.missiles.forEach((m) => {
      if (m.posY > 0) {
        m.keep = true;
      }
    });

    this.missiles = this.missiles.filter((m) => {
      return m.keep === true;
    });
    this.gameObjs = [this.ship, ...this.invaders, ...this.missiles];
  }

  buildInvaders(count) {
    const invaders = [];
    for (let i = 0; i <= count; i++) {
      invaders.push(new Invader(this, 100 * i, 50, 'red'));
    }
    return invaders;
  }

  addMissile(missle) {
    this.gameObjs.push(missle);
    this.missiles.push(missle);
  }

  draw(ctx) {
    ctx.fillStyle = '#80808080';
    ctx.fillRect(0, 0, this.gameWidth, this.gameHeight);

    this.gameObjs.forEach((obj) => {
      obj.draw(ctx);
    });
  }
}
