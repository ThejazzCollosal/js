class Stage3 extends Phaser.Scene {
    constructor() {
        super({ key: "Stage3" });
    }

    init(data) {
        this.playerpos = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("map3", "assets/Stage3.tmj");
        this.load.image("NewBG", "assets/NewEnvi.jpg");
        this.load.image("NewBG2", "assets/NewEnvi2.jpg");
        this.load.image("S0", "assets/Stress0.png");
        this.load.image("S1", "assets/Stress1.png");
        this.load.image("S2", "assets/Stress2.png");
        this.load.image("S3", "assets/stress3.png");
        this.load.image("S4", "assets/stress4.png");
        this.load.image("S5", "assets/stress5.png");


    }

    create() {

        console.log("Stage3")

        //Step3
        let map = this.make.tilemap({ key: "map3" });

        // Step 4 Load the game tileset
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let BlueeTiles = map.addTilesetImage("Blue2", "Bluee");
        let BlueeeTiles = map.addTilesetImage("Blue3", "Blueee");
        let BlueeeeeTiles = map.addTilesetImage("Blue5", "Blueeeee");
        let BaseTiles = map.addTilesetImage("BaseTiles", "Base");
        let Dark1Tiles = map.addTilesetImage("Dark_lvl0.2", "Dark1");

        let tilesArray = [
            BlueeTiles,
            BlueeeTiles,
            BlueeeeeTiles,
            BaseTiles,
            Dark1Tiles
        ];

        this.add.image(210, 1150, "NewBG").setScale(1);
        this.add.image(614, 1790, "NewBG2").setScale(1);
        this.add.image(614, 3600, "NewBG2").setScale(1);


        // Step 6  Load in layers by layers
        this.BackgroundLayer = map.createLayer("Background", tilesArray, 0, 0);
        this.DecalsLayer = map.createLayer("Decals", tilesArray, 0, 0);
        this.Decals2Layer = map.createLayer("Decals2", tilesArray, 0, 0);
        this.ObstaclesLayer = map.createLayer("Obstacles", tilesArray, 0, 0);

        this.cursors = this.input.keyboard.createCursorKeys();


        this.player = this.physics.add.sprite(this.playerpos.x, this.playerpos.y, 'MC').setScale(0.15);
        this.player.body.setSize(this.player.width, this.player.height, true);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);

        window.player = this.player

        //////////////////////////////////////Collisions////////////////////////////////////////

        this.ObstaclesLayer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.ObstaclesLayer, this.player);

        this.stress5 = this.add.image(100, 70, 'S5').setScrollFactor(0).setScale(1);
        this.stress4 = this.add.image(100, 70, 'S4').setScrollFactor(0).setScale(1);
        this.stress3 = this.add.image(100, 70, 'S3').setScrollFactor(0).setScale(1);
        this.stress2 = this.add.image(100, 70, 'S2').setScrollFactor(0).setScale(1);
        this.stress1 = this.add.image(100, 70, 'S1').setScrollFactor(0).setScale(1);
        this.stress0 = this.add.image(100, 70, 'S0').setScrollFactor(0).setScale(1);

    }

    update() {

        player.body.offset.x = 250;
        player.body.offset.y = 120;
        player.body.width = 60;
        player.body.height = 120;

        if (this.player.x > 576 && this.player.x < 768 && this.player.y < 192 && this.player.y > 0) {
            console.log("Jump to Cutscene");
            let playerPos = {};
            playerPos.x = 150;
            playerPos.y = 1130;
            this.scene.start("Stage1", { player: playerPos });
        }

        if (this.cursors.left.isDown) {
            this.player.body.setVelocityX(-300);
            this.player.anims.play('MC-left', true); // walk left
        }
        else if (this.cursors.right.isDown) {
            this.player.body.setVelocityX(300);
            this.player.anims.play('MC-right', true);

        } else {
            this.player.body.setVelocityX(0);
            this.player.anims.stop();
        }
        // jump 
        if (this.cursors.up.isDown && this.player.body.onFloor()) {
            this.player.body.setVelocityY(-300);
            //this.player.anims.play('front', true);    
        }

        if (this.cursors.up.isDown && this.cursors.down.isDown && this.player.body.onFloor()) {
            this.player.body.setVelocityY(-500);
            //this.player.anims.play('front', true);    
        }

        if (window.stress === 5) {
            this.stress0.setVisible(true);
            this.stress1.setVisible(false);
            this.stress2.setVisible(false);
            this.stress3.setVisible(false);
            this.stress4.setVisible(false);
            this.stress5.setVisible(false);
            

        } else if (window.stress === 4) {
            this.stress0.setVisible(false);
            this.stress1.setVisible(true);
            this.stress2.setVisible(false);
            this.stress3.setVisible(false);
            this.stress4.setVisible(false);
            this.stress5.setVisible(false);

        }else if (window.stress === 3) {
            this.stress0.setVisible(false);
            this.stress1.setVisible(false);
            this.stress2.setVisible(true);
            this.stress3.setVisible(false);
            this.stress4.setVisible(false);
            this.stress5.setVisible(false);

        }else if (window.stress === 2) {
            this.stress0.setVisible(false);
            this.stress1.setVisible(false);
            this.stress2.setVisible(false);
            this.stress3.setVisible(true);
            this.stress4.setVisible(false);
            this.stress5.setVisible(false);

        }else if (window.stress === 1) {
            this.stress0.setVisible(false);
            this.stress1.setVisible(false);
            this.stress2.setVisible(false);
            this.stress3.setVisible(false);
            this.stress4.setVisible(true);
            this.stress5.setVisible(false);

        }else if (window.stress === 0) {
            this.stress0.setVisible(false);
            this.stress1.setVisible(false);
            this.stress2.setVisible(false);
            this.stress3.setVisible(false);
            this.stress4.setVisible(false);
            this.stress5.setVisible(true);

        }

    }


}