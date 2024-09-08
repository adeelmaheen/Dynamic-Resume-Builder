"use strict";
// Get references to the form and the resume sections
var resumeForm = document.getElementById('resume-form');
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumePhone = document.getElementById('resume-phone');
var resumeEducation = document.getElementById('resume-education-content');
var resumeWorkExperience = document.getElementById('resume-work-experience-content');
var resumeSkillsList = document.getElementById('resume-skills-list');
// Listen for form submission
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('work-experience').value;
    var skills = document.getElementById('skills').value;
    // Populate the resume with the form data
    resumeName.textContent = name;
    resumeEmail.textContent = "Email: ".concat(email);
    resumePhone.textContent = "Phone: ".concat(phone);
    resumeEducation.textContent = education;
    resumeWorkExperience.textContent = workExperience;
    // Split skills by commas and create list items
    var skillsArray = skills.split(',').map(function (skill) { return skill.trim(); });
    resumeSkillsList.innerHTML = ''; // Clear current list
    skillsArray.forEach(function (skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill;
        resumeSkillsList.appendChild(listItem);
    });
});
