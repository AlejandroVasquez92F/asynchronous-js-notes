/*
    links:
        - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API
        - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers
*/

/*
example of implementing a promise-based api:
    in this example, a promise is returned by the api.
*/

//alarm() example:
function alarm(person, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Alarm delay must not be negative");
        }
        setTimeout(() => {
            resolve(`Wake up, ${person}!`);
        }, delay);
    });
}

button.addEventListener("click", async () => { //async/await
    try {
        const message = await alarm(name.value, delay.value);
        output.textContent = message;
    } catch (error) {
        output.textContent = `Couldn't set alarm: ${error}`;
    }
});

/*
    web workers: these enable concurrent execution of scripts in the browser.
        they provide a way to run js code in the background separate from the main thread which is responsible for UI.
        they do not have access to the DOM & communication between workers and the main thread is handled through a message passing system.
    
    there are 3 different kinds of web workers:
        - dedicated workers
        - shared workers
        - service workers
*/

/*
    dedicated worker example:
*/

const myWorker = new Worker('worker.js'); //run this in the main thread

//run this in the web worker
onmessage = function (event) {
    console.log('Message received from main thread:', event.data);
};

//run this in the main thread
myWorker.postMessage('Hello from main thread!');
myWorker.terminate();

/*
    shared worker example:
*/
first.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
};

second.onchange = () => {
    myWorker.port.postMessage([first.value, second.value]);
    console.log("Message posted to worker");
};

myWorker.port.onmessage = (e) => {
    result1.textContent = e.data;
    console.log("Message received from worker");
};
