const Player = function(color,x=400,y=400) {
	this.color = color;
	this.x = x;
	this.y = y;
	this.width = 32;
	this.height = 32;
	this.velocity_x = 0;
	this.velocity_y = 0;

	this.moveY = function(speed) {
		this.velocity_y += speed;
	}
	this.moveX = function(speed) {
		this.velocity_x += speed;
	}

	this.update = function(mod) {
		this.x += (this.velocity_x);
		this.y += (this.velocity_y);

		this.velocity_x /= Math.pow(2,1/mod);
		this.velocity_y /= Math.pow(2,1/mod);
	}

}
