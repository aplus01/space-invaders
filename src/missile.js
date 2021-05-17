export default class Missile {
  constructor(game) {
    this.width = game.gameWidth * 0.02;
    this.height = this.width * 1.2;
    this.posX = game.ship.posX + game.ship.width * 0.5 - this.width * 0.5;
    this.posY = game.gameHeight - game.ship.height;
    this.color = '#FFFFFF';
    this.game = game;

    this.speedX = 0;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  update(deltaTime) {
    this.posY -= 3;
  }
}
