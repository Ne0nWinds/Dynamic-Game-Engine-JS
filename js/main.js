window.addEventListener("load", function() {

	const controller = new KeyboardController("w","a","s","d")
	const world = new World();
	world.generateMap(25,25);
	const display = new Display(document.querySelector("#canvas"),world.map[0].length * world.tile_size,world.map.length * world.tile_size)

	const resize = function() {
		display.resize(window.innerWidth,window.innerHeight,1,1);
	}

	const update = function() {
		if (controller.up || controller.down || controller.right || controller.left) {
			world.player.move(1,engine.time_delta,Math.atan2(controller.down - controller.up,controller.right - controller.left))
			world.update();
		}
	}
	
	const render = function() {
		display.drawMap(world.map,world.mapKey,world.tile_size);
		display.drawRectangle(world.player.x,world.player.y,world.player.width,world.player.height,world.player.color);
		display.render();
	}
	const engine = new Engine(60,update,render);
	resize();
	engine.start();


	window.addEventListener("keydown", controller.updateKeys)
	window.addEventListener("keyup", controller.updateKeys)
	window.addEventListener("resize", resize)
});

