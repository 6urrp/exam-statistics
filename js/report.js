function Report () {
    this.date = new Date();
    this.listOfExams = [];
    this.listOfSubjects = ["JavaScript", "PHP", "Web"];
}
Report.prototype.addExam = function (exam) {
    this.listOfExams.push(exam);
}
Report.prototype.getTotalExams = function () {
    return this.listOfExams.length;
}
Report.prototype.getNumberOfPassed = function () {
    var counter = 0;
    this.listOfExams.forEach(function(exam) {
        if (exam.hasPassed()) {
            counter++;
        }
    })
    return counter;
}
Report.prototype.getNumberOfFailed = function () {
    var counter = 0;
    this.listOfExams.forEach(function (exam) {
        if (!exam.hasPassed()) {
            counter++;
        }
    })
    return counter;
}
Report.prototype.getNumberOfAllStudents = function() {
    return this.getNumberOfFailed() + this.getNumberOfPassed();
}
Report.prototype.getPercentageOfFailed = function () {
    var all = this.getNumberOfAllStudents();
    var failed = this.getNumberOfFailed();
    var percentage = (failed / all * 100).toFixed(1);
    if (failed === 0 ) {
        return "";
    } else {
        return percentage += " %"; 
    }
}
