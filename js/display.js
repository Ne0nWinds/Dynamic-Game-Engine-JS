const Display = function(canvas,width,height) {

	this.context = canvas.getContext("2d")
	this.buffer = document.createElement("canvas").getContext("2d")
	this.buffer.canvas.width = this.context.canvas.width = width;
	this.buffer.canvas.height = this.context.canvas.height = height;

	this.fill = function(color) {

        this.buffer.fillStyle = color;
        this.buffer.fillRect(0,0,this.buffer.canvas.width,this.buffer.canvas.height);

    };

	this.drawMap = function(map,mapKey,tile_size) {
		let height = map.length;
		let width = map[0].length;
		let x, y;
		
		for (y = 0; y < height; y++) {
			for (x = 0; x < width; x++) {
				this.drawRectangle(x*tile_size,y*tile_size,tile_size,tile_size,mapKey[map[y][x]])
			}
		}

	}

    this.drawRectangle = function(x,y,w,h,color) {

        this.buffer.fillStyle = color;
        this.buffer.fillRect(Math.round(x),Math.round(y),w,h);

    };

	this.render = function() {
		this.context.drawImage(this.buffer.canvas,0,0,this.context.canvas.width,this.context.canvas.height);
	}

	this.resize = function(w,h,w_ratio,h_ratio) {
		if (h/w > h_ratio/w_ratio) {
			console.log(w)
			w -= w % (w_ratio * h_ratio)
			console.log(w)
			this.context.canvas.width = w;
			this.context.canvas.height = w * (h_ratio/w_ratio)
		} else {
			h -= h % (w_ratio * h_ratio)
			this.context.canvas.height = h;
			this.context.canvas.width = h * (w_ratio/h_ratio)
		}

		this.context.imageSmoothingEnabled = false;
	}

}
