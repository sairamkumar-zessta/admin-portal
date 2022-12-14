let instructor = document.getElementById('instructor-nav');
let courses = document.getElementById('course-nav');
let learner = document.getElementById('learner-nav');
let courseTable = document.getElementById('course-table');
let instructorTable = document.getElementById('instructor-table');
let learnerTable = document.getElementById('learner-table');
let addBtn = document.getElementById('add-btn');
let addCourseModal = document.getElementById('addCourseModal');
let courseClose = document.getElementById('courseClose');
let addStudentModal = document.getElementById('addStudentModal');
let studentClose = document.getElementById('studentClose')
courses.onclick = function() {
    addBtn.textContent = "Add Course";
    instructor.classList.remove('active');
    courses.classList.add('active');
    learner.classList.remove('active');
    courseTable.classList.remove('stop-visible');
    instructorTable.classList.add('stop-visible');
    learnerTable.classList.add('stop-visible');
}
instructor.onclick = function() {
    addBtn.textContent = "Add Instructor";
    instructor.classList.add('active');
    courses.classList.remove('active');
    learner.classList.remove('active');
    courseTable.classList.add('stop-visible');
    instructorTable.classList.remove('stop-visible');
    learnerTable.classList.add('stop-visible');
}
learner.onclick = function() {
    addBtn.textContent = "Add Learner";
    instructor.classList.remove('active');
    courses.classList.remove('active');
    learner.classList.add('active');
    courseTable.classList.add('stop-visible');
    instructorTable.classList.add('stop-visible');
    learnerTable.classList.remove('stop-visible');
}
addBtn.onclick = function() {
    if (addBtn.textContent==="Add Course" || addBtn.textContent==="Add Instructor"){
    addCourseModal.classList.remove('stop-visible');
    }
    else if (addBtn.textContent==="Add Learner"){
        addStudentModal.classList.remove('stop-visible');
    }
}
courseClose.onclick = function() {
    addCourseModal.classList.add('stop-visible');
}
studentClose.onclick = function(){
    addStudentModal.classList.add('stop-visible');
}