// function Player(name,marker){
//     this.name=name;
//     this.marker=marker;
// }
// const player=new Player('priyanka','X');
// console.log(player.name);

function Player(name,marker){
    this.name=name;
    this.marker=marker;
    this.sayName=function(){
        //console.log(name);
        alert('Hello '+name);
    }
}

const player1=new Player('urvesh','X');
const player2=new Player('Ozzi','O');

player1.sayName();
player2.sayName(); 