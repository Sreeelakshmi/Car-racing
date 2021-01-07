/*class Game{
    constructor(){}
    getState(){
        var gamestateref=database.ref('gameSate')
        gamestateref.on("value",function(data){
gameState=data.val()
        })
    

    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
async start(){
    if(gameState==0){
        player=new Player();
        var playerCountref=await database.ref('playerCount').once("value");
        if(playerCountref.exists()){
            playerCount=playerCountref.val();
            player.getCount();
        }
       
        form=new Form();
        form.display();
        
    }
}
play(){
    form.hide();
    textSize(30);
    text("Game Start",130,100);
    Player.getPlayerinfo();
    if(allPlayers!=undefined){
        var displayPosition=130;
        for(var plr in allPlayers){
            if(plr=="player"+playerindex){
                fill("red")
            }
            else{
                fill("black");
            }
            displayPosition+=20;
            textSize(15);
            text(allPlayer[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
        }
    }
    if(keyIsDown(UP_ARROW)&&player.index!=null){
        player.distane+=50;
        player.update();
    }
}
}*/
class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    car1=createSprite(100,200);
    car1.addImage(carImg1);
    car2=createSprite(300,200);
    car2.addImage(carImg2);

    car3=createSprite(500,200);
    car3.addImage(carImg3);

    car4=createSprite(700,200);
    car4.addImage(carImg4);

cars=[car1,car2,car3,car4];
    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      player.getCarsAtEnd();
  
      if(allPlayers !== undefined){
        background(rgb(198,135,103))
        image(trackImg,0,-displayHeight*4,displayWidth,displayHeight*5)
var index=0;
var x=175;
var y;
        for(var plr in allPlayers){
        
        index=index+1;
        x=x+200;
        y=displayHeight-allPlayers[plr].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;

          if (index==player.index){
            fill("red");
            ellipse(x,y,60,60);
            cars[index-1].shapeColor="red";
            camera.position.x=displayWidth/2;
            camera.position.y=cars[index-1].y;
            
        }
      }
    }
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
   if(player.distance>3860){
     gameState=2
     player.rank+=1
     Player.updateCarsAtEnd(player.rank)
   }
      drawSprites();
    }
end(){
  console.log("gameOver");
  console.log(player.rank);
}
    }