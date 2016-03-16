//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

      var inner = outer();

//Once you do that, invoke inner.

  //Code Here
      console.log(inner());


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var help = callFriend();
console.log(help('435-215-9248'));


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

  function makeCounter() {
     var counting = 0;

     return function() {
        return counting += 1;
     };

 }

  var count = makeCounter();
  console.log(count()); // 1

  console.log(count()); // 1
  console.log(count()); // 1
  console.log(count()); // 1




//Next Problem



/*
  Write a function named codeLove that returns the string 'I love code'. Write a second function named codeFriend that accepts the first function as it's first parameter. The second function should return a new third function. Store the third function in a variable, codeEcho which, when invoked, invokes the first, original function that was passed in, but will only ever do so once (returns null after first invocation).
*/

  //Code Here

 function codeLove() {
     return "I love code";
 }

 function codeFriend(fun) {
    var once = true;
    return function() {
      if(once){
         once = false;
         return fun();
      }
      else {
         return null;
      }
   };
}

var codeEcho = codeFriend(codeLove);


console.log(codeEcho());
console.log(codeEcho());
console.log(codeEcho());


// ----------------------------



//Next Problem


/*
  Similar to the last problem, write a function called 'fnCounter' that accepts two parameters. The first parameter, 'func', will be a function and the second parameter, 'N', will be a number. Now, in 'fnCounter', return an anonymous function that allows the parameter function to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

  //Code Here

function blah() {
   return "hello";
}

function fnCounter(func, N) {
   return function() {
      for ( var i = 0; i < N; i++ ) {
         console.log( func());
      }
      return "STOP";
   };
}

var hey = fnCounter(blah, 10);
console.log(hey());


// OR ---------------------
function yo() {
   return "hello";
}

function fnCount(func, N) {
  return function() {
    if (N > 0) {
      N -= 1;
      return func();
    } else {
      return 'STOP';
    }
};
}

var hi = fnCount(yo, 7);
console.log(hi()); //--> 'hello'
console.log(hi()); //--> 'hello'
console.log(hi()); //--> 'hello'
console.log(hi()); //--> 'hello'
console.log(hi()); //--> 'hello'
console.log(hi()); //--> 'hello'
console.log(hi()); //--> 'hello'
console.log(hi()); //--> 'STOP'

//Next Problem



  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*5000 );
    }
  };

console.log(counter());

/*
  Above you have a function named counter. Examine the function (without running the code) then below write what you expect to happen when the function is invoked. *Hint: setTimeout calls a function or evaluates an expression after a specified number of milliseconds.

    //Answer Here

      // it will run the function after the page has loaded with a delay of 1 second

  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here

      // it ran the function with an initial delay and then subsequent delays between each iteration of the for loop


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc) (Note: No unit test for this one because of the timeout)
*/

    //Code Here



//Next Problem

/*
funcArray = [ function() { return 0; }, function() { return 1; }, function() { return 2; }, function() { return 3; }, function() { return 4; }, function() { return 5; }] */


function fill1() {
            var num = -1;
            return function() {
              return num += 1;
           };
          }


var filler = fill1();

function fillArray() {
   var funcArray = [];
    for (var i = 0; i <= 5; i++) {
        funcArray.push(filler);
    }
    return funcArray;
}

var funcArray = fillArray();



// OR -------------------


// function blah(gross){
//   var soTired = []
//     , i = 0;
//   while(i <= gross){
//     var lolwut = function(i){
//       soTired.push(function(){
//         return(i);
//       });
//     }
//     lolwut(i);
//     i++;
//   }
//   console.error('happy now?');
//   return soTired;
// }
// var funcArray = blah(5);

/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/


// ^answer to the Above


function fill1() {
            var num = -1;
            return function() {
              return num += 1;
           };
          }


var filler = fill1();

function fillArray() {
   var funcArray = [];
    for (var i = 0; i <= 5; i++) {
        funcArray.push(filler);
    }
    return funcArray;
}

var funcArray = fillArray();
  console.log(funcArray[0]());
  console.log(funcArray[1]());
  console.log(funcArray[2]());
  console.log(funcArray[3]());
  console.log(funcArray[4]());
  console.log(funcArray[5]());
 
