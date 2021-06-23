// function Student(name,grade){
//     this.name=name
//     this.grade=grade
// }

// Student.prototype.say
// Name=function(){
//     console.log(this.name)
// }

// Student.prototype.goToProm=function(){

// }

const person={
    isHuman:false,
    printIntroduction:function(){
        console.log(`My name is ${this.name}.Am I human ?${this.isHuman}`);
    }
};
const me=Object.create(person);

me.name='Priyanka';
me.isHuman=true;

me.printIntroduction();

