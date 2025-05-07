const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector(`footer`);
const copyright = document.createElement(`p`);
copyright.innerHTML = `<em> Andrey Gnusarev &copy; <strong> ${thisYear} </strong></em>
                       <div class="social-icons">
                        <a href="https://www.linkedin.com/in/andrey-gnusarev-165185356/"
                             target="_blank" aria-label="LinkedIn">
                        <i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/andreyctd" target="_blank" aria-label="GitHub">
                        <i class="fab fa-github"></i></a><div/>`;
footer.appendChild(copyright);
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