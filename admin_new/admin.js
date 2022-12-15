let instructor = document.getElementById('instructor-nav');
let courses = document.getElementById('course-nav');
let learner = document.getElementById('learner-nav');
let addBtn = document.getElementById('add-btn');
let courseDetails = document.getElementById('courseDetails');
let description = document.getElementById('description');
let req = document.getElementById('req');
let courseCard = document.getElementById('courseCard');
let trainerDetails = document.getElementById('trainerDetails');
let instructorsFilter = document.getElementById('instructors_filter');
let learnerDetails = document.getElementById('learnerDetails');
courses.onclick = function() {
    instructorsFilter.classList.add('stop-visible');
    addBtn.textContent = "Add Course";
    description.textContent = "You can manage Course details here.";
    instructor.classList.remove('active');
    courses.classList.add('active');
    learner.classList.remove('active');
    courseDetails.classList.remove('stop-visible');
    trainerDetails.classList.add('stop-visible');
    learnerDetails.classList.add('stop-visible');
}
instructor.onclick = function() {
    instructorsFilter.classList.remove('stop-visible');
    addBtn.textContent = "Add Trainer";
    description.textContent = "You can manage Trainer details here.";
    instructor.classList.add('active');
    courses.classList.remove('active');
    learner.classList.remove('active');
    courseDetails.classList.add('stop-visible');
    trainerDetails.classList.remove('stop-visible');
    learnerDetails.classList.add('stop-visible');
}
learner.onclick = function() {
    instructorsFilter.classList.add('stop-visible');
    addBtn.textContent = "Add Learners";
    description.textContent = "You can manage Learner details here.";
    instructor.classList.remove('active');
    courses.classList.remove('active');
    learner.classList.add('active');
    courseDetails.classList.add('stop-visible');
    trainerDetails.classList.add('stop-visible');
    learnerDetails.classList.remove('stop-visible');
}
// addBtn.onclick = function() {
//     if (addBtn.textContent==="Add Course" || addBtn.textContent==="Add Instructor"){
//     addCourseModal.classList.remove('stop-visible');
//     }
//     else if (addBtn.textContent==="Add Learner"){
//         addStudentModal.classList.remove('stop-visible');
//     }
// }
// courseClose.onclick = function() {
//     addCourseModal.classList.add('stop-visible');
// }
// studentClose.onclick = function(){
//     addStudentModal.classList.add('stop-visible');
// }