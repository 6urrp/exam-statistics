function Exam (subject, student, grade) {
    if (!(subject instanceof Subject) || !(student instanceof Student)) {
        console.log("Invalid")
    }
    this.subject = subject;
    this.student = student;
    this.grade = grade;
} 
Exam.prototype.getExamInfo = function () {
    return this.subject.subjectName + " " + this.student.studentName + " " + this.student.studentSurname;
}
Exam.prototype.hasPassed = function () {
    if (this.grade > 5) {
        return true;
    } else {
        return false;
    }
}