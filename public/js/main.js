function updateProfileData(e){var t=document.getElementById("profile.photo");t.src=e.photo,t.alt=e.name,document.getElementById("profile.name").innerText=e.name,document.getElementById("profile.job").innerText=e.job;document.getElementById("profile.location").innerText=e.location;t=document.getElementById("profile.phone"),t.innerText=e.phone,t.href="tel:"+e.phone,t=document.getElementById("profile.email");t.innerText=e.email,t.href="mailto:"+e.email}function updateSoftSkillsData(e){var t=document.getElementById("profile.skills.softSkills");t&&(t.innerHTML="",t.innerHTML=e.skills.softSkills.map(e=>`<li>${e}</li>`).join(""))}function updateHardSkillsData(e){var t=document.getElementById("profile.skills.hardSkills");t&&(t.innerHTML="",t.innerHTML=e.skills.hardSkills.map(e=>`  <li><img src='${e.logo}' alt='${e.name}' title='${e.name}'/></li>
      `).join(""))}function updateLanguageseData(e){var t=document.getElementById("profile.languages");t&&(t.innerHTML="",t.innerHTML=e.languages.map(e=>`  <li>${e}</li>
      `).join(""))}function updateProjectsData(e){var t=document.getElementById("profile.portfolio");t&&(t.innerHTML="",t.innerHTML=e.portfolio.map(e=>`
          <li>
              <div class="git-icon">
                <img src="./public/images/github.svg" alt="github icon" />
                <span>${e.name}</span>
              </div>
              <a href="${e.url}" target="_blank">${e.url}</a>
              <hr />
            </li>
          `).join(""))}function updateExpirienceData(e){const n=document.getElementById("profile.education");n&&(n.innerHTML="",e.education.forEach(e=>{var t=document.createElement("li");t.innerHTML=`
        <strong>${e.degree}, ${e.year}</strong> - ${e.institution}
      `,n.appendChild(t)}))}(async()=>{var e=await fetchProfileData();updateProfileData(e),updateSoftSkillsData(e),updateHardSkillsData(e),updateLanguageseData(e),updateProjectsData(e),updateExpirienceData(e)})();