// #4
class MainScene extends Phaser.Scene {

	constructor()
	{
		super('hello-world')
	}

	preload()
    {
        this.load.image('block1', 'assets/block1.png');
        this.load.image('block2', 'assets/block2.png');
        this.load.image('block3', 'assets/block3.png');
    }

    create()
    {
        this.add.image(50, 30, 'block1');
        this.add.image(150, 30, 'block1');
        this.add.image(250, 30, 'block1');
        this.add.image(350, 30, 'block1');
        this.add.image(450, 30, 'block1');
        this.add.image(550, 30, 'block1');
        this.add.image(650, 30, 'block1');
        this.add.image(750, 30, 'block1');

        this.add.image(0, 87, 'block2');
        this.add.image(100, 87, 'block2');
        this.add.image(200, 87, 'block2');
        this.add.image(300, 87, 'block2');
        this.add.image(400, 87, 'block2');
        this.add.image(500, 87, 'block2');
        this.add.image(600, 87, 'block2');
        this.add.image(700, 87, 'block2');
        this.add.image(800, 87, 'block2');
    }
}