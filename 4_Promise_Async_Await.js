// Before using Promise Example
function sayHello(name, byeCallback) {
    setTimeout(() => {
        console.log(name + "님 안녕하세요.");
        byeCallback();
    }, 2000);
}

sayHello("Mike", function() {
    console.log("안녕히 가세요");
});

// Using Promise Example
function sayHelloPromise(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(name + "님 안녕하세요.");
            resolve();
        }, 2000);
    });
}

sayHelloPromise("Frank").then(() => console.log("안녕히 가세요."));

// Using Promise with Params Example
function sayHelloResolveWithParams(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === "Mike") {
                console.log(name + "님 안녕하세요.");
                resolve(name);
            } else {
                console.log(name + "님은 출입할 수 없습니다.");
                reject(name);
            }
        }, 2000);
    });
}

sayHelloResolveWithParams("Frank")
    .then(name => console.log(name + "님 안녕히가세요."))
    .catch(name => console.log(name + "님 안녕히가세요."));

sayHelloResolveWithParams("Mike")
    .then(name => console.log(name + "님 안녕히가세요."))
    .catch(name => console.log(name + "님 안녕히가세요."));

// Async - Await Example
function sayHelloAsync(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(name + "님 안녕하세요.");
            resolve(name);
        }, 2000);
    });
}

async function sayByeAsync(name) {
    const result = await sayHelloAsync(name);
    console.log(result + "님 안녕히가세요.");
}

sayByeAsync("Minsu");
