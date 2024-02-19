function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const jobTitleElement = document.getElementById('jobTitle');
const jobTitles = ['Ab Initio Developer'];
let index = 0;

function eraseAndWrite() {
  const currentJobTitle = jobTitles[index];
  let i = 0;

  function typeCharacter() {
    if (i < currentJobTitle.length) {
      jobTitleElement.textContent = currentJobTitle.substring(0, i + 1);
      i++;
      setTimeout(typeCharacter, 100); // Adjust the typing speed (milliseconds)
    } else {
      setTimeout(eraseText, 1000); // Wait for 1 second before erasing
    }
  }

  function eraseText() {
    if (i > 0) {
      jobTitleElement.textContent = currentJobTitle.substring(0, i - 1);
      i--;
      setTimeout(eraseText, 50); // Adjust the erasing speed (milliseconds)
    } else {
      index = (index + 1) % jobTitles.length; // Move to the next job title
      setTimeout(typeCharacter, 500); // Wait for 0.5 second before typing the next title
    }
  }

  typeCharacter(); // Start typing the current job title
}

// Call the function to start the erase-and-write animation
eraseAndWrite();



