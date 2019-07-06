const Player = function(color,x=400,y=400) {
	this.color = color;
	this.x = x;
	this.y = y;
	this.width = 32;
	this.height = 32;
	this.velocity_x = 0;
	this.velocity_y = 0;

	this.move = function(speed, mod, angle) {
		this.x += Math.cos(angle) * speed * 1/mod;
		this.y += Math.sin(angle) * speed * 1/mod;
	}

	this.update = function(mod) {

	}

}
