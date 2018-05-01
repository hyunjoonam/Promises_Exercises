// Part 2 - Promise.all()

// Use Promise.all() to retreive all of the URLs above. 
// After it's done, console log "all the data was fetched!"
var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
    ];

Promise.all([$.get(urls[0]), $.get(urls[1]), $.get(urls[2]), $.get(urls[3]), $.get(urls[4])])
    .then((values)=>{
        console.log(values[0]);
        console.log(values[1]);
        console.log(values[2]);
        console.log(values[3]);
        console.log(values[4]);
        console.log("all the data was fetched!");
    });