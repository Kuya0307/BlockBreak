// #4
class MainScene extends Phaser.Scene {

	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('background', 'assets/back.png');
        this.load.image('bar', 'assets/bar.png');
        this.load.image('ball', 'assets/ball.png');
    }

    create()
    {
        this.add.image(300, 400, 'background');
        this.add.image(100, 100, 'ball');
        this.add.image(100, 100, 'bar');
       
    }
}