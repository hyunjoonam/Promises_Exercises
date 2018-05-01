var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
    ];

//   Use $.get() and a chain of .then() calls to fetch these URLs one by one. 
// After each .get() is done, console log "data was fetched!"


$.get('https://dog.ceo/api/breed/beagle/images/random').then(function(value) {
    console.log(urls[0]);
    console.log('data was fetched');
    // return $.get(urls)
})
.then(function(value) {
    console.log(urls[1]);
    console.log('data was fetched');
})
.then(function(value) {
    console.log(urls[2]);
    console.log('data was fetched');
})
.then(function(value) {
    console.log(urls[3]);
    console.log('data was fetched');
})
.then(function(value) {
    console.log(urls[4]);
    console.log('data was fetched');
})
.catch(function(error) {
    console.log(error);
});