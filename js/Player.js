class Player{
    constructor(){
        this.index=null;
        this.name=null;
        this.positionX=0;
        this.positionY=0;
        
    }

    addPlayer(){
        var playerIndex= "players/player" + this.index;
        if(this.index===1){
            this.positionY= height/2-100;
            this.positionX=width/2-700;
        }
        else{
            this.positionY= height/2+100;
            this.positionX=width/2+700;
        }

        database.ref(playerIndex).set({
            name:this.name,
            positionX: this.positionX,
            positionY: this.positionY

        });
    }
    getDistance() {
      var playerDistanceRef = database.ref("players/player" + this.index);
      playerDistanceRef.on("value", data => {
        var d = data.val();
        
        this.positionX = d.positionX;
        this.positionY = d.positionY;
      });
    }
    
  update() {
    var playerIndex = "players/player" + this.index;
    console.log(playerIndex)
    database.ref(playerIndex).update({
      positionX: this.positionX,
      positionY: this.positionY,
      
    });
  }

    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
          //console.log(playerCount)
         // this.index=playerCount;
        });
      }
    
      updateCount(count) {
        database.ref("/").update({
          playerCount: count
        });
      }

      static getPlayerInfo(){
        var playerInfoRef= database.ref("players");
        playerInfoRef.on("value",data => {
          allPlayers= data.val();
        });
      }


}