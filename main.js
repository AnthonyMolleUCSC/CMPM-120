class Splash extends Phaser.Scene
{
    constructor()
    {
        super("splash");
    }

    preload()
    {

        this.load.path = './assets/art/';
        this.load.image('splash', 'splash.png');
        this.load.path = './assets/sound/';
        this.load.audio('hammerhit', 'hammer.mp3');
    }

    create()
    {
        this.splash = this.add.image
        (
            480,
            270,
            'splash',
        );

        this.splash.setScale(0.5)

        this.cameras.main.fadeIn(1500, 0, 0, 0);

        this.sound.add('hammerhit', {loop: false, volume: 0.5,}).play();

        this.time.delayedCall(3000, () => {this.cameras.main.fadeOut(1500, 0, 0, 0);});
        this.time.delayedCall(4500, () => {this.scene.start('sewer');});
    }

    update()
    {
        
    }
}

class Sewer extends Phaser.Scene
{
    constructor()
    {
        super("sewer");
    }

    preload()
    {
        this.load.path = './assets/art/';
        this.load.image('sewer', 'sewer.png');
        this.load.path = './assets/sound/';
        this.load.audio('music', 'music.mp3');
    }

    create()
    {
        this.sewer = this.add.image
        (
            960,
            270,
            'sewer',
        );

        this.sewer.setScale(0.5)

        this.cameras.main.fadeIn(1500, 0, 0, 0);

        this.sound.add('music', {loop: false, volume: 0.3,}).play();

        this.tweens.add(
            {
                targets: this.sewer,
                x: 0,
                y: 270,
                duration: 10000,
                ease: 'Linear',
            }
        )

        this.time.delayedCall(8500, () => {this.cameras.main.fadeOut(1500, 0, 0, 0);});
        this.time.delayedCall(10000, () => {this.scene.start('title');});
    }

    update()
    {
        
    }
}

class Title extends Phaser.Scene
{

    constructor()
    {
        super("title");
    }

    preload()
    {
        this.load.path = './assets/art/';
        this.load.image('title', 'title.png');
    }

    create()
    {

        this.title = this.add.image
        (
            480,
            270,
            'title',
        );


        this.title.setScale(0.5);
        this.title.setDepth(0);

        let graphics = this.add.graphics();
        graphics.fillStyle(0xffffff, 1);
        let rect = graphics.fillRect(20, 310, 300, 10);
        rect.setDepth(2)
        let rect2 = graphics.fillRect(20, 500, 150, 10);
        rect2.setDepth(2)

        this.textObject = this.add.text(
            35,
            321,
            "Start Game\nContinue\nOptions\nExit", 
            {
                font: "40px Roboto",
                color: "#ffffff",
            } //style
        );

        this.cameras.main.fadeIn(1500, 0, 0, 0);
    }

    update()
    {
        
    }
}

let config =
{
    type: Phaser.WEBGL,
    width: 960,
    height: 540,
    scene: [Splash, Sewer, Title],
};

let game = new Phaser.Game(config);