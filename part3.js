// Part 3 - Resolve Reject

// Write a function called addNumbers(x, y) that returns a new Promise() 
// that adds two numbers and resolves the answer. 
// However, if the two inputs provided are not both numbers reject the promise. 
// The API should work like the following:




function addNumbers(x, y) {
    let resolveOrReject = new Promise(function (resolve, reject){
        if ( isNaN(x) || isNaN(y)) {
            reject("Rejected the promise");
        }
        else {
            let sum = x + y;
            resolve(sum);
        };
    });
    return resolveOrReject;        
};

let x = 7;
let y = 'hi';


addNumbers(x, y)
   .then(function (answer) {
      console.log(answer);
   })
   .catch(function (error) {
      console.log(error);
   });