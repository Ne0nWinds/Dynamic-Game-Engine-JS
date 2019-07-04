window.addEventListener("load", function() {

	const display = new Display(document.querySelector("#canvas"),800,600)
	const controller = new KeyboardController("w","a","s","d")
	const player = new Player("white")

	const update = function() {
		if (controller.left) {
			player.moveX(-5 / engine.time_delta);
		} else if (controller.right) {
			player.moveX(5 / engine.time_delta);
		}
		player.update(engine.time_delta);
		console.log(engine.time_delta);
	}
	const render = function() {
		display.fill("black");
		display.drawRectangle(player.x,player.y,player.width,player.height,player.color);
		display.render();
	}
	const engine = new Engine(60,update,render);
	engine.start()

	window.addEventListener("keydown", controller.updateKeys)
	window.addEventListener("keyup", controller.updateKeys)
});

