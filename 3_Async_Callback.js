// Asynchronous Example
setTimeout(() => {
    console.log("안녕하세요");
}, 2000);

console.log("안녕히가세요");

// Call back Example
function sayHello(sayGoodbye) {
    setTimeout(() => {
        console.log("안녕하세요");
        sayGoodbye();
    }, 2000);
}

sayHello(() => console.log("안녕히 가세요"));
