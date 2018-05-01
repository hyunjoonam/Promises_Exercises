// Part 4 - Promisify (challenge question!)

// The function below uses callbacks to report the result of dropping buttered toast on the floor.

let dropButteredToastOnFloor = (success, failure) => {
   let drop = Math.random();
   if (drop < 0.5) {
      console.log("Landed butter-side up!");
      success();
   } else {
      console.log("Landed butter-side down...");
      failure();
   }
}
// To react to the dropping of toast, we have to provide callbacks for each possibility: dropping butter side up, or butter side down.

dropButteredToastOnFloor(()=>{
   alert('Whew, that was close!');
}, ()=>{
   alert('Well shucks, there goes my toast...');
});
// YOUR TASK- Write a function called dropToastPromisified(), make it return a new Promise(), 
// and use the dropButteredToastOnFloor() function to call either resolve() or reject(). If done correctly, you should be able to run:

function dropToastPromisified(resolve, reject) {
    return new Promise(function(){
        dropButteredToastOnFloor;
    })
};

dropToastPromisified()
   .then(()=>{
      alert('Whew, that was close!');
   }).catch(()=>{
      alert('Well shucks, there goes my toast...');
   });