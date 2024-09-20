function findMatches(pattern, str) {
    // Create a regular expression object with global flag to find all matches
    const regex = new RegExp(pattern, 'g');
    
    // Use match() method to find all matches
    const matches = str.match(regex);
    
    // If matches are found, return them, otherwise return an empty array
    return matches || [];
}

// Test the function with various character class patterns

// Digits: \d
console.log('Digits:', findMatches('\\d', 'The year is 2024 and the time is 10:45')); 
// Expected output: ['2', '0', '2', '4', '1', '0', '4', '5']

// Uppercase letters: [A-Z]
console.log('Uppercase Letters:', findMatches('[A-Z]', 'Hello World! JavaScript is Cool!')); 
// Expected output: ['H', 'W', 'J', 'S', 'C']

// Lowercase letters: [a-z]
console.log('Lowercase Letters:', findMatches('[a-z]', 'Hello World! JavaScript is Cool!')); 
// Expected output: ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', 'i', 's', 'o', 'o', 'l']

// Special characters: [^a-zA-Z0-9] (anything that is not a letter or a number)
console.log('Special Characters:', findMatches('[^a-zA-Z0-9]', 'Hello @World! How are you? #2024')); 
// Expected output: [' ', '@', '!', ' ', ' ', ' ', '?', ' ', '#']
