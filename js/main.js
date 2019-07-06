window.addEventListener("load", function() {

	const display = new Display(document.querySelector("#canvas"),1280,720)
	const controller = new KeyboardController("w","a","s","d")
	const player = new Player("white")

	const update = function() {
		if (controller.up || controller.down || controller.right || controller.left) {
			player.move(10,engine.time_delta,Math.atan2(controller.down - controller.up,controller.right - controller.left))
		}
	}
	
	const render = function() {
		display.fill("rgba(0,0,0,0.85)");
		display.drawRectangle(player.x,player.y,player.width,player.height,player.color);
		display.render();
	}
	const engine = new Engine(60,update,render);
	engine.start()

	window.addEventListener("keydown", controller.updateKeys)
	window.addEventListener("keyup", controller.updateKeys)
});

