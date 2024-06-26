function updateProfileData(profileData) {
  const photo = document.getElementById("profile.photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;

  const name = document.getElementById("profile.name");
  name.innerText = profileData.name;
  const job = document.getElementById("profile.job");
  job.innerText = profileData.job;
  const location = document.getElementById("profile.location");
  location.innerText = profileData.location;
  const phone = document.getElementById("profile.phone");
  phone.innerText = profileData.phone;
  phone.href = `tel:${profileData.phone}`;
  const email = document.getElementById("profile.email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`;
}

function updateSoftSkillsData(profileData) {
  // Verifica se o elemento existe antes de tentar acessá-lo
  const softSkillsElement = document.getElementById(
    "profile.skills.softSkills",
  );

  if (softSkillsElement) {
    // Limpa o conteúdo anterior do elemento
    softSkillsElement.innerHTML = "";

    // Atualiza o conteúdo com novas habilidades suaves
    softSkillsElement.innerHTML = profileData.skills.softSkills
      .map(skill => `<li>${skill}</li>`)
      .join("");
  }
}

function updateHardSkillsData(profileData) {
  // Verifica se o elemento existe antes de tentar acessá-lo
  const hardSkillsElement = document.getElementById(
    "profile.skills.hardSkills",
  );

  if (hardSkillsElement) {
    // Limpa o conteúdo anterior do elemento
    hardSkillsElement.innerHTML = "";

    // Atualiza o conteúdo com novas habilidades suaves
    hardSkillsElement.innerHTML = profileData.skills.hardSkills
      .map(
        skill =>
          `  <li><img src='${skill.logo}' alt='${skill.name}' title='${skill.name}'/></li>
      `,
      )
      .join("");
  }
}

function updateLanguageseData(profileData) {
  const languages = document.getElementById("profile.languages");
  if (languages) {
    // Limpa o conteúdo anterior do elemento
    languages.innerHTML = "";

    // Atualiza o conteúdo com novas habilidades suaves
    languages.innerHTML = profileData.languages
      .map(
        languages =>
          `  <li>${languages}</li>
      `,
      )
      .join("");
  }
}

function updateProjectsData(profileData) {
  const portfolioElement = document.getElementById("profile.portfolio");

  if (portfolioElement) {
    portfolioElement.innerHTML = "";
    portfolioElement.innerHTML = profileData.portfolio
      .map(project => {
        return `
          <li>
              <div class="git-icon">
                <img src="./public/images/github.svg" alt="github icon" />
                <span>${project.name}</span>
              </div>
              <a href="${project.url}" target="_blank">${project.url}</a>
              <hr />
            </li>
          `;
      })
      .join("");
  }
}

function updateExpirienceData(profileData) {
  const professionalExperience = document.getElementById(
    "profile.professionalExperience",
  );

  if (professionalExperience) {
    professionalExperience.innerHTML = "";
    professionalExperience.innerHTML = profileData.professionalExperience
      .map(experience => {
        return `
      <li>
      <h2>${experience.name}</h2>
      <div>
        <img src="./public/images/calendar.svg" alt="calendar" />
        <span>${experience.period}</span>
      </div>
      <p>${experience.description}</p>
    </li>
      `;
      })
      .join("");
  }
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileData(profileData);
  updateSoftSkillsData(profileData);
  updateHardSkillsData(profileData);
  updateLanguageseData(profileData);
  updateProjectsData(profileData);
  updateExpirienceData(profileData);
})();
