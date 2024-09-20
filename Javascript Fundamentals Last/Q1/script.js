function outerFunction(outerParam) {
    let outerVar = 'I am a variable inside outerFunction!';

    // Inner function
    function innerFunction() {
        console.log(`Outer Parameter: ${outerParam}`);
        console.log(`Outer Variable: ${outerVar}`);
    }

    // Return the inner function
    return innerFunction;
}

// Calling outerFunction
const myInnerFunction = outerFunction('Hello from outerFunction');

// Even though outerFunction has completed execution, innerFunction retains access to its scope
myInnerFunction(); 
