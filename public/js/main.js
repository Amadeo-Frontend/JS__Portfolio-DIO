function updateProfileData(e){var n=document.getElementById("profile.photo");n.src=e.photo,n.alt=e.name,document.getElementById("profile.name").innerText=e.name,document.getElementById("profile.job").innerText=e.job;document.getElementById("profile.location").innerText=e.location;n=document.getElementById("profile.phone"),n.innerText=e.phone,n.href="tel:"+e.phone,n=document.getElementById("profile.email");n.innerText=e.email,n.href="mailto:"+e.email}function updateSoftSkillsData(e){var n=document.getElementById("profile.skills.softSkills");n&&(n.innerHTML="",n.innerHTML=e.skills.softSkills.map(e=>`<li>${e}</li>`).join(""))}function updateHardSkillsData(e){var n=document.getElementById("profile.skills.hardSkills");n&&(n.innerHTML="",n.innerHTML=e.skills.hardSkills.map(e=>`  <li><img src='${e.logo}' alt='${e.name}' title='${e.name}'/></li>
      `).join(""))}function updateLanguageseData(e){var n=document.getElementById("profile.languages");n&&(n.innerHTML="",n.innerHTML=e.languages.map(e=>`  <li>${e}</li>
      `).join(""))}function updateProjectsData(e){var n=document.getElementById("profile.portfolio");n&&(n.innerHTML="",n.innerHTML=e.portfolio.map(e=>`
          <li>
              <div class="git-icon">
                <img src="./public/images/github.svg" alt="github icon" />
                <span>${e.name}</span>
              </div>
              <a href="${e.url}" target="_blank">${e.url}</a>
              <hr />
            </li>
          `).join(""))}function updateExpirienceData(e){var n=document.getElementById("profile.professionalExperience");n&&(n.innerHTML="",n.innerHTML=e.professionalExperience.map(e=>`
      <li>
      <h2>${e.name}</h2>
      <div>
        <img src="./public/images/calendar.svg" alt="calendar" />
        <span>${e.period}</span>
      </div>
      <p>${e.description}</p>
    </li>
      `).join(""))}(async()=>{var e=await fetchProfileData();updateProfileData(e),updateSoftSkillsData(e),updateHardSkillsData(e),updateLanguageseData(e),updateProjectsData(e),updateExpirienceData(e)})();