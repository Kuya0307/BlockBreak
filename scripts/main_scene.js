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
        //ballの画像を物理演算を持った画像にする
        const ball = this.physics.add.sprite(600, 288, 'ball');
        //MainSceneクラスのプロパティをballを設定
        this.ball = ball;
        let staticGroup = this.physics.add.staticGroup();
        this.bar=this.add.image(600, 350, 'bar');
        this.physics.add.overlap(ball, staticGroup, collectCoin, null, this);
        function collectCoin(p,block1){
            block1.destroy();// 星を消す
        }
        //上段
        staticGroup.create(50, 30, 'block1');
        staticGroup.create(150, 30, 'block2');
        staticGroup.create(250, 30, 'block2');
        staticGroup.create(350, 30, 'block1');
        staticGroup.create(450, 30, 'block3');
        staticGroup.create(550, 30, 'block1');
        staticGroup.create(650, 30, 'block1');
        staticGroup.create(750, 30, 'block1');
        staticGroup.create(850, 30, 'block1');
        staticGroup.create(950, 30, 'block1');
        staticGroup.create(1050, 30, 'block1');
        staticGroup.create(1150, 30, 'block1');
        staticGroup.create(1250, 30, 'block1');
        //中段
        staticGroup.create(0, 87, 'block1');
        staticGroup.create(100, 87, 'block1');
        staticGroup.create(200, 87, 'block1');
        staticGroup.create(300, 87, 'block1');
        staticGroup.create(400, 87, 'block1');
        staticGroup.create(500, 87, 'block1');
        staticGroup.create(600, 87, 'block3');
        staticGroup.create(700, 87, 'block1');
        staticGroup.create(800, 87, 'block1');
        staticGroup.create(900, 87, 'block2');
        staticGroup.create(1000, 87, 'block1');
        staticGroup.create(1100, 87, 'block2');
        staticGroup.create(1200, 87, 'block1');
        staticGroup.create(1300, 87, 'block1');
        //下段
        staticGroup.create(50,144, 'block1');
        staticGroup.create(150, 144, 'block1');
        staticGroup.create(250, 144, 'block1');
        staticGroup.create(350, 144, 'block1');
        staticGroup.create(450, 144, 'block1');
        staticGroup.create(550, 144, 'block1');
        staticGroup.create(650, 144, 'block1');
        staticGroup.create(750, 144, 'block1');
        staticGroup.create(850, 144, 'block3');
        staticGroup.create(950, 144, 'block1');
        staticGroup.create(1050, 144, 'block2');
        staticGroup.create(1150, 144, 'block1');
        staticGroup.create(1250, 144, 'block1');
        ball.body.velocity.set(600, 288);
        ball.body.collideWorldBounds = true;
        ball.body.bounce.set(1);
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
