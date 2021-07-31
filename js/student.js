function Student (name, surname) {
    this.studentName = name;
    this.studentSurname = surname;
}
Student.prototype.getStudentData = function () {
    return this.studentName + " " + this.studentSurname;
}