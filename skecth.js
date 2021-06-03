var apple,apple_img;
var watermelon,watermelon_img;
var kiwi,kiwi_img;
var bomb,bomb_img;
var orange,orange_img;
var banana,banana_img;
var knife,knife_img;
var BG;
var FruitGroup,bombGroup;
var knife_depth;
var gameState="play";
var gameOver_image,gameOver;
var score=0;
function preload(){
    BG = loadImage("images/BG.png")
    apple_img = loadImage("images/apple.png");
    banana_img = loadImage("images/banana.png");
    kiwi_img = loadImage("images/kiwi.png");
    orange_img = loadImage("images/orange.png");
    bomb_img = loadImage("images/bomb.png");
    watermelon_img = loadImage("images/watermelon.png");
    knife_img = loadImage("images/knife.png");
    gameOver_image = loadImage("images/gameOver.png");
}
function setup(){
    createCanvas(300,600);
    knife = createSprite(0,0,15,15);
    knife.addImage(knife_img);
    knife.scale = 0.2;
    FruitGroup = new Group();
    bombGroup = new Group();
    knife_depth = knife.depth;
    gameOver = createSprite(150,300,10,10);
    gameOver.addImage(gameOver_image);
    gameOver.visible=false;
    gameOver.scale=0.4;
    
    
    
}
function draw(){
    background(BG);
    fill("red");
    textSize(18);
    text("Score :"+score,200,20);
    if(gameState=="play" || gameState=="mousePressed"){
    knife.x=mouseX;
    knife.y=mouseY;

    if(frameCount%50==0){

        objects();
    }
    FruitGroup.setVelocityYEach(-(6 + 3*score/100));
    if(FruitGroup.isTouching(knife) && gameState=="mousePressed"){
        FruitGroup.setVelocityEach(0);
        score = score+10;
        FruitGroup.destroyEach();
    }
    if(bombGroup.isTouching(knife) && gameState=="mousePressed"){
        bombGroup.setVelocityEach(0);
        bombGroup.destroyEach();
        gameOver.visible=true;
        gameState = "gameOver";
    }
}
    //FruitGroup.setVelocityYEach(-3);
    drawSprites();
}
function objects(){
    var select_object = Math.round(random(1,3));
    if(select_object==1||select_object==2){
        var select_fruit = Math.round(random(1,5));
        if(select_fruit==1){
            console.log("apple is gone");
            apple = createSprite(Math.round(random(0,300)),650,10,10);
            apple.addImage(apple_img);
            apple.scale=0.1;
            // apple.velocityY=-(6 + 3*score/100);
            apple.depth = knife.depth-1;
            FruitGroup.add(apple);
            
        }
        else if(select_fruit==2){
            console.log("kiwi is gone");
            kiwi = createSprite(Math.round(random(0,300)),650,10,10);
            kiwi.addImage(kiwi_img);
            kiwi.scale=0.1;
            // kiwi.velocityY=-(6 + 3*score/100);
            kiwi.depth = knife.depth-1;
            FruitGroup.add(kiwi);
        }
        else if(select_fruit==3){
            console.log("watermelon is gone");
            watermelon = createSprite(Math.round(random(0,300)),650,10,10);
            watermelon.addImage(watermelon_img);
            watermelon.scale = 0.1;
            // watermelon.velocityY=-(6 + 3*score/100);
            watermelon.depth = knife.depth-1;
            FruitGroup.add(watermelon);
        }
        else if(select_fruit==4){
            console.log("banana is gone");
            banana = createSprite(Math.round(random(0,300)),650,10,10);
            banana.addImage(banana_img);
            banana.scale= 0.5;
            // banana.velocityY=-(6 + 3*score/100);
            banana.depth = knife.depth-1;
            FruitGroup.add(banana)
        }
        else if(select_fruit==5){
            console.log("orange is gone");
            orange = createSprite(Math.round(random(0,300)),650,10,10);
            orange.addImage(orange_img);
            orange.scale=0.1;
            // orange.velocityY=-(6 + 3*score/100);
            orange.depth = knife.depth-1;
            FruitGroup.add(orange)
        }
    }
    else{
        console.log("bomb is gone");
        bomb = createSprite(Math.round(random(0,300)),650,10,10);
        bomb.addImage(bomb_img);
        bomb.scale=0.1;
        bomb.velocityY=-(6 + 3*score/100);
        bomb.depth = knife.depth-1;
        bombGroup.add(bomb);
        
    }
}
function mouseDragged(){
    console.log("it is coming")
    if(gameState=="play"){
    gameState = "mousePressed";
    }
}
function mouseReleased(){
    if(gameState=="mousePressed"){
        gameState="play";
    }
}