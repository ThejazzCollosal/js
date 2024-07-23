class Stage1 extends Phaser.Scene {
    constructor() {
        super({ key: "Stage1" });
    }

    init(data) {
        this.playerpos = data.player
        this.inventory = data.inventory
    }

    preload() {

        //Step1
        this.load.tilemapTiledJSON("world", "assets/Stage1.tmj");
        this.load.image("NewBG", "assets/NewEnvi.jpg");
        this.load.image("NewBG2", "assets/NewEnvi2.jpg");
        this.load.image("RF", "assets/RelaxFull.png");
        this.load.image("R2", "assets/Relax2.png");
        this.load.image("R3", "assets/Relax3.png");
        this.load.image("R4", "assets/Relax4.png");
        this.load.image("R5", "assets/Relax5.png");
        this.load.image("R7", "assets/Relax7.png");
        this.load.image("R8", "assets/Relax8.png");
        this.load.image("L3", "assets/3lives.png");
        this.load.image("L2", "assets/2lives.png");
        this.load.image("L1", "assets/1lives.png");
        this.load.image("heart", "assets/lives.png");
    }

    create() {

        console.log("Stage1")

        //Step3
        let map = this.make.tilemap({ key: "world" });

        // Step 4 Load the game tileset
        // 1st parameter is name in Tiled,
        // 2nd parameter is key in Preload
        let BaseTiles = map.addTilesetImage("BaseTiles", "Base");
        let Dark4Tiles = map.addTilesetImage("Dark_lvl4", "Dark4");

        let tilesArray = [
            BaseTiles,
            Dark4Tiles,
        ];

        this.add.image(960, 320, "NewBG").setScale(1);
        this.add.image(960, 960, "NewBG2").setScale(1);
        this.add.image(2880, 320, "NewBG").setScale(1);
        this.add.image(2880, 960, "NewBG2").setScale(1);

        // Step 6  Load in layers by layers
        this.solidsLayer = map.createLayer("solids", tilesArray, 0, 0);
        this.BackgroundLayer = map.createLayer("Background", tilesArray, 0, 0);
        this.DecoLayer = map.createLayer("Deco", tilesArray, 0, 0);

        this.cursors = this.input.keyboard.createCursorKeys();

        this.chaotic = this.physics.add.sprite(1585, 580, "CN").play('Spins').setScale(0.2);
        this.chaotic2 = this.physics.add.sprite(877, 580, "CN").play('Spins').setScale(0.2);
        this.chaotic3 = this.physics.add.sprite(1640, 260, "CN").play('Spins').setScale(0.2);
        this.chaotic4 = this.physics.add.sprite(2164, 394, "CN").play('Spins').setScale(0.2);
        this.chaotic5 = this.physics.add.sprite(2744, 709, "CN").play('Spins').setScale(0.2);
        this.chaotic6 = this.physics.add.sprite(2608, 394, "CN").play('Spins').setScale(0.2);
        this.chaotic7 = this.physics.add.sprite(3428, 260, "CN").play('Spins').setScale(0.2);

        if (window.CR == 1) {
            this.chaoticR = this.add.sprite(1585, 590, "CNS").play('SpinsR').setScale(0.2).setVisible(false);
        }
        if (window.CR2 == 1) {
            this.chaotic2R = this.add.sprite(877, 590, "CNS").play('SpinsR').setScale(0.2).setVisible(false);
        }
        if (window.CR3 == 1) {
            this.chaotic3R = this.add.sprite(1640, 270, "CNS").play('SpinsR').setScale(0.2).setVisible(false);
        }
        if (window.CR4 == 1) {
            this.chaotic4R = this.add.sprite(2164, 399, "CNS").play('SpinsR').setScale(0.2).setVisible(false);
        }
        if (window.CR5 == 1) {
            this.chaotic5R = this.add.sprite(2744, 719, "CNS").play('SpinsR').setScale(0.2).setVisible(false);
        }
        if (window.CR6 == 1) {
            this.chaotic6R = this.add.sprite(2608, 399, "CNS").play('SpinsR').setScale(0.2).setVisible(false);
        }
        if (window.CR7 == 1) {
            this.chaotic7R = this.add.sprite(3428, 270, "CNS").play('SpinsR').setScale(0.2).setVisible(false);
        }

        


        if (window.marker == 0) {
            this.EM1 = this.physics.add.sprite(1965, 709, "EM").play('bounce').setScale(0.3);
        }

        this.player = this.physics.add.sprite(this.playerpos.x, this.playerpos.y, 'MC').setScale(0.15).play('MC-left');
        this.player.body.setSize(this.player.width, this.player.height, true);
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
        this.cameras.main.startFollow(this.player);

        window.player = this.player

        //////////////////////////////////////Collisions////////////////////////////////////////

        this.BackgroundLayer.setCollisionByExclusion(-1, true);
        this.physics.add.collider(this.BackgroundLayer, this.player);
        this.physics.add.collider(this.BackgroundLayer, this.chaotic);
        this.physics.add.collider(this.BackgroundLayer, this.chaotic2);
        this.physics.add.collider(this.BackgroundLayer, this.chaotic3);
        this.physics.add.collider(this.BackgroundLayer, this.chaotic4);
        this.physics.add.collider(this.BackgroundLayer, this.chaotic5);
        this.physics.add.collider(this.BackgroundLayer, this.chaotic6);
        this.physics.add.collider(this.BackgroundLayer, this.chaotic7);
        this.physics.add.collider(this.BackgroundLayer, this.EM1);

        var space = this.input.keyboard.addKey("SPACE");

        space.on(
            "down", function () {
                CC.active = false;
                CC2.active = false;
                CC3.active = false;
                CC4.active = false;
                CC5.active = false;
                CC6.active = false;
                CC7.active = false;

                this.chaoticR.setVisible(true)
                this.chaotic2R.setVisible(true)
                this.chaotic3R.setVisible(true)
                this.chaotic4R.setVisible(true)
                this.chaotic5R.setVisible(true)
                this.chaotic6R.setVisible(true)
                this.chaotic7R.setVisible(true)

                this.time.delayedCall(3000, () => {
                    CC.active = true;
                    CC2.active = true;
                    CC3.active = true;
                    CC4.active = true;
                    CC5.active = true;
                    CC6.active = true;
                    CC7.active = true;

                this.chaoticR.setVisible(false)
                this.chaotic2R.setVisible(false)
                this.chaotic3R.setVisible(false)
                this.chaotic4R.setVisible(false)
                this.chaotic5R.setVisible(false)
                this.chaotic6R.setVisible(false)
                this.chaotic7R.setVisible(false)
                });
                window.relax--
            },
            this
        );


        let CC = this.physics.add.overlap(
            this.player, // player
            this.chaotic,  // enemy
            this.overlapChaotic,    // function to call 
            null,
            this
        );

        let CC2 = this.physics.add.overlap(
            this.player, // player
            this.chaotic2,  // enemy
            this.overlapChaotic2,    // function to call 
            null,
            this
        );

        let CC3 = this.physics.add.overlap(
            this.player, // player
            this.chaotic3,  // enemy
            this.overlapChaotic3,    // function to call 
            null,
            this
        );

        let CC4 = this.physics.add.overlap(
            this.player, // player
            this.chaotic4,  // enemy
            this.overlapChaotic4,    // function to call 
            null,
            this
        );

        let CC5 = this.physics.add.overlap(
            this.player, // player
            this.chaotic5,  // enemy
            this.overlapChaotic5,    // function to call 
            null,
            this
        );

        let CC6 = this.physics.add.overlap(
            this.player, // player
            this.chaotic6,  // enemy
            this.overlapChaotic6,    // function to call 
            null,
            this
        );

        let CC7 = this.physics.add.overlap(
            this.player, // player
            this.chaotic7,  // enemy
            this.overlapChaotic7,    // function to call 
            null,
            this
        );

        this.physics.add.overlap(
            this.player, // player
            this.EM1,  // enemy
            this.collectMarker,
            null,
            this
        );

        //this.player.setCollideWorldBounds(true);

        this.Relax8 = this.add.image(640, 60, 'R8').setScrollFactor(0).setScale(0.7);
        this.Relax7 = this.add.image(640, 60, 'R7').setScrollFactor(0).setScale(0.7);
        this.Relax5 = this.add.image(640, 60, 'R5').setScrollFactor(0).setScale(0.7);
        this.Relax4 = this.add.image(640, 60, 'R4').setScrollFactor(0).setScale(0.7);
        this.Relax3 = this.add.image(640, 60, 'R3').setScrollFactor(0).setScale(0.7);
        this.Relax2 = this.add.image(640, 60, 'R2').setScrollFactor(0).setScale(0.7);
        this.RelaxF = this.add.image(640, 60, 'RF').setScrollFactor(0).setScale(0.7);

        this.heart1 = this.add.image(70, 70, 'heart').setScrollFactor(0).setScale(0.4);
        this.heart2 = this.add.image(145, 70, 'heart').setScrollFactor(0).setScale(0.4);
        this.heart3 = this.add.image(220, 70, 'heart').setScrollFactor(0).setScale(0.4);

    }

    update() {

        player.body.offset.x = 250;
        player.body.offset.y = 120;
        player.body.width = 60;
        player.body.height = 120;

        if (this.player.x > 3699 && this.player.x < 3739 && this.player.y < 265 && this.player.y > 262) {
            console.log("Jump to stage2");
            let playerPos = {};
            playerPos.x = 65;
            playerPos.y = 327;
            this.scene.start("Stage2", { player: playerPos });
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

        if (window.relax === 7) {
            this.RelaxF.setVisible(true);
            this.Relax2.setVisible(false);
            this.Relax3.setVisible(false);
            this.Relax4.setVisible(false);
            this.Relax5.setVisible(false);
            this.Relax7.setVisible(false);
            this.Relax8.setVisible(false);

        } else if (window.relax === 6) {
            this.RelaxF.setVisible(false);
            this.Relax2.setVisible(true);
            this.Relax3.setVisible(false);
            this.Relax4.setVisible(false);
            this.Relax5.setVisible(false);
            this.Relax7.setVisible(false);
            this.Relax8.setVisible(false);

        } else if (window.relax === 5) {
            this.RelaxF.setVisible(false);
            this.Relax2.setVisible(false);
            this.Relax3.setVisible(true);
            this.Relax4.setVisible(false);
            this.Relax5.setVisible(false);
            this.Relax7.setVisible(false);
            this.Relax8.setVisible(false);

        } else if (window.relax === 4) {
            this.RelaxF.setVisible(false);
            this.Relax2.setVisible(false);
            this.Relax3.setVisible(false);
            this.Relax4.setVisible(true);
            this.Relax5.setVisible(false);
            this.Relax7.setVisible(false);
            this.Relax8.setVisible(false);

        } else if (window.relax === 3) {
            this.RelaxF.setVisible(false);
            this.Relax2.setVisible(false);
            this.Relax3.setVisible(false);
            this.Relax4.setVisible(false);
            this.Relax5.setVisible(true);
            this.Relax7.setVisible(false);
            this.Relax8.setVisible(false);

        } else if (window.relax === 2) {
            this.RelaxF.setVisible(false);
            this.Relax2.setVisible(false);
            this.Relax3.setVisible(false);
            this.Relax4.setVisible(false);
            this.Relax5.setVisible(false);
            this.Relax7.setVisible(true);
            this.Relax8.setVisible(false);

        } else if (window.relax === 1) {
            this.RelaxF.setVisible(false);
            this.Relax2.setVisible(false);
            this.Relax3.setVisible(false);
            this.Relax4.setVisible(false);
            this.Relax5.setVisible(false);
            this.Relax7.setVisible(false);
            this.Relax8.setVisible(true);

        }else if (window.relax <= 0) {
            this.RelaxF.setVisible(false);
            this.Relax2.setVisible(false);
            this.Relax3.setVisible(false);
            this.Relax4.setVisible(false);
            this.Relax5.setVisible(false);
            this.Relax7.setVisible(false);
            this.Relax8.setVisible(true);
            this.chaoticR.setVisible(false);
            this.chaotic2R.setVisible(false);
            this.chaotic3R.setVisible(false);
            this.chaotic4R.setVisible(false);
            this.chaotic5R.setVisible(false);
            this.chaotic6R.setVisible(false);
            this.chaotic7R.setVisible(false);
        
        }

        if (window.lives === 3) {
            this.heart1.setVisible(true);
            this.heart2.setVisible(true);
            this.heart3.setVisible(true);

        } else if (window.lives === 2) {
            this.heart1.setVisible(true);
            this.heart2.setVisible(true);
            this.heart3.setVisible(false);

        } else if (window.lives === 1) {
            this.heart1.setVisible(true);
            this.heart2.setVisible(false);
            this.heart3.setVisible(false);

        } else if (window.lives === 0) {
            this.heart1.setVisible(false);
            this.heart2.setVisible(false);
            this.heart3.setVisible(false);
        }
    }

    overlapChaotic(player, enemy) {

        enemy.disableBody(true, true);
        this.cameras.main.shake(100);
        this.chaoticR.setVisible(false)
        window.lives--
        window.CR--


    }
    overlapChaotic2(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.cameras.main.shake(100);
        this.chaotic2R.setVisible(false)
        window.lives--
        window.CR2--

    }
    overlapChaotic3(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.cameras.main.shake(100);
        window.lives--
        window.CR3--

    }
    overlapChaotic4(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.cameras.main.shake(100);
        window.lives--
        window.CR4--

    }
    overlapChaotic5(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.cameras.main.shake(100);
        window.lives--
        window.CR5--

    }
    overlapChaotic6(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.cameras.main.shake(100);
        window.lives--
        window.CR6--

    }
    overlapChaotic7(player, enemy) {

        // disable enemy after overlap
        enemy.disableBody(true, true);
        this.cameras.main.shake(100);
        window.lives--
        window.CR7--

    }

    collectMarker(player, EM1) {

        EM1.disableBody(true, true);
        this.scene.start("CutsceneS1")
        window.marker++

    }
    
}



