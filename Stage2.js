class Stage2 extends Phaser.Scene {
    constructor() {
        super({ key: "Stage2" });
    }

    init(data) {
        this.playerpos = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("map2", "assets/Stage2.tmj");
        this.load.image("shadow0", "assets/shadow0.png");
        this.load.image("shadow", "assets/shadow.png");
        this.load.image("shadow2", "assets/shadow2.png");
        this.load.image("shadow3", "assets/shadow3.png");
        this.load.image("FF", "assets/Focusfull.png");
        this.load.image("F2", "assets/Focus2.png");
        this.load.image("F3", "assets/Focus3.png");
        this.load.image("F4", "assets/Focus4.png");
        this.load.image("F5", "assets/Focus5.png");
    }

    create() {

        console.log("Stage2")

        //Step3
        let map = this.make.tilemap({ key: "map2" });

        // Step 4 Load the game tileset
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let BlueeTiles = map.addTilesetImage("Blue2", "Bluee");
        let BaseTiles = map.addTilesetImage("BaseTiles", "Base");
        let DarkTiles = map.addTilesetImage("Dark_lvl0", "Dark");
        let Dark1Tiles = map.addTilesetImage("Dark_lvl0.2", "Dark1");

        //this.layer = map.createLayer(0, BaseTiles, 0, 0).setPipeline('Light2D');


        let tilesArray = [
            BlueeTiles,
            BaseTiles,
            DarkTiles,
            Dark1Tiles
        ];


        // Step 6  Load in layers by layers
        this.BackgroundLayer = map.createLayer("Background", tilesArray, 0, 0);
        this.DecalsLayer = map.createLayer("Decals", tilesArray, 0, 0);
        this.ObstaclesLayer = map.createLayer("Obstacles", tilesArray, 0, 0);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.player = this.physics.add.sprite(this.playerpos.x, this.playerpos.y, 'MC').setScale(0.15);

        this.player.body.setSize(this.player.width, this.player.height, true);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);

        window.player = this.player

        this.timedEvent = this.time.delayedCall(4000, this.onEvent, [], this);
        this.timedEvent = this.time.delayedCall(8000, this.onEvent2, [], this);
        this.timedEvent = this.time.delayedCall(12000, this.onEvent3, [], this);


        // this.shadow0 = this.add.image(-1000, -1000, 'shadow0');
        this.shadow = this.add.image(0,0, 'shadow').setScale(7);
        // this.shadow2 = this.add.image(-1000, -1000, 'shadow2');
        // this.shadow3 = this.add.image(-1000, -1000, 'shadow3');

        window.shadow0 = this.shadow0
        window.shadow = this.shadow
        window.shadow2 = this.shadow2
        window.shadow3 = this.shadow3



        //////////////////////////////////////Collisions////////////////////////////////////////

        this.ObstaclesLayer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.ObstaclesLayer, this.player);

        this.Focus5 = this.add.image(640, 40, 'F5').setScrollFactor(0).setScale(0.7);
        this.Focus4 = this.add.image(640, 40, 'F4').setScrollFactor(0).setScale(0.7);
        this.Focus3 = this.add.image(640, 40, 'F3').setScrollFactor(0).setScale(0.7);
        this.Focus2 = this.add.image(640, 40, 'F2').setScrollFactor(0).setScale(0.7);
        this.FocusF = this.add.image(640, 40, 'FF').setScrollFactor(0).setScale(0.7);

        // this.lights.enable();
        // this.lights.setAmbientColor(0x808080);

        // this.light = this.lights.addLight(0, 0, 200);

    }

    update() {
    
        if (window.light === 0) {
            Phaser.Display.Bounds.SetCenterX(this.shadow, this.player.body.center.x);
            Phaser.Display.Bounds.SetCenterY(this.shadow, this.player.body.center.y);

        } //else if (window.light === 2) {
        //     Phaser.Display.Bounds.SetCenterX(this.shadow3, this.player.body.center.x);
        //     Phaser.Display.Bounds.SetCenterY(this.shadow3, this.player.body.center.y);

        // } else if (window.light === 1) {
        //     Phaser.Display.Bounds.SetCenterX(this.shadow2, this.player.body.center.x);
        //     Phaser.Display.Bounds.SetCenterY(this.shadow2, this.player.body.center.y);

        // } else if (window.light === 0) {
        //     Phaser.Display.Bounds.SetCenterX(this.shadow, this.player.body.center.x);
        //     Phaser.Display.Bounds.SetCenterY(this.shadow, this.player.body.center.y);
        // }

        player.body.offset.x = 250;
        player.body.offset.y = 120;
        player.body.width = 60;
        player.body.height = 120;

        if (this.player.x > 3685 && this.player.x < 3747 && this.player.y < 584 && this.player.y > 582) {
            console.log("Jump to stage3");
            let playerPos = {};
            playerPos.x = 68;
            playerPos.y = 3718;
            this.scene.start("Stage3", { player: playerPos });
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
            this.player.body.setVelocityY(-240);
            //this.player.anims.play('front', true);    
        }

        if (window.focus === 5) {
            this.FocusF.setVisible(true);
            this.Focus2.setVisible(true);
            this.Focus3.setVisible(true);
            this.Focus4.setVisible(true);
            this.Focus5.setVisible(true);

        } else if (window.focus === 4) {
            this.FocusF.setVisible(false);
            this.Focus2.setVisible(true);
            this.Focus3.setVisible(true);
            this.Focus4.setVisible(true);
            this.Focus5.setVisible(true);

        } else if (window.focus === 3) {
            this.FocusF.setVisible(false);
            this.Focus2.setVisible(false);
            this.Focus3.setVisible(true);
            this.Focus4.setVisible(true);
            this.Focus5.setVisible(true);

        } else if (window.focus === 2) {
            this.FocusF.setVisible(false);
            this.Focus2.setVisible(false);
            this.Focus3.setVisible(false);
            this.Focus4.setVisible(true);
            this.Focus5.setVisible(true);

        } else if (window.focus === 1) {
            this.FocusF.setVisible(false);
            this.Focus2.setVisible(false);
            this.Focus3.setVisible(false);
            this.Focus4.setVisible(false);
            this.Focus5.setVisible(true);
        }

         // this.light.x = this.player.x;
        // this.light.y = this.player.y;

        // this.lights.lights.forEach(function (currLight)
        // {
        //     if (this.light !== currLight)
        //     {
        //         currLight.x = 400 + Math.sin;
        //     }
        // }, this);

    }

    onEvent ()
    {
        this.shadow.setScale(5);
    }

    onEvent2 ()
    {
        this.shadow.setScale(3);
    }

    onEvent3 ()
    {
        this.shadow.setScale(1);
    }


}