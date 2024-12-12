// Function to check the user's answer
function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim();
  const correctAnswer = 'print("Hello")';

  // Check if the user's answer is correct
  if (userAnswer === correctAnswer) {
      document.getElementById("result").innerHTML = "Correct! Moving on to Question 2...";
      document.getElementById("hint-button").style.display = "none"; // Hide hint button
      setTimeout(() => {
          // Redirect to the next question (you can change 'question2.html' to your next question page)
          window.location.href = "question2.html"; 
      }, 2000); // 2 seconds delay before redirect
  } else {
      document.getElementById("result").innerHTML = "Oops! That’s not quite right.";
      document.getElementById("hint-button").style.display = "inline"; // Show the hint button
  }
}

// Function to show the hint
function showHint() {
  document.getElementById("hint").style.display = "inline"; // Display the hint
}

// Function to check the user's answer for Question 2
function checkAnswer2() {
  const userAnswer2 = document.getElementById("answer2").value.trim();
  const correctAnswer2 = 'money=2\nprint(money)';

  // Check if the user's answer is correct
  if (userAnswer2 === correctAnswer2) {
      document.getElementById("result2").innerHTML = "Correct! Moving on to Question 3...";
      document.getElementById("hint-button2").style.display = "none"; // Hide hint button
      setTimeout(() => {
          // Redirect to the next question (you can change 'question3.html' to your next question page)
          window.location.href = "question3.html"; 
      }, 2000); // 2 seconds delay before redirect
  } else {
      document.getElementById("result2").innerHTML = "Oops! That’s not quite right.";
      document.getElementById("hint-button2").style.display = "inline"; // Show the hint button
  }
}

// Function to show the hint
function showHint2() {
  document.getElementById("hint2").style.display = "inline"; // Display the hint
}


// Function to check the user's answer for Question 3
function checkAnswer3() {
  const userAnswer3 = document.getElementById("answer3").value.trim();
  const correctAnswer3 = 'a=5\nb=3\nprint(a+b)';

  // Check if the user's answer is correct
  if (userAnswer3 === correctAnswer3) {
      document.getElementById("result3").innerHTML = "Correct! Moving on to Question 4...";
      document.getElementById("hint-button3").style.display = "none"; // Hide hint button
      setTimeout(() => {
          // Redirect to the next question (you can change 'question4.html' to your next question page)
          window.location.href = "question4.html"; 
      }, 2000); // 2 seconds delay before redirect
  } else {
      document.getElementById("result3").innerHTML = "Oops! That’s not quite right.";
      document.getElementById("hint-button3").style.display = "inline"; // Show the hint button
  }
}

// Function to show the hint
function showHint3() {
  document.getElementById("hint3").style.display = "inline"; // Display the hint
}


// Function to check the user's answer for Question 4
function checkAnswer4() {
  const userAnswer4 = document.getElementById("answer4").value.trim();
  const correctAnswerPattern = /result\s*=\s*num\s*\*\s*num/;

  // If the answer contains the correct pattern, it's accepted as correct
  if (correctAnswerPattern.test(userAnswer4)) {
      document.getElementById("result4").innerHTML = "Correct! Moving on to Question 5...";
      document.getElementById("hint-button4").style.display = "none"; // Hide hint button
      setTimeout(() => {
          // Redirect to the next question
          window.location.href = "question5.html"; 
      }, 2000); // 2 seconds delay before redirect
  } else {
      document.getElementById("result4").innerHTML = "Oops! That’s not quite right.";
      document.getElementById("hint-button4").style.display = "inline"; // Show the hint button
  }
}

// Function to show the hint for Question 4
function showHint4() {
  document.getElementById("hint4").style.display = "inline"; // Display the hint
}


// Function to check the user's answer for Question 5
function checkAnswer5() {
  const userAnswer = document.getElementById("answer5").value.trim();
  const correctAnswer = 'string = "hello"\nprint(string.upper())';

  // Check if the user's answer is correct
  if (userAnswer === correctAnswer) {
      document.getElementById("result5").innerHTML = "Correct! You've completed all questions!";
      document.getElementById("hint-button5").style.display = "none"; // Hide hint button
      setTimeout(() => {
          // Redirect to the home page
          window.location.href = "index.html"; 
      }, 2000); // 2 seconds delay before redirect
  } else {
      document.getElementById("result5").innerHTML = "Oops! That’s not quite right.";
      document.getElementById("hint-button5").style.display = "inline"; // Show the hint button
  }
}

// Function to show the hint for Question 5
function showHint5() {
  document.getElementById("hint5").style.display = "inline"; // Display the hint
}
