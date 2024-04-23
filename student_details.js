document.addEventListener("DOMContentLoaded", function() {
  const studentForm = document.getElementById("student-form");
  
  studentForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const rollNumber = document.getElementById("roll-number").value;
    const name = document.getElementById("name").value;
    const batch = document.getElementById("batch").value;
    const section = document.getElementById("section").value;
    
    const studentDetails = {
      rollNumber: rollNumber,
      name: name,
      batch: batch,
      section: section
    };
    
    sessionStorage.setItem("studentDetails", JSON.stringify(studentDetails));
    
    window.location.href = "quiz.html";
  });
});
