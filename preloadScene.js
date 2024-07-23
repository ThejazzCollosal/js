class preloadScene extends Phaser.Scene {
  

    constructor() {
        super({ key: 'preloadScene' });
    }
    
    preload() {
        this.load.spritesheet('MC', 'assets/PlayerMain2.png', { frameWidth: 1080, frameHeight: 1080 });
        this.load.spritesheet('CN', 'assets/Chaotic.png', { frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('CNS', 'assets/ChaoticS.png', { frameWidth: 500, frameHeight: 500 });
        this.load.spritesheet('EM', 'assets/Eventmarker.png', { frameWidth: 300, frameHeight: 300 });


        this.load.image("Base", "assets/BaseTiles.png");
        this.load.image("Bluee", "assets/Blue2.png");
        this.load.image("Blueee", "assets/Blue3.png");
        this.load.image("Blueeeee", "assets/Blue5.png");
        this.load.image("Dark", "assets/Dark_lvl0.png");
        this.load.image("Dark1", "assets/Dark_lvl0.2.png");
        this.load.image("Dark4", "assets/Dark_lvl4.png");
        this.load.image("NewBG", "assets/NewEnvi.jpg");
        this.load.image("NewBG2", "assets/NewEnvi2.jpg");

    }
    create() {

        this.anims.create({
            key: 'MC-right',
            frames: this.anims.generateFrameNumbers('MC',
                { start: 9, end: 17}),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
          key: 'MC-left',
          frames: this.anims.generateFrameNumbers('MC',
              { start: 18, end: 26}),
          frameRate: 10,
          repeat: -1
      });

      this.anims.create({
        key: 'idle',
        frames: [{
            key: 'Player',
            frame: 0
        }],
        frameRate: 20,
        repeat: false
    });

    this.anims.create({
        key: 'bounce',
        frames: this.anims.generateFrameNumbers('EM',
            { start: 0, end: 9}),
        frameRate: 9,
        repeat: -1
    });

    this.anims.create({
        key: 'Spins',
        frames: this.anims.generateFrameNumbers('CN',
            { start: 0, end: 78}),
        frameRate: 60,
        repeat: -1
    });

    this.anims.create({
        key: 'SpinsR',
        frames: this.anims.generateFrameNumbers('CNS',
            { start: 0, end: 78}),
        frameRate: 60,
        repeat: -1
    });
    
        var spaceDown = this.input.keyboard.addKey("SPACE");
  
      // On spacebar event, call the world scene
  
      spaceDown.on(
        "down", function () {
          this.scene.start("Home", {});
        },
        this
      );
    }
}