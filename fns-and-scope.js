//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

  function isTyler(name) {
     if( name.toLowerCase() === 'tyler' ) {
        return true;
     }
     else {
     return false;
}
  }

  console.log(isTyler('anton'));
  console.log(isTyler('tyler'));

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

      function getName() {
         var name = prompt("What is your name?");
         return name;
      }

      console.log(getName());


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
      var name2 = getName();

      function welcome(func) {
         alert("welcome " + func);
      }

      console.log(welcome(name2));

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here



//Next Problem



//Create a function called myName that returns your name

  //Code Here

function myName() {
   return "anton Bredl";
}

console.log(myName());


//Now save the function definition of myName into a new variable called newMyName

  //Code Here

var newMyName = myName;


//Now alert the result of invoking newMyName

console.log(newMyName());
console.log(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here

  function outerFn() {
     return function() {
        return "anton the 5th";
     }
 }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

  var innerFn = outerFn();


//Now invoke innerFn.

console.log(innerFn());
