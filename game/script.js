var savedRecord = localStorage.getItem("record");
if (savedRecord) {
    var parsed = parseInt(savedRecord);
    console.log(parsed);
}
var Ball = /** @class */ (function () {
    function Ball(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.dy = 1;
        this.visible = true;
    }
    Ball.prototype.draw = function (ctx) {
        if (this.visible) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
            ctx.closePath();
        }
    };
    Ball.prototype.update = function () {
        this.y += this.dy;
    };
    Ball.prototype.collideWith = function (projectile) {
        var distance = Math.sqrt(Math.pow((this.x - projectile.x), 2) + Math.pow((this.y - projectile.y), 2));
        return distance < this.radius + projectile.radius;
    };
    return Ball;
}());
var Projectile = /** @class */ (function () {
    function Projectile(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 5;
        this.dy = -5;
        this.visible = true;
    }
    Projectile.prototype.draw = function (ctx) {
        if (this.visible) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
            ctx.closePath();
        }
    };
    Projectile.prototype.update = function () {
        this.y += this.dy;
    };
    return Projectile;
}());
var CannonGame = /** @class */ (function () {
    function CannonGame() {
        this.canvas = document.getElementById("gameCanvas");
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext("2d");
        this.ballRows = [];
        this.projectiles = [];
        this.cannonX = this.canvas.width / 2;
        this.lastBallSpawnTime = 0;
    }
    CannonGame.prototype.createBall = function () {
        var ballX = Math.random() * (this.canvas.width - 20) + 10;
        var ball = new Ball(ballX, -10);
        var balls = [ball];
        this.ballRows.push(balls);
    };
    CannonGame.prototype.drawBalls = function () {
        var _this = this;
        this.ballRows.forEach(function (row) {
            row.forEach(function (ball) {
                ball.draw(_this.ctx);
            });
        });
    };
    CannonGame.prototype.drawProjectiles = function () {
        var _this = this;
        this.projectiles.forEach(function (projectile) {
            projectile.draw(_this.ctx);
        });
    };
    CannonGame.prototype.updateBalls = function () {
        var _this = this;
        this.ballRows.forEach(function (row) {
            row.forEach(function (ball) {
                ball.update();
                if (ball.y + ball.radius >= _this.canvas.height) {
                    _this.gameOver();
                }
            });
        });
    };
    CannonGame.prototype.updateProjectiles = function () {
        var _this = this;
        this.projectiles.forEach(function (projectile) {
            projectile.update();
            if (projectile.y < 0) {
                _this.removeProjectile(projectile);
            }
            else {
                _this.ballRows.forEach(function (row) {
                    row.forEach(function (ball) {
                        if (ball.collideWith(projectile)) {
                            _this.removeBall(ball);
                            _this.removeProjectile(projectile);
                        }
                    });
                });
            }
        });
        this.projectiles = this.projectiles.filter(function (projectile) { return projectile.visible; });
    };
    CannonGame.prototype.drawCannon = function () {
        this.ctx.beginPath();
        this.ctx.rect(this.cannonX - 25, this.canvas.height - 30, 50, 20);
        this.ctx.fillStyle = "#FF0000";
        this.ctx.fill();
        this.ctx.closePath();
    };
    CannonGame.prototype.fireProjectile = function () {
        var projectile = new Projectile(this.cannonX, this.canvas.height - 30);
        this.projectiles.push(projectile);
    };
    CannonGame.prototype.handleKeydown = function (event) {
        if (event.key === "ArrowLeft" && this.cannonX > 25) {
            this.cannonX -= 10;
        }
        else if (event.key === "ArrowRight" && this.cannonX < this.canvas.width - 25) {
            this.cannonX += 10;
        }
        else if (event.key === " ") {
            this.fireProjectile();
        }
    };
    CannonGame.prototype.clearCanvas = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    CannonGame.prototype.draw = function () {
        this.clearCanvas();
        this.drawCannon();
        this.drawBalls();
        this.drawProjectiles();
    };
    CannonGame.prototype.update = function () {
        this.updateBalls();
        this.updateProjectiles();
        var currentTime = Date.now();
        if (currentTime - this.lastBallSpawnTime > 2000) {
            this.createBall();
            this.lastBallSpawnTime = currentTime;
        }
    };
    CannonGame.prototype.start = function () {
        var _this = this;
        this.createBall();
        this.score = 0;
        if (!localStorage.getItem("record")) {
            localStorage.setItem("record", this.score.toString());
        }
        else {
            var recordElement = document.getElementById("record");
            if (recordElement) {
                recordElement.innerText = "Рекорд: " + localStorage.getItem("record");
            }
        }
        document.addEventListener("keydown", function (event) { return _this.handleKeydown(event); });
        setInterval(function () {
            _this.update();
            _this.draw();
        }, 10);
    };
    CannonGame.prototype.removeBall = function (ball) {
        for (var i = 0; i < this.ballRows.length; i++) {
            var rowIndex = this.ballRows[i].indexOf(ball);
            if (rowIndex !== -1) {
                this.ballRows[i].splice(rowIndex, 1);
                this.score += 1;
                var scoreElement = document.getElementById("current");
                if (scoreElement) {
                    scoreElement.innerText = "Рахунок: " + this.score;
                }
                this.updateRecord();
                break;
            }
        }
    };
    CannonGame.prototype.removeProjectile = function (projectile) {
        this.projectiles = this.projectiles.filter(function (p) { return p !== projectile; });
    };
    CannonGame.prototype.gameOver = function () {
        alert("Game Over");
        this.score = 0;
        this.ballRows = [];
        this.projectiles = [];
        this.cannonX = this.canvas.width / 2;
        this.createBall();
        this.updateRecord();
        var scoreElement = document.getElementById("current");
        if (scoreElement) {
            scoreElement.innerText = "Рахунок: 0";
        }
    };
    CannonGame.prototype.updateRecord = function () {
        var savedRecord = localStorage.getItem("record");
        if (savedRecord !== null) {
            var parsedRecord = parseInt(savedRecord, 10);
            if (!isNaN(parsedRecord) && this.score > parsedRecord) {
                localStorage.setItem("record", this.score.toString());
                var recordElement = document.getElementById("record");
                if (recordElement) {
                    recordElement.innerText = "Рекорд: " + this.score;
                }
            }
        }
    };
    return CannonGame;
}());
var game = new CannonGame();
game.start();
