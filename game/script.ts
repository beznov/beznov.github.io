const savedRecord = localStorage.getItem("record");
        if (savedRecord) { 
            const parsed = parseInt(savedRecord);
            console.log(parsed);
        }

class Ball {
    x: number;
    y: number;
    radius: number;
    dy: number;
    visible: boolean;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.radius = 10;
      this.dy = 1;
      this.visible = true;
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      if (this.visible) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#FFFFFF";
        ctx.fill();
        ctx.closePath();
      }
    }
  
    update() {
      this.y += this.dy;
    }
  
    collideWith(projectile: Projectile): boolean {
      const distance = Math.sqrt(
        (this.x - projectile.x) ** 2 + (this.y - projectile.y) ** 2
      );
      return distance < this.radius + projectile.radius;
    }
  }
  
  class Projectile {
    x: number;
    y: number;
    radius: number;
    dy: number;
    visible: boolean;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.radius = 5;
      this.dy = -5;
      this.visible = true;
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      if (this.visible) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#FF0000";
        ctx.fill();
        ctx.closePath();
      }
    }
  
    update() {
      this.y += this.dy;
    }
  }
  
  class CannonGame {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    ballRows: Ball[][];
    projectiles: Projectile[];
    cannonX: number;
    lastBallSpawnTime: number;
    score: number;
  
    constructor() {
      this.canvas = document.getElementById("gameCanvas") as HTMLCanvasElement;
      this.canvas.width = 600;
      this.canvas.height = 600;
      this.ctx = this.canvas.getContext("2d")!;
      this.ballRows = [];
      this.projectiles = [];
      this.cannonX = this.canvas.width / 2;
      this.lastBallSpawnTime = 0;
    }
  
    createBall() {
      const ballX = Math.random() * (this.canvas.width - 20) + 10;
      const ball = new Ball(ballX, -10);
      const balls: Ball[] = [ball];
  
      this.ballRows.push(balls);
    }
  
    drawBalls() {
      this.ballRows.forEach((row) => {
        row.forEach((ball) => {
          ball.draw(this.ctx);
        });
      });
    }
  
    drawProjectiles() {
      this.projectiles.forEach((projectile) => {
        projectile.draw(this.ctx);
      });
    }
  
    updateBalls() {
        this.ballRows.forEach((row) => {
          row.forEach((ball) => {
            ball.update();
    
            if (ball.y + ball.radius >= this.canvas.height) {
              this.gameOver();
            }
          });
        });
    }
  
    updateProjectiles() {
      this.projectiles.forEach((projectile) => {
        projectile.update();
  
        if (projectile.y < 0) {
          this.removeProjectile(projectile);
        } else {
          this.ballRows.forEach((row) => {
            row.forEach((ball) => {
              if (ball.collideWith(projectile)) {
                this.removeBall(ball);
                this.removeProjectile(projectile);
              }
            });
          });
        }
      });
  
      this.projectiles = this.projectiles.filter((projectile) => projectile.visible);
    }
  
    drawCannon() {
      this.ctx.beginPath();
      this.ctx.rect(this.cannonX - 25, this.canvas.height - 30, 50, 20);
      this.ctx.fillStyle = "#FF0000";
      this.ctx.fill();
      this.ctx.closePath();
    }
  
    fireProjectile() {
      const projectile = new Projectile(this.cannonX, this.canvas.height - 30);
      this.projectiles.push(projectile);
    }
  
    handleKeydown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft" && this.cannonX > 25) {
        this.cannonX -= 10;
      } else if (event.key === "ArrowRight" && this.cannonX < this.canvas.width - 25) {
        this.cannonX += 10;
      } else if (event.key === " ") {
        this.fireProjectile();
      }
    }
  
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  
    draw() {
      this.clearCanvas();
      this.drawCannon();
      this.drawBalls();
      this.drawProjectiles();
    }
  
    update() {
      this.updateBalls();
      this.updateProjectiles();
  
      const currentTime = Date.now();
      if (currentTime - this.lastBallSpawnTime > 2000) {
        this.createBall();
        this.lastBallSpawnTime = currentTime;
      }
    }
  
    start() {
        this.createBall();
    
        this.score = 0;
    
        if (!localStorage.getItem("record")) {
          localStorage.setItem("record", this.score.toString());
        } else {
          const recordElement = document.getElementById("record");
          if (recordElement) {
            recordElement.innerText = "Рекорд: " + localStorage.getItem("record");
          }
        }
    
        document.addEventListener("keydown", (event) => this.handleKeydown(event));
    
        setInterval(() => {
          this.update();
          this.draw();
        }, 10);
    }
  
    removeBall(ball: Ball) {
        for (let i = 0; i < this.ballRows.length; i++) {
          const rowIndex = this.ballRows[i].indexOf(ball);
          if (rowIndex !== -1) {
            this.ballRows[i].splice(rowIndex, 1);
            this.score += 1;
            const scoreElement = document.getElementById("current");
            if (scoreElement) {
              scoreElement.innerText = "Рахунок: " + this.score;
            }
            this.updateRecord();
            break;
          }
        }
    }
    
    removeProjectile(projectile: Projectile) {
        this.projectiles = this.projectiles.filter((p) => p !== projectile);
    }

    gameOver() {
        alert("Game Over");
        this.score = 0;
        this.ballRows = [];
        this.projectiles = [];
        this.cannonX = this.canvas.width / 2;
        this.createBall();
        this.updateRecord();
        const scoreElement = document.getElementById("current");
        if (scoreElement) {
          scoreElement.innerText = "Рахунок: 0";
        }
    }
    
    updateRecord() {
        const savedRecord = localStorage.getItem("record");
        if (savedRecord !== null) {
          const parsedRecord = parseInt(savedRecord, 10);
          if (!isNaN(parsedRecord) && this.score > parsedRecord) {
            localStorage.setItem("record", this.score.toString());
            const recordElement = document.getElementById("record");
            if (recordElement) {
              recordElement.innerText = "Рекорд: " + this.score;
            }
          }
        }
    }
  }
  
  const game = new CannonGame();
  game.start();
  