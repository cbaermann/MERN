// import { join } from "path";

class Ninja{
    constructor(name){
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("Your ninja's name is " + this.name);
    }

    showStats(){
        console.log(" Name: " + this.name +
        "\n Strength: " + this.strength  +
        "\n Speed: " + this.speed  +
        "\n Health: " + this.health
        );
    }
    drinkSake(){
        this.health += 10;
        console.log("Your health is now " + this.health);
    }

}

const ninja = new Ninja("Hyabusa")
ninja.sayName();
ninja.showStats();
ninja.drinkSake();
ninja.showStats();