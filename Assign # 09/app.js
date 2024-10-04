 // Step 1: Create an array with numbers from 1 to 10 with one number missing
 var series = [1, 2, 3, 4, 5, 6, 8, 9, 10]; // Missing number is 7

 // Step 2: Find the expected sum of numbers from 1 to 10 using the sum formula
 var n = 10; // This is the size of the full series
 var expectedSum = (n * (n + 1)) / 2; // Formula for sum of first n natural numbers

 // Step 3: Calculate the actual sum of the elements in the array
 var actualSum = 0;
 for (var i = 0; i < series.length; i++) {
     actualSum += series[i];
 }

 // Step 4: Find the missing number by subtracting actual sum from expected sum
 var missingNumber = expectedSum - actualSum;

 // Step 5: Display the missing number in the browser
 document.write("The missing number in the series is: " + missingNumber + "<br>");