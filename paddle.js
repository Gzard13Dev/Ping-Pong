const can = document.getElementById('canvas').getContext('2d');
var Paddle = function (x, y){
		this.x = x;
		this.y = y;
		this.top = this.y - 10;
		this.rightSide = this.x + 100;
		this.leftSide = this.x - 100;
		
		
		
}
can.lineWidth = 20;
can.strokeStyle = 'blue';
Paddle.prototype.draw = function(){
	can.strokeRect(this.x, this.y, 200, 20);
}
var paddle = new Paddle(290, 600);
		
			


function circle(x, y, radius, fillBool){
	can.beginPath();
	can.arc(x, y, radius, 0, Math.PI * 2, false);
	if (fillBool) {
		can.fill();
	}else{
		can.stroke();
	}

}

function Ball(){
	this.x = 100;
	this.y = 100;
	this.ySpeed = 3 + 4;
	this.xSpeed = 3 + Math.random() * 2;
	
};

 Ball.prototype.draw = function() {
	circle(this.x, this.y, 10, true);
};

Ball.prototype.move = function(){
	 this.x += this.xSpeed;
	 this.y += this.ySpeed;
}
Ball.prototype.checkCollision = function () {
	if (this.x < 0 || this.x > 800) {
		this.xSpeed = -this.xSpeed;
	}
	if (this.y < 0 || this.y > 800) {
		this.ySpeed = -this.ySpeed;
	};
	
	 if ( this.y > paddle.y ) {
		this.ySpeed = -this.ySpeed;
		
	}else if (this.x === paddle.x) {
		this.xSpeed = -this.xSpeed;
	};
};
var ball = new Ball();

setInterval(() => {
		can.clearRect(0, 0, 800, 800);
		can.strokeRect(0, 0, 800, 800);
		ball.checkCollision();
		ball.draw();
		ball.move();
		paddle.draw();
	document.addEventListener('mousemove', (event) => {
			paddle.x = event.x;
			paddle.y = event.y;
	});
}, 0);
