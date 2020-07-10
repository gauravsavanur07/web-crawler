// JavaScript source code
const { worker } = require('worker_threads');
const { Worker, isMainThread } = require('worker_threads');

if (isMainThread) {
    new Worker(__filename);
}
else {
    console.log("Worker says:Hello World")
}

new worker("./worker.js");