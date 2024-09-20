function regexTest(pattern, str) {
    // Create a new RegExp object using the provided pattern
    const regex = new RegExp(pattern);
    
    // Test if the string matches the pattern
    return regex.test(str);
}

// Test the function with various patterns and strings

console.log(regexTest('hello', 'hello world')); // true
console.log(regexTest('world$', 'hello world')); // true (matches 'world' at the end)
console.log(regexTest('^hello', 'hello world')); // true (matches 'hello' at the beginning)
console.log(regexTest('\\d+', 'There are 123 apples')); // true (matches one or more digits)
console.log(regexTest('\\w{5}', 'abc12')); // true (matches exactly 5 word characters)
console.log(regexTest('[A-Z]', 'lowercase')); // false (no uppercase letters)
console.log(regexTest('^a.*z$', 'alphabetz')); // true (matches a string that starts with 'a' and ends with 'z')
console.log(regexTest('cat|dog', 'I have a cat')); // true (matches either 'cat' or 'dog')
