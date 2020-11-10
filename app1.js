let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("Promise is the best");
    }, 5000);
});

promise.then(function(success) {
    console.log(success);
});