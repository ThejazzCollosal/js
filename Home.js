class Home extends Phaser.Scene {
  constructor() {
    super({
      key: "Home",
    });

  }

  // Put global variable here

  preload() {

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("Homepage", "assets/Title screen Pre.jpg");


  }

  create() {
    console.log("*** intro scene");

    const image = this.add.image(640, 360, 'Homepage').setScale(0.66);
    var enter = this.input.keyboard.addKey("ENTER");

    // On spacebar event, call the world scene
    enter.on(
      "down", function () {
        console.log("Jump to intro scene");
        let playerPos = {};
        playerPos.x = 125;
            playerPos.y = 1159;
            this.scene.start("Stage1", { player: playerPos });
      },
      this
    );
  }
}