import Missile from './missile.js';

export default class ship {
  constructor(game) {
    this.width = game.gameWidth * 0.08;
    this.height = this.width * 1.2;
    this.posX = game.gameWidth * 0.5;
    this.posY = game.gameHeight - this.height;
    this.color = '#FF00FF';
    this.game = game;

    this.speedX = 0;
  }

  move(direction) {
    this.speedX = direction * 2;
  }

  update(deltaTime) {
    this.posX += this.speedX;
    if (this.posX <= 0) {
      this.posX = 0;
      this.speedX = 0;
    }
    if (this.posX + this.width >= this.game.gameWidth) {
      this.posX = this.game.gameWidth - this.width;
      this.speedX = 0;
    }
  }

  shoot() {
    this.game.addMissile(new Missile(this.game));
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
