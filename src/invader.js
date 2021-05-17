export default class Invader {
  constructor(game, x, y, color) {
    this.game = game;
    this.posX = x || 100;
    this.posY = y || 100;
    this.width = 50;
    this.height = 50;
    this.color = color || 'orange';
    this.keep = true;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }

  update(deltaTime) {
    if (this.missileCheck()) {
      this.keep = false;
    }
  }

  missileCheck() {
    for (let m = 0; m < this.game.missiles.length; m++) {
      const missile = this.game.missiles[m];

      const iBottom = this.posY + this.height;
      const iTop = this.posY;
      const iLeft = this.posX;
      const iRight = this.posX + this.width;

      const mBottom = missile.posY;
      const mTop = missile.posY + missile.height;
      const mLeft = missile.posX;
      const mRight = missile.posX + missile.width;

      // between top & bottom & left & right
      if (
        mTop <= iBottom &&
        mTop >= iTop &&
        mLeft >= iLeft &&
        mRight <= iRight
      ) {
        missile.keep = false;
        this.keep = false;
        console.log('hit');
      }
    }
  }
}
