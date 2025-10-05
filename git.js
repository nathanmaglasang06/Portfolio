var gitprojects = document.querySelector(".container");

fetch("https://api.github.com/users/nathanmaglasang06/repos")
  .then((response) =>
    response.ok ? response.json() : Promise.reject(response.statusText)
  )
  .then((repos) => {
    for (let i = 0; i < repos.length; i++) {
      if (repos[i].stargazers_count !== 0) {
        // Create repo card with placeholder for commit count
        var proj = `
          <div class="projects-container">
            <div class="header_work">
            <div class="title_work"><strong>${repos[i].name}</strong></div>

            </div>
            <div class="description_work">${
              repos[i].description || "No description"
            }</div>
            
            <div class="links">
              <a href="https://github.com/nathanmaglasang06/${
                repos[i].name
              }" target="_blank">Github Repo</a>
      
              <div class="commits" id="commits-${repos[i].name}">
              <em>Loading commits...</em>
            </div>
            </div>
          </div>
        `;
        gitprojects.insertAdjacentHTML("beforeend", proj);

        // Fetch commits for this repo
        fetch(
          `https://api.github.com/repos/nathanmaglasang06/${repos[i].name}/commits`
        )
          .then((res) => (res.ok ? res.json() : Promise.reject(res.statusText)))
          .then((commits) => {
            let commitDiv = document.querySelector(`#commits-${repos[i].name}`);
            commitDiv.innerHTML = `Total Commits: <strong>${commits.length}</strong>`;
          })
          .catch((err) => {
            let commitDiv = document.querySelector(`#commits-${repos[i].name}`);
            commitDiv.innerHTML = `<em>Could not load commits</em>`;
          });
      }
    }
  })
  .catch((err) => console.log(err));
