async function fetchProfileData() {
  const url =
    "https://raw.githubusercontent.com/Amadeo-Frontend/JS__Portfolio-DIO/main/src/data/profile.json";
  const fetching = await fetch(url);
  return await fetching.json();
}
