const footer = document.createElement(`footer`);
document.body.appendChild(footer);
const today = new Date();
const thisYear = today.getFullYear();
const newFooter = document.querySelector(`footer`);
const copyright = document.createElement(`p`);
copyright.innerHTML = `<em> Andrey Gnusarev &copy; <strong> ${thisYear} </strong></em>
                       <div class="social-icons">
                        <a href="https://www.linkedin.com/in/andrey-gnusarev-165185356/"
                             target="_blank" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/andreyctd" target="_blank" aria-label="GitHub">
                        <i class="fab fa-github"></i></a><div/>`;
newFooter.appendChild(copyright);
/* const footer = document.createElement("footer");
footer.innerHTML = `<p><em> Andrey Gnusarev &copy; <strong> 2025 </strong></em><p/>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/andrey-gnusarev-165185356/"
                             target="_blank" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/andreyctd" target="_blank" aria-label="GitHub">
                        <i class="fab fa-github"></i></a>
                    <div/>`;
/* footer.style.backgroundColor = "rgb(125, 0, 125)";
footer.style.color = "rgb(200, 200, 200)";
footer.style.textAlign = "center";
footer.style.padding = "0px";
footer. style.width = "100%"; */
// document.body.appendChild(footer);
const skills = [`JavaScript`, `HTML`, `CSS`, `GitHub`, `VS Code`, `Soft Skills`, `Problem Solving`,
                `Teamwork`, `Communication`, `Time Management`, `Web Desing`, `Web Development`,
                `Web Accessibility`, `Responsive Design`, `DOM Manipulation`];
const skillsSection = document.getElementById(`skills`);
const skillsList = skillsSection.querySelector(`ul`);
for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement(`li`);
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
} 

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent the page from reloading/refreshing
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;
  console.log("User Name:", usersName);
  console.log("User Email:", usersEmail);
  console.log("User Message:", usersMessage);
  const messageSection = document.getElementById(`messages`);
  const messageList = messageSection.querySelector(`ul`);
  const newMessage = document.createElement(`li`);
  newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a>
                            <span> wrote: ${usersMessage}</span>`;
  // Create a remove button
  const removeButton = document.createElement(`button`);
  removeButton.innerText = `remove`;
  removeButton.type = `button`;
  // Add click event to remove button
  removeButton.addEventListener(`click`, function () {
      const entry = removeButton.parentNode;   // Get/finds the button's parent element using DOM Traversal
      entry.remove();    // Remove the element from the DOM
  });
    // Append the remove button to the new message element
    newMessage.appendChild(removeButton);
    // Append the new message to the message list
    messageList.appendChild(newMessage);
  event.target.reset(); // reset/clear the form
});

fetch(`https://api.github.com/users/andreyctd/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Request failed`);
        }
        return response.json(); // Parse the response as JSON
    })
    .then(data => {
        repositories = data;
        console.log("Repositories:", repositories);
    })
    .catch (error => {
    console.error(`An error occurred:`, error);
    }); 
const projectSection = document.getElementById(`projects`);
const projectList = projectSection.querySelector(`ul`);
for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement(`li`);
    project.innerText = repositories[i].name;
    // Append the new message to the message list
    projectList.appendChild(project);
}