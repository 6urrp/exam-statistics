function Subject (name) {
    this.subjectName = name;
}
Subject.prototype.getSubjectName = function () {
    return this.subjectName;
}