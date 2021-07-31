var subjectInput = document.querySelector("#subject");
var studentInput = document.querySelector("#student-name");
var gradeInput = document.querySelector("#student-grade");
var numbOfPassed = document.querySelector(".number-of-passed");
var numbOfFailed = document.querySelector(".number-of-failed");
var percentage = document.querySelector(".percentage-of-failed");
var total = document.getElementById("total");
var passedList = document.querySelector(".passed-students")
var failedList = document.querySelector(".failed-students")
var errorText = document.querySelector(".error");
console.log(passedList)

var report = new Report();

function collectAllData () {
    if (studentInput.value === "" || gradeInput.value === "" || subjectInput.options[subjectInput.selectedIndex].text === "-") {
        errorText.textContent = "All fields are required!"
        return;
    }
    var subjectValue = subjectInput.options[subjectInput.selectedIndex].text;
    var studentValue = studentInput.value.split(" ");
    var gradeValue = gradeInput.value;

    var subject = new Subject(subjectValue);
    var student = new Student(studentValue[0], studentValue[1])
    var exam = new Exam(subject, student, gradeValue);
    report.addExam(exam);

    
}

function updateStatistic () {
    numbOfPassed.textContent = report.getNumberOfPassed();
    numbOfFailed.textContent = report.getNumberOfFailed();
    percentage.textContent = report.getPercentageOfFailed();
    total.innerHTML = "Total students: " + report.getNumberOfAllStudents();
}


function updateList() {
    if (studentInput.value === "" || gradeInput.value === "") {
        errorText.textContent = "All fields are required!"
        return;
    }
    
    var subjectValue = subjectInput.options[subjectInput.selectedIndex].text;
    var studentValue = studentInput.value;
    var gradeValue = gradeInput.value;

    if (subjectValue === "JavaScript") {
        subjectValue = "JS";
    }

    if (subjectValue === "-") {
        return;
    }

    var nameLi = document.createElement("li");
    var gradeLi = document.createElement("span");
    gradeLi.innerText = gradeValue;
    nameLi.innerText = subjectValue + " - " + studentValue;

    if (gradeValue > 5) {
        nameLi.className = "name-li";
        gradeLi.className = "grade-li color-passed";
        passedList.append(nameLi);
        nameLi.append(gradeLi)
    } else {
        nameLi.className = "name-li";
        gradeLi.className = "grade-li color-passed";
        failedList.append(nameLi);
        nameLi.append(gradeLi)
    }

    studentInput.value = "";
    gradeInput.value = "";
    subjectInput.value = 0;
    errorText.textContent = "";
}