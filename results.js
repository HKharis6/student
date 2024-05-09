document.addEventListener("DOMContentLoaded", function() {
  const studentDetails = JSON.parse(sessionStorage.getItem("studentDetails"));
  const userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
  console.log("Student Details:", studentDetails);
  console.log("User Answers:", userAnswers);
  
  if (!studentDetails || !userAnswers) {
    console.error("Error: Student details or user answers not found in sessionStorage.");
    return;
  }
  
  const totalQuestions = Object.keys(userAnswers).length;
  
  let correctAnswers = 0;
  
  Object.keys(userAnswers).forEach((key) => {
    if (userAnswers[key].answer === userAnswers[key].correctAnswer) { // Compare user's answer with correct answer
      correctAnswers++;
    }
  });
  
  const score = correctAnswers + "/" + totalQuestions;
  
  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `<h2>Quiz Results</h2>
                                <p><strong>Name:</strong> ${studentDetails.name}</p>
                                <p><strong>Roll Number:</strong> ${studentDetails.rollNumber}</p>
                                <p><strong>Batch:</strong> ${studentDetails.batch}</p>
                                <p><strong>Section:</strong> ${studentDetails.section}</p>
                                <p><strong>Total Score:</strong> ${score}</p>
                                <p><strong>Percentage:</strong> ${(correctAnswers / totalQuestions * 100).toFixed(2)}%</p>`;
});
