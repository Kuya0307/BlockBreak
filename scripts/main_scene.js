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
        this.load.image('block1', 'assets/block1.png');//通常ブロック
        this.load.image('block2', 'assets/block2.png');//お邪魔ブロック
        this.load.image('block3', 'assets/block3.png');//特殊ブロック
    }

    create()
    {
        this.add.image(300, 400, 'background');
        this.add.image(100, 100, 'ball');
        this.bar=this.add.image(600, 350, 'bar');
        //上段
        this.add.image(50, 30, 'block1');
        this.add.image(150, 30, 'block2');
        this.add.image(250, 30, 'block2');
        this.add.image(350, 30, 'block1');
        this.add.image(450, 30, 'block3');
        this.add.image(550, 30, 'block1');
        this.add.image(650, 30, 'block1');
        this.add.image(750, 30, 'block1');
        this.add.image(850, 30, 'block1');
        this.add.image(950, 30, 'block1');
        this.add.image(1050, 30, 'block1');
        this.add.image(1150, 30, 'block1');
        this.add.image(1250, 30, 'block1');

        //中段
        this.add.image(0, 87, 'block1');
        this.add.image(100, 87, 'block1');
        this.add.image(200, 87, 'block1');
        this.add.image(300, 87, 'block1');
        this.add.image(400, 87, 'block1');
        this.add.image(500, 87, 'block1');
        this.add.image(600, 87, 'block3');
        this.add.image(700, 87, 'block1');
        this.add.image(800, 87, 'block1');
        this.add.image(900, 87, 'block2');
        this.add.image(1000, 87, 'block1');
        this.add.image(1100, 87, 'block2');
        this.add.image(1200, 87, 'block1');
        this.add.image(1300, 87, 'block1');

        //下段
        this.add.image(50,144, 'block1');
        this.add.image(150, 144, 'block1');
        this.add.image(250, 144, 'block1');
        this.add.image(350, 144, 'block1');
        this.add.image(450, 144, 'block1');
        this.add.image(550, 144, 'block1');
        this.add.image(650, 144, 'block1');
        this.add.image(750, 144, 'block1');
        this.add.image(850, 144, 'block3');
        this.add.image(950, 144, 'block1');
        this.add.image(1050, 144, 'block2');
        this.add.image(1150, 144, 'block1');
        this.add.image(1250, 144, 'block1');


    }

    // 毎フレーム実行される繰り返し処理

    update() {
        // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.left.isDown) 
        {
        //console.log("Left!");
            this.bar.x -= 6;// 左方向に移動
        } else if (cursors.right.isDown) {
        //console.log("Right!");
            this.bar.x += 6;// 右方向に移動
         }
     }
}