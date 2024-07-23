var config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    physics:{
        default: 'arcade',
        arcade: {
            gravity: { y: 200 },
            debug: false
        }
    },
    
    backgroundColor: '#000000',
    scene: [preloadScene,Home,Stage1,CutsceneS1,Stage2,Stage3]  
};

window.light =0;
window.focus= 5;
window.relax= 7;
window.stress=5;
window.lives=3;
window.marker=0;
window.CR=1;
window.CR2=1;
window.CR3=1;
window.CR4=1;
window.CR5=1;
window.CR6=1;
window.CR7=1;



let game = new Phaser.Game(config);