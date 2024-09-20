function extractWithRegex(pattern, inputString) {
    const regex = new RegExp(pattern); // Create a regex object from the pattern
    const match = inputString.match(regex); // Match the string against the pattern
  
    if (match) {
      return {
        fullMatch: match[0], // Full match
        groups: match.slice(1), // Captured groups
      };
    } else {
      return 'No match found!';
    }
  }
  
  // Test the function with a date pattern (day, month, year)
  const datePattern = /(\d{2})-(\d{2})-(\d{4})/; // Example: DD-MM-YYYY
  const dateString = "Today's date is 20-09-2024.";
  
  const result = extractWithRegex(datePattern, dateString);
  
  console.log(result);
  