function updateProfileData(e){var t=document.getElementById("profile.photo");t.src=e.photo,t.alt=e.name,document.getElementById("profile.name").innerText=e.name,document.getElementById("profile.job").innerText=e.job,document.getElementById("profile.location").innerText=e.location,document.getElementById("profile.phone").innerText=e.phone,document.getElementById("profile.email").innerText=e.email}(async()=>{updateProfileData(await fetchProfileData())})();