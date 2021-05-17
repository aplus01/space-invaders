import { MOVEMENT } from './game.js';

export default class Input {
  constructor(game) {
    document.addEventListener('keydown', (key) => {
      switch (key.code) {
        case 'ArrowLeft':
          game.ship.move(MOVEMENT.LEFT);
          break;
        case 'ArrowRight':
          game.ship.move(MOVEMENT.RIGHT);
          break;
        case 'Space':
          game.ship.shoot();
          break;
      }
    });
    document.addEventListener('keyup', (key) => {
      switch (key.code) {
        case 'ArrowLeft':
        case 'ArrowRight':
          game.ship.move(MOVEMENT.STOP);
          break;
      }
    });
  }
}
