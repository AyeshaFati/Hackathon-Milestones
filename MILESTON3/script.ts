// Get referance to the form and dispaly area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLFormElement

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();    // prevent page reload

    // collect input value
    const name = (document.getElementById('name') as HTMLFormElement).value
    const email = (document.getElementById('email') as HTMLFormElement).value
    const phone = (document.getElementById('phone') as HTMLFormElement).value
    const education = (document.getElementById('education') as HTMLFormElement).value
    const experience = (document.getElementById('experience') as HTMLFormElement).value
    const skills = (document.getElementById('skills') as HTMLFormElement).value

    // Generate the resume content dynamically
    const resumeHTML =`
    <h2><b>Resume<b><h2>
    <h3>Personal Information</h3>
    <p><b>Name;</b>${name}</p>
    <p><b>Email;</b>${email}</p>
    <p><b>Phone;</b>${phone}</p>

    <h3>Education</h3>
    <p>${education}</p>

    <h3>Experience</h3>
    <p>${experience}</p>

    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    // Display the generataed Resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    
    }else {
        console.error('The resume display element is missing.');
    }

});