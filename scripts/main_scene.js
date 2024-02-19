// #4
class MainScene extends Phaser.Scene {
    constructor()
    {
        super('hello-world')
        this.score=0;
        this.bar_score=0;
        this.speed = 500;
        this.dis_speed = -500;

    }
    preload()
    {
        this.load.image('background', 'assets/back.png');
        this.load.image('bar', 'assets/bar.png');
        this.load.image('bar2', 'assets/bar2.png');//
        this.load.image('bar3', 'assets/bar3.png');
        this.load.image('bar4', 'assets/bar4.png');//
        this.load.image('bar5', 'assets/bar5.png');
        this.load.image('ball', 'assets/ball.png');
        this.load.image('block1', 'assets/block1.png');//通常ブロック
        this.load.image('block2', 'assets/block2.png');//お邪魔ブロック
        this.load.image('block3', 'assets/block3.png');//特殊ブロック
    }
    create()
    {
        
        this.add.image(300, 400, 'background');
        // this.add.image(400, 400, 'bar2');
        //ballの画像を物理演算を持った画像にする
        const ball = this.physics.add.sprite(600, 288, 'ball');
        //MainSceneクラスのプロパティをballを設定
        this.ball = ball;
        let staticGroup = this.physics.add.staticGroup();
        let staticGroup2 = this.physics.add.staticGroup();
        this.staticGroup2 = staticGroup2;
        let staticGroup3 = this.physics.add.staticGroup();
        this.bar = this.physics.add.sprite(600, 450, 'bar').setImmovable();
        //上段
        staticGroup.create(50, 30, 'block1');
        staticGroup2.create(150, 30, 'block2');
        staticGroup2.create(250, 30, 'block2');
        staticGroup.create(350, 30, 'block1');
        staticGroup3.create(450, 30, 'block3');
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
        staticGroup3.create(600, 87, 'block3');
        staticGroup.create(700, 87, 'block1');
        staticGroup.create(800, 87, 'block1');
        staticGroup2.create(900, 87, 'block2');
        staticGroup.create(1000, 87, 'block1');
        staticGroup2.create(1100, 87, 'block2');
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
        staticGroup3.create(850, 144, 'block3');
        staticGroup.create(950, 144, 'block1');
        staticGroup2.create(1050, 144, 'block2');
        staticGroup.create(1150, 144, 'block1');
        staticGroup.create(1250, 144, 'block1');
        ball.body.velocity.set(600, 288);
        ball.body.collideWorldBounds = true;
        ball.body.bounce.set(1);
        this.bar.setCollideWorldBounds(true);
        this.physics.add.collider(ball, this.bar, this.ballHitBar, null, this);
        this.physics.add.collider(ball, staticGroup, this.ballHitBlock, null, this);
        this.physics.add.collider(ball, staticGroup2, this.ballHitBlock2, null, this);
        this.physics.add.collider(ball, staticGroup3, this.ballHitBlock3, null, this);
        this.physics.pause();
        this.keys = {};
        this.keys.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        this._leftTimeText = this.add.text(300, 288, 'Press the space key to start.', { fontSize: '50px', fill: '#FFF' ,fontFamily: "Arial"});

    }
    ballHitBlock(ball, block) {
        // ブロックを破壊
        block.destroy();
        // ボールの速度を逆向きに設定することで反射させる
        this.ball.setVelocity(-this.ball.body.velocity.x, -this.ball.body.velocity.y);
        // コリジョンを一時的に無効化して、即座に再有効化しないようにする
        this.ball.body.enable = false;
        // 一定時間後にコリジョンを再有効化する
        this.time.delayedCall(50, () => {
            if (this.ball && this.ball.body) {
                // コリジョンを再有効化
                this.ball.body.enable = true;
                // バウンドの処理を調整
                const ballSpeed = 600;
                const bounceAngle = Phaser.Math.Between(10,60);
                this.physics.velocityFromAngle(bounceAngle, ballSpeed, this.ball.body.velocity);
            }
        });
        this.score++;
        if (this.score >= 35) {
            this.bar.disableBody(true, true);
            this.physics.pause();
            this._leftTimeText = this.add.text(470, 288, 'clear!!', { fontSize: '50px', fill: '#FFF', fontFamily: "Arial" });
        }
    }
    
    
    
    
    ballHitBlock2(ball, block) {
        // ボールが当たり続けているか確認するためのカウンター
        let hitCounter = 0;
        // 毎フレームごとに呼ばれるイベントを追加
        this.time.addEvent({
            repeat: -1, // 無限に繰り返す
            callback: () => {
                // ボールが当たっているかどうか判定
                if (this.physics.overlap(ball, block)) {
                    hitCounter++;
                } else {
                    hitCounter = 0; // 当たっていない場合はカウンターをリセット
                }
                // 5秒以上当たり続けていたらブロックを破壊
                if (hitCounter >= 300) { // 300フレーム = 5秒（1秒 = 60フレーム）
                    block.destroy();
                    // ボールの速度を逆向きに設定することで反射させる
                    this.ball.setVelocity(-this.ball.body.velocity.x, -this.ball.body.velocity.y);
                    // コリジョンを一時的に無効化して、即座に再有効化しないようにする
                    this.ball.body.enable = false;
                    // 一定時間後にコリジョンを再有効化する
                    this.time.delayedCall(50, () => {
                        if (this.ball && this.ball.body) {
                            // コリジョンを再有効化
                            this.ball.body.enable = true;
    
                            // バウンドの処理を調整
                            const ballSpeed = 600;
                            const bounceAngle = Phaser.Math.Between(10, 60);
                            this.physics.velocityFromAngle(bounceAngle, ballSpeed, this.ball.body.velocity);
                        }
                    });
                }
            },
            delay: 16, // 16ミリ秒ごとに確認（約60FPS）
        });
    }
    
    ballHitBlock3(ball, block) {
        // ブロックを破壊
        block.destroy();
        this.bar_score++;
        if(this.bar_score == 1){
            this._leftTimeText = this.add.text(300, 288, 'Increased bar size.', { fontSize: '50px', fill: '#FFF', fontFamily: "Arial" });
            this.bar.destroy();
            this.bar = this.physics.add.sprite(this.bar.x, 450, 'bar2').setImmovable();
            this.physics.add.collider(ball, this.bar, this.ballHitBar, null, this);
            this.bar.setCollideWorldBounds(true);
            this.time.delayedCall(1000, () => {
                this._leftTimeText.setVisible(false);
            });
        }else if(this.bar_score == 2){
            this._leftTimeText = this.add.text(300, 288, 'Bar size reduction.', { fontSize: '50px', fill: '#FFF', fontFamily: "Arial" });
            this.bar.disableBody(true,true);
            this.bar = this.physics.add.sprite(this.bar.x, 450, 'bar4').setImmovable();
            this.physics.add.collider(ball, this.bar, this.ballHitBar, null, this);
            this.bar.setCollideWorldBounds(true);
            this.time.delayedCall(1000, () => {
                this._leftTimeText.setVisible(false);
            });
        }else if(this.bar_score == 3){
            this._leftTimeText = this.add.text(300, 288, 'Speed up the bar.', { fontSize: '50px', fill: '#FFF', fontFamily: "Arial" });
            this.speed = 1000;
            this.dis_speed = -1000;
            this.cursorsdrive(this.speed,this.dis_speed);
            this.time.delayedCall(1000, () => {
                this._leftTimeText.setVisible(false);
            });
        }
        
        // ボールの速度を逆向きに設定することで反射させる
        this.ball.setVelocity(-this.ball.body.velocity.x, -this.ball.body.velocity.y);
        // コリジョンを一時的に無効化して、即座に再有効化しないようにする
        this.ball.body.enable = false;
        // 一定時間後にコリジョンを再有効化する
        this.time.delayedCall(50, () => {
            if (this.ball && this.ball.body) {
                // コリジョンを再有効化
                this.ball.body.enable = true;
                // バウンドの処理を調整
                // const ballSpeed = Phaser.Math.Between(200, 400);
                const ballSpeed = 600;
                const bounceAngle = Phaser.Math.Between(10, 60);
                this.physics.velocityFromAngle(bounceAngle, ballSpeed, this.ball.body.velocity);
            }
        });
    }
    ballHitBar(ball) {
        ball.setVelocity(600, -288);
    }

    cursorsdrive(speed,dis_speed) {
        let cursors = this.input.keyboard.createCursorKeys();
        var isLeftKeyDown = cursors.left.isDown;
        var isRightKeyDown = cursors.right.isDown;
        
        if (isLeftKeyDown) {
            console.log("left1");
            this.bar.setVelocityX(this.dis_speed);
        } else if (isRightKeyDown) {
            console.log("right1");
            this.bar.setVelocityX(this.speed);
        } else {
            this.bar.setVelocityX(0);
        }

        if ((this.bar.x <= 0 || this.bar.x >= config.width) && (isLeftKeyDown || isRightKeyDown)) {
            this.bar.setVelocityX(isLeftKeyDown ? this.speed : this.dis_speed);
        }

        if(this.ball.y>=510){
            this.bar.disableBody(true,true);
            this.physics.pause();
            this._leftTimeText = this.add.text(470, 288, 'GameOver...', { fontSize: '50px', fill: '#FFF' ,fontFamily: "Arial"});
        }
    }
    // 毎フレーム実行される繰り返し処理
    update() {
        if (this.keys.space.isDown) {
            // Space bar is pressed, add your logic here]
            this.physics.resume();
            this._leftTimeText.setText('');
        }
        this.cursorsdrive(this.speed,this.dis_speed);
        this.staticGroup2.getChildren().forEach(block => {
            if (block.hitByBall && this.time.now - block.body.touching.noneTime > 5000) {
                // ボールが最後にブロックに当たってから5秒以上経過している場合、ブロックを破壊
                block.destroy();
            }
        });
        // let cursors = this.input.keyboard.createCursorKeys();
        // var isLeftKeyDown = cursors.left.isDown;
        // var isRightKeyDown = cursors.right.isDown;
        
        // if (isLeftKeyDown) {
        //     console.log("left1");
        //     this.bar.setVelocityX(-500);
        // } else if (isRightKeyDown) {
        //     console.log("right1");
        //     this.bar.setVelocityX(500);
        // } else {
        //     this.bar.setVelocityX(0);
        // }

        // if ((this.bar.x <= 0 || this.bar.x >= config.width) && (isLeftKeyDown || isRightKeyDown)) {
        //     this.bar.setVelocityX(isLeftKeyDown ? -500 : 500);
        // }

        // if(this.ball.y>=510){
        //     this.bar.disableBody(true,true);
        //     this.physics.pause();
        //     this._leftTimeText = this.add.text(600, 288, 'GameOver...', { fontSize: '50px', fill: '#FFF' ,fontFamily: "Arial"});
        // }

     }
}
