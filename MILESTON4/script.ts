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
    <h2><b>Editable Resume<b><h2>
    <h3>Personal Information</h3>
    <p><b>Name;</b><span content editable="true">${name}</span></p>
    <p><b>Email;</b><span content editable="true">${email}</span></p>
    <p><b>Phone;</b><span content editable="true">${phone}</span></p>

    <h3>Education</h3>
    <p content editable="true">${education}</p>

    <h3>Experience</h3>
    <p content editable="true">${experience}</p>

    <h3>Skills</h3>
    <p content editable="true">${skills}</p>
    `;

    // Display the generataed Resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    
    }else {
        console.error('The resume display element is missing.');
    }

});