window.addEventListener("load", function() {

	const controller = new KeyboardController("w","a","s","d")
	const player = new Player("white")
	const world = new World();
	const display = new Display(document.querySelector("#canvas"),world.level[0].length * world.tile_size,world.level.length * world.tile_size)

	const resize = function() {
		display.resize(window.innerWidth,window.innerHeight,1,1);
	}

	const update = function() {
		if (controller.up || controller.down || controller.right || controller.left) {
			player.move(4,engine.time_delta,Math.atan2(controller.down - controller.up,controller.right - controller.left))
		}
	}
	
	const render = function() {
		display.drawMap(world.level,world.mapKey,world.tile_size);
		display.drawRectangle(player.x,player.y,player.width,player.height,player.color);
		display.render();
	}
	const engine = new Engine(60,update,render);
	resize();
	engine.start();


	window.addEventListener("keydown", controller.updateKeys)
	window.addEventListener("keyup", controller.updateKeys)
	window.addEventListener("resize", resize)
});

