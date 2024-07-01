#! /usr/bin/env node
import inquirer from "inquirer"

import chalk from "chalk"
console.log(chalk.bgYellow("\t welcome the adventure game\t"));


class Hero {
    name : string;
    health= 100;

    constructor(name:string){
        this.name =name
    }  
    decrease (){
        this.health -= 20
    }
    increase(){
        this.health = 100
    }

}
class  Enemy {
    name : string;
    health= 100;

    constructor(name:string){
        this.name =name
    }  
    decrease (){
        this.health -= 20
    }
    increase(){
        this.health = 100
    }

}
async function main(){
    const {heroname} = await inquirer.prompt([
        {
            name:"heroname",
            type:"inpur",
            message:chalk.greenBright("enter your hero name")

        }
    ])
    const {enemytype} = await inquirer.prompt([
        {
            name:"enemytype",
            type:"list",
            message:chalk.red("select the enemy you fight with"),
            choices:["alien" , "widtch" , "zombie"]
        }
    ])

    const hero = new Hero (heroname)
    const enemy = new Enemy (enemytype)

    console.log(`${hero.name} VS ${enemy.name}`);

    do{
        const {action} = await inquirer.prompt([
            {
                name:"action",
                type:"list",
                message:"select a type to attack",
                choices:["attack" ,"defend" , "range","target","run"]
            }
        ]);
    

    switch (action) {
        case "attack":
            const randomnumber =Math.random()
            if(randomnumber > 0.5){
                hero.decrease()
            console.log(`${hero.name} health: ${hero.health}`);
            console.log(`${enemy.name} health: ${enemy.health}`);
            if(hero.health <= 0){
                console.log("you loss! try again");
               return 
            }

    
    }     else{
        enemy.decrease
        enemy.decrease()
            console.log(`${hero.name} health: ${hero.health}`);
            console.log(`${enemy.name} health: ${enemy.health}`);
            if(hero.health <= 0){
                console.log("congratulation you win the game");
               return 
            }
            break;
    }
  
}

}while(true)
}
main()
// console.log("the end")

















