document.addEventListener("DOMContentLoaded", function() {
  const quizForm = document.getElementById("quiz-form");
  
  quizForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const userAnswers = {};
    const questions = document.querySelectorAll('.question');
    
    questions.forEach((question, index) => {
      const questionText = question.querySelector('input[type="hidden"]').value;
      const selectedOption = question.querySelector('input[type="radio"]:checked');
      if (selectedOption) {
        userAnswers[`Question ${index + 1}`] = {
          question: questionText,
          answer: selectedOption.parentElement.textContent.trim()
        };
      }
    });
    
    sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));
    
    window.location.href = "results.html";
  });
});
