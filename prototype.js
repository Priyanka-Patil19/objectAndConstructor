//link:https://web.archive.org/web/20200513181548/https://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/
//The prototype property is used primarily for inheritance; you add methods and properties on a function’s prototype property to make those methods and properties available to instances of that function.
function PrintStuff(myDocument){
    this.myDocument=myDocument;
}

PrintStuff.prototype.print=function(){
    //console.log(this.myDocument);
    alert(this.myDocument);
}
//PrintStuff :constructor
//newBObj:Object
const newBoj=new PrintStuff("This is the prototype example");
newBoj.print();//newObj‘s prototype is PrintStuff.prototype.
//An object’s prototype attribute points to the object’s “parent”

//The constructor in this example is Object () 
var myObj = new Object ();
// And if you later want to find the myObj constructor:
console.log(myObj.constructor); // Object()

// Another example: Account () is the constructor
var userAccount = new Account (); 
// Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()

function Account () {

}
var userAccount = new Account () // userAccount initialized with the Account () constructor and as such its prototype attribute (or prototype object) is Account.prototype.

//==============================================
function People () {
    this.superstar = "Michael Jackson";
    }
    // Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
    People.prototype.athlete = "Tiger Woods";
    
    var famousPerson = new People ();
    famousPerson.superstar = "Steve Jobs";
    
    // The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain. 
    console.log (famousPerson.superstar); // Steve Jobs
    const people=new People();
    console.log (people.superstar);
    console.log (famousPerson.athlete);
    console.log (famousPerson.toString());
    
//================================================
//Here we can say that "animal is the prototype of rabbit" or "rabbit prototypically inherits from animal".
let animal={
    eats:true,
};
let rabbit={
    jumps:true,
};

rabbit.__proto__=animal;

// There are only two limitations:

// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
// The value of __proto__ can be either an object or null. Other types are ignored.

//======================================================================

let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  alert(admin.fullName); // John Smith (*)
  
  // setter triggers!
  admin.fullName = "Alice Cooper"; // (**)
  
  alert(admin.fullName); // Alice Cooper, state of admin modified
  alert(user.fullName); // John Smith, state of user protected

  for(let prop in rabbit) {
    let isOwn = rabbit.hasOwnProperty(prop);
  
    if (isOwn) {
      alert(`Our: ${prop}`); // Our: jumps
    } else {
      alert(`Inherited: ${prop}`); // Inherited: eats
    }
  }
  //==================================================================

