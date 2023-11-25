/*
    asynchronous javascript notes:
        - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
        - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Promises?authuser=0
*/

/*
    the primary difference between synchronous and asynchronous javascript is:
        - asynchronous javascript is designed to work through a program even when all the information hasn't been given to the program.
        - typical synchronous javascript will wait until all parts have loaded through before working on other parts of the code.
    this is useful because it can drastically shorten the time needed to run/use a program.
    that and this can allow a program to run and collect information while the program is waiting for more information to come in.
    a good example of this is a movie/video website that loads the necessary stuff to navigate first, but leaves the thumbnails to load last.
*/

/*
    Event Handlers: these are a form of async programming.
    with event handlers, a function will happen after an event does.

*/

function handleClick() {
    alert('Button clicked!');
}
myButton.addEventListener('click', handleClick);

/*
    Callbacks: a callback is a function that is passed into another function with an expectation that the call back will be called at the appropriate time.
    you usually have callbacks nested within other callbacks.
    for this reason, most modern api do not use callbacks.

*/

function doSomethingAsync(callback) {
    setTimeout(function () {
        console.log('Async operation completed!');
        callback(); //callback is called
    }, 2000);
}

function afterAsyncOperation() {
    console.log('Callback executed after async operation.');
}

doSomethingAsync(afterAsyncOperation); // function is placed within a function to be called back.

/*
    Promises: a promise is an object that is returned by an async function that represents the current state of an operation.
*/

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve("Operation succeeded!");
        } else {
            reject("Operation failed!");
        }
    }, 2000); //simulates a delay
});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

/*
    async:
        keyword used to declare an async function.
        returns a promise implicitly (this function always returns a promise even if the returned value is not a promise itself).

    await:
        used inside an async function.
        this pauses the execution of the async function until a promise is resolved (fulfilled/rejected), then resumes the execution of the function.
*/