// Get references to the form and the resume sections
const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
const resumeName = document.getElementById('resume-name') as HTMLElement;
const resumeEmail = document.getElementById('resume-email') as HTMLElement;
const resumePhone = document.getElementById('resume-phone') as HTMLElement;
const resumeEducation = document.getElementById('resume-education-content') as HTMLElement;
const resumeWorkExperience = document.getElementById('resume-work-experience-content') as HTMLElement;
const resumeSkillsList = document.getElementById('resume-skills-list') as HTMLElement;

// Listen for form submission
resumeForm.addEventListener('submit', (event) => {
    event.preventDefault();  // Prevent the form from refreshing the page

    // Get form values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;

    // Populate the resume with the form data
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = education;
    resumeWorkExperience.textContent = workExperience;

    // Split skills by commas and create list items
    const skillsArray = skills.split(',').map(skill => skill.trim());
    resumeSkillsList.innerHTML = '';  // Clear current list
    skillsArray.forEach(skill => {
        const listItem = document.createElement('li');
        listItem.textContent = skill;
        resumeSkillsList.appendChild(listItem);
    });
});
