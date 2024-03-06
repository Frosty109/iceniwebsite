// Mobile Menu Toggle

//Toggle Function Defined

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

/* Accordion */

/* const accordionHeadings = document.querySelectorAll(".accordion_heading");

accordionHeadings.forEach((accordionHeading) => 
{
    accordionHeading.addEventListener('click', () => {
        // Get the `.accordion_answer` element that follows the `.accordion_heading`
        const accordionAnswer = accordionHeading.nextElementSibling;
        const height = accordionAnswer.scrollHeight;

        // Get the `.circle` element within the current `.accordion_heading`
        const accordionCircle = accordionHeading.querySelector(".circle");

        // Toggle classes on both the heading and the circle
        accordionHeading.classList.toggle("active_heading");
        accordionCircle.classList.toggle("active_circle");

        // Adjust the max height of the answer to show/hide it
        if (accordionHeading.classList.contains('active_heading')) 
        {
            accordionAnswer.style.maxHeight = `${height}px`;
        } 
        else 
        {
            accordionAnswer.style.maxHeight = '0px';
        }
    });
}); */

// First, select all accordion headings and answers
const accordionHeadings = document.querySelectorAll('.accordion_heading');
const accordionAnswers = document.querySelectorAll('.accordion_answer');

accordionHeadings.forEach((accordionHeading) => {
    accordionHeading.addEventListener('click', () => {
        // Close all open accordion answers except the current one
        accordionAnswers.forEach((accordionAnswer) => {
            if (accordionAnswer !== accordionHeading.nextElementSibling) {
                accordionAnswer.style.maxHeight = '0px';
                // Also reset the classes for all headings and circles except the current ones
                accordionAnswer.previousElementSibling.classList.remove("active_heading");
                const circle = accordionAnswer.previousElementSibling.querySelector(".circle");
                if (circle) circle.classList.remove("active_circle");
            }
        });

        // Now handle the click for the current accordion item
        const accordionAnswer = accordionHeading.nextElementSibling;
        const height = accordionAnswer.scrollHeight;
        const accordionCircle = accordionHeading.querySelector(".circle");

        // Toggle classes on both the heading and the circle
        accordionHeading.classList.toggle("active_heading");
        accordionCircle.classList.toggle("active_circle");

        // Adjust the max height of the answer to show/hide it
        if (accordionHeading.classList.contains('active_heading')) {
            accordionAnswer.style.maxHeight = `${height}px`;
        } else {
            accordionAnswer.style.maxHeight = '0px';
        }
    });
});





