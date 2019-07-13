const World = function() {
	this.mapKey = {
		"0": "rgba(0,0,0,0.99)",
		"1": "white",
	}

	this.player = new Player("red")
	this.map = []
	this.tile_size = 16;
	this.generateMap = function (SizeX,SizeY) {
		let i, j;
		for (i = 0; i < SizeY; i++) {
			this.map.push([])
			for (j = 0; j < SizeX; j++) {
				this.map[i].push(i%2 * j%2)
			}
		}
	}
	this.collideTile = function(object) {
        for (let y = 0; y < 2; y++) {
            for (let x = 0; x < 2; x++) {
                current_x = Math.floor((object.x + x * object.width) / this.tile_size)
                current_y = Math.floor((object.y + y * object.height)  / this.tile_size)
                old_x = Math.floor((object.old_x + x * object.width) / this.tile_size)
                old_y = Math.floor((object.old_y + y * object.height)  / this.tile_size)

				if (this.map[current_y][old_x] == 1) {
					if (object.velocity_y > 0) {
						object.y = current_y * this.tile_size - object.height - 0.01;
					} else if (object.velocity_y < 0) {
						object.y = current_y * this.tile_size + this.tile_size + 0.1;
					}
				}


				if (this.map[old_y][current_x] == 1) {
					if (object.velocity_x > 0) {
						object.x = current_x * this.tile_size - object.width - 0.1;
					} else if (object.velocity_x < 0) {
						object.x = current_x * this.tile_size + this.tile_size + 0.1;
					}   
				}

			}
		}
	}

	this.update = function() {
		this.collideTile(this.player)
		this.player.velocity_y = 0;
		this.player.velocity_x = 0;
	}
}

const Player = function(color,x=64,y=64) {
	this.color = color;
	this.x = x;
	this.y = y;
	this.old_x = x;
	this.old_y = y;
	this.width = 10;
	this.height = 10;
	this.velocity_x = 0;
	this.velocity_y = 0;

	this.move = function(speed, mod, angle) {
		this.velocity_x = Math.cos(angle);
		this.velocity_y = Math.sin(angle);
		this.old_x = this.x;
		this.old_y = this.y;
		this.x += this.velocity_x * speed * 1/mod;
		this.y += this.velocity_y * speed * 1/mod;
	}

}
