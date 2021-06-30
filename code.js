var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["94ec976d-87cd-454d-b9da-5df0d6ea2fcb","64660ceb-6b03-43d4-a8c8-b0c600d68de5","4a76ecc7-9023-42a2-8b94-2f132b8bf74d","6639df49-5e86-4d00-92a1-3aba08c4273c","597792f2-5b3e-4f4d-8113-2b8de67ed8b0"],"propsByKey":{"94ec976d-87cd-454d-b9da-5df0d6ea2fcb":{"name":"car 1","sourceUrl":"assets/v3/animations/7Am3HZ-B88sR1l4IzvnrgzV2IPXHWPfdOlPBGugpb-Y/94ec976d-87cd-454d-b9da-5df0d6ea2fcb.png","frameSize":{"x":300,"y":601},"frameCount":1,"looping":true,"frameDelay":4,"version":"sqQl.9FEaGR.2pqD9Ansss1eBPtutj.M","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":601},"rootRelativePath":"assets/v3/animations/7Am3HZ-B88sR1l4IzvnrgzV2IPXHWPfdOlPBGugpb-Y/94ec976d-87cd-454d-b9da-5df0d6ea2fcb.png"},"64660ceb-6b03-43d4-a8c8-b0c600d68de5":{"name":"car 2","sourceUrl":"assets/v3/animations/7Am3HZ-B88sR1l4IzvnrgzV2IPXHWPfdOlPBGugpb-Y/64660ceb-6b03-43d4-a8c8-b0c600d68de5.png","frameSize":{"x":265,"y":564},"frameCount":1,"looping":true,"frameDelay":4,"version":"01bhjVw3LfPB4LIZscyqLH1d5Ncv.CPm","loadedFromSource":true,"saved":true,"sourceSize":{"x":265,"y":564},"rootRelativePath":"assets/v3/animations/7Am3HZ-B88sR1l4IzvnrgzV2IPXHWPfdOlPBGugpb-Y/64660ceb-6b03-43d4-a8c8-b0c600d68de5.png"},"4a76ecc7-9023-42a2-8b94-2f132b8bf74d":{"name":"car 3","sourceUrl":"assets/v3/animations/7Am3HZ-B88sR1l4IzvnrgzV2IPXHWPfdOlPBGugpb-Y/4a76ecc7-9023-42a2-8b94-2f132b8bf74d.png","frameSize":{"x":293,"y":594},"frameCount":1,"looping":true,"frameDelay":4,"version":"sRItp780zapsnkt4JK_PseF_Eq2gblRY","loadedFromSource":true,"saved":true,"sourceSize":{"x":293,"y":594},"rootRelativePath":"assets/v3/animations/7Am3HZ-B88sR1l4IzvnrgzV2IPXHWPfdOlPBGugpb-Y/4a76ecc7-9023-42a2-8b94-2f132b8bf74d.png"},"6639df49-5e86-4d00-92a1-3aba08c4273c":{"name":"car 4","sourceUrl":null,"frameSize":{"x":30,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"Lk33MA.5fiQhNvUh4J2lVyGMpFY6TZq7","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":50},"rootRelativePath":"assets/6639df49-5e86-4d00-92a1-3aba08c4273c.png"},"597792f2-5b3e-4f4d-8113-2b8de67ed8b0":{"name":"sam ","sourceUrl":null,"frameSize":{"x":20,"y":20},"frameCount":1,"looping":true,"frameDelay":12,"version":"L37PmZYFbUTM50bOtXuLOBCXLQHvMbjS","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/597792f2-5b3e-4f4d-8113-2b8de67ed8b0.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

finish = createSprite(375,190,52,140)
finish.shapeColor = "yellow"
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
car1.velocityY = 7
car2.velocityY = 7
car3.velocityY = -7
car4.velocityY = -7


function draw() {
  background("white");
  textSize(30)
  fill("black")
  textFont("harrington")
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  
  
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
  if (keyDown(RIGHT_ARROW)){
    sam.x = sam.x+3
  }
  
  if (keyDown(LEFT_ARROW)){
    sam.x= sam.x-3
  }
  
  if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
    sam.x = 20
    life--
  }
 
  
  if (life == 0){
    textSize(30)
    fill("blue")
    textFont("harrington")
    text("you lose.", 100,300)
    stop();
  }
 
 if(sam.isTouching(finish)){
   textSize(30)
   fill("red")
   textFont("harrington")
   text("you win!", 100,300)
   stop2();
 }

 
 
 
 drawSprites();
}

function stop(){
car1.setVelocity(0,0);
car2.setVelocity(0,0);
car3.setVelocity(0,0);
car4.setVelocity(0,0);
sam.x = 20
}

function stop2(){
car1.setVelocity(0,0);
car2.setVelocity(0,0);
car3.setVelocity(0,0);
car4.setVelocity(0,0);
sam.x = 372
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
