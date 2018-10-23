let canvas = document.getElementById('Pong');
let ctx = canvas.getContext('2d');
let pong = {};

function ball(radius, color) {
    this.x = 0;
    this.y = 0;
    this.offsetX = 0;
    this.offsetX = 0;
    this.radius = radius;
    this.color = color;
    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

function racket(name, width, height, offset, color) {
    this.x = 0;
    this.y = 0;
    this.score = 0;
    this.name = name;
    this.width = width;
    this.height = height;
    this.offset = offset;
    this.color = color;
    this.toUp = false;
    this.toDown = false;
    this.draw = function () {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}

function gameInit() {
    pong.position = 0;
    pong.pause = true;
    pong.ball = new ball(10, 'white');
    pong.player = [];
    pong.player[0] = new racket('PlayerLeft', 15, 60, 7, 'green');
    pong.player[1] = new racket('PlayerRight', 15, 60, 7, 'red');
    pong.life = 5;
    pong.win = 0;
    gameReset();
}

function gameReset() {
    pong.ball.y = canvas.width / 2 - 140;
    pong.ball.x = canvas.height / 2 + 140;
    pong.pause = true;
    pong.ball.offsetX = 6;
    pong.ball.offsetY = 2;
    pong.player[0].x = 0;
    pong.player[1].x = canvas.width - pong.player[1].width;
    pong.player[0].y = canvas.height - pong.player[0].height / 2 - 240;
    pong.player[1].y = canvas.height - pong.player[1].height / 2 - 240;
}

function keyDownHandler(e) {
    if (e.keyCode == 65) {
        pong.player[0].toUp = true;
    }
    else if (e.keyCode == 75) {
        pong.player[1].toUp = true;
    }
    else if (e.keyCode == 90) {
        pong.player[0].toDown = true;
    }
    else if (e.keyCode == 77) {
        pong.player[1].toDown = true;
    }
    else if (e.keyCode == 32) {
        pong.pause = !pong.pause;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 65) {
        pong.player[0].toUp = false;
    }
    else if (e.keyCode == 75) {
        pong.player[1].toUp = false;
    }
    else if (e.keyCode == 90) {
        pong.player[0].toDown = false;
    }
    else if (e.keyCode == 77) {
        pong.player[1].toDown = false;
    }
}

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

function collision(rect, circle) {
    var dx = Math.abs(circle.x - (rect.x + rect.width / 2));
    var dy = Math.abs(circle.y - (rect.y + rect.height / 2));
    if (dx > circle.radius + rect.width / 2) {
        return (false);
    }
    if (dy > circle.radius + rect.height / 2) {
        return (false);
    }
    if (dx <= rect.width) {
        return (true);
    }
    if (dy <= rect.height) {
        return (true);
    }
    var dx = dx - rect.width;
    var dy = dy - rect.height;
    return (dx * dx + dy * dy <= circle.radius * circle.radius);
}

function showScore() {
    ctx.font = "16px Verdana";
    ctx.fillStyle = "#d46";
    ctx.textAlign = "left";
    ctx.fillText(pong.player[0].name + ": " + pong.player[0].score, 20, 20);
    ctx.textAlign = "right";
    ctx.fillText(pong.player[1].name + ": " + pong.player[1].score, canvas.height + 280, 20);
}

function showHeading(text) {
    ctx.font = "20px Verdana";
    ctx.fillStyle = "#e60";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, 60);
}

function showTip(text) {
    ctx.font = "14px Verdana";
    ctx.fillStyle = "#e60";
    ctx.textAlign = "center";
    ctx.fillText(text, canvas.width / 2, 90);
}

function gameDraw() {
    pong.ball.draw();
    pong.player[0].draw();
    pong.player[1].draw();
    showScore();
}

function gameRelease() {
    pong.ball.x += pong.ball.offsetX;
    pong.ball.y += pong.ball.offsetY;
    if (pong.ball.y + pong.ball.radius / 2 >= canvas.height || pong.ball.y - pong.ball.radius / 2 <= 0) {
        pong.ball.offsetY = -pong.ball.offsetY;
    }
    for (i = 0; i < pong.player.length; i++) {
        if (pong.player[i].toUp && pong.player[i].y > 0) {
            pong.player[i].y -= pong.player[i].offset;
        }
        if (pong.player[i].toDown && pong.player[i].y + pong.player[i].height < canvas.height) {
            pong.player[i].y += pong.player[i].offset;
        }
        if (collision(pong.player[i], pong.ball)) {
            pong.ball.offsetX = -pong.ball.offsetX;

            if (pong.player[i].toUp) {
                pong.ball.offsetY--;
            }
            if (pong.player[i].toDown) {
                pong.ball.offsetY++;
            }
        }
    }
    if (pong.ball.x < pong.player[0].width) {
        pong.player[1].score++;
        pong.position = 2;
        pong.pause = true;
    }
    if (pong.ball.x > canvas.width - pong.player[1].width) {
        pong.player[0].score++;
        pong.position = 2;
        pong.pause = true;
    }
    for (i = 0; i < pong.player.length; i++) {
        if (pong.player[i].score == pong.life) {
            pong.position = 3;
            pong.pause = true;
            pong.win = i;
        }
    }
}

function game() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gameDraw();
    if (pong.pause) {
        switch (pong.position) {
            case 0:
                showHeading("Move Rackets: A,Z and K,M");
                showTip("(Press Space)");
                break;
            case 2:
                gameReset();
                showHeading("SCORE");
                showTip("(Press Space)");
                break;
            case 3:
                gameReset();
                showHeading(pong.player[pong.win].name + "win!");
                showTip("Game Over: Press Space to Play Again");
                break;
            default:
                showHeading("Pause");
                showTip("Continue Game: Space")
        }
    }
    else {
        switch (pong.position) {
            case 0:
            case 2:
                pong.position = 1;
                break;
            case 3:
                gameInit();
                break;
            default:
                gameRelease();
        }
    }
    requestAnimationFrame(game);
}

gameInit();
game();