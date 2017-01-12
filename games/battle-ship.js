// fun little game for someone to play by themselves when they are lonely
//

class Ship {
  constructor(size, coordinates){
    this.size = size;
    this.coordinates = coordinates;
    this.hitCount = 0;
  }

  hit(coords){
    for (let i = 0; i < this.coordinates.length; i++){
      if (this.coordinates[i].join() === coords.join()){
        console.log(`You hit me at ${coords}!!`);
        this.hitCount++;
        this.checkIfDead();
      }
    }
  }

  checkIfDead(){
    if (this.isDead()){
      console.log("YOU GOT ME, I'M SUNK!!!");
    }
  }

  isDead(){
    return this.hitCount === this.size ? true : false;
  }
}

class Game {
  constructor(ships){
    this.ships = ships;
    this.hits = [];
  }

  hit(coords){
    this.errorIfAlreadyHit(coords);
    this.ships.forEach(function(ship){
      ship.hit(coords);
    });
    this.hits.push(coords);
    this.endGameIfAllShipsAreDead();
  }

  endGameIfAllShipsAreDead(){
    this.ships.forEach(function(ship){
      if (!ship.isDead()){
        return true;
      }

      throw new Error("All ships are dead, GG");
    });
  }

  errorIfAlreadyHit(coords){
    for (let i = 0; i < this.hits.length; i++){
      if (this.hits[i].join() === coords.join()){
        throw new Error("You already struck that, go again");
      }
    }
  }
}

//Console commands after loading this in
let ship = new Ship(2, [[1,1],[1,2]]);
let game = new Game([ship]);

game.hit([1,1]); //Hits the ship once
game.hit([1,0]); //Hits nothing
game.hit([1,2]); //Hits the ship one last time. sinking it and ending game. GG
