// const zahl = 5;       // Datentyp: Number (Zahl)
// const textZahl = "5"; // Datentyp: String (Text)

// 1. Der ungenaue Vergleich (==)
// console.log(zahl == textZahl); 
// Gibt 'true' aus! JavaScript denkt: "Ach, beides ist irgendwie eine 5."

// 2. Der strikte Vergleich (===)
// console.log(zahl === textZahl); 
// Gibt 'false' aus! Wert ist zwar gleich, aber Number ist nicht gleich String.



// const Greetings = function(name){
//     return `Hello ${name}`;
// };

// console.log(Greetings("Simon"));



// const favGame = ['KovaaKs','Roblox','Minecraft'];
// favGame.forEach((Games) => {
    // console.log(`The Game I play is ${Games}`);
// });



// const Spieler = {
//     GamerTag : "smoov",
//     level : 5,


// Player: function(){
//         console.log(`The Gamer user name is ${this.GamerTag} and the account lvl is ${this.level}`)
//     }
// };

// Spieler.Player();


// // const Games = {
// //     GameName: 'KovaaKs',
// //     level: 10,

// //     inGame: function(){
// //         console.log(`Player Fav Game is ${this.GameName} and his ${this.level}!.`)
// //     }
// // };

// Games.inGame();


const Games = ['KovaaKs','Minecraft']
Games.forEach((Game) => {
    console.log(`${Game}`)
});