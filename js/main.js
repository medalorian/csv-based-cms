function fetchCSV(url) {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      const rows = text.split("\n");
      return rows.map(row => row.split(","));
    });
}

function loadContent() {
  fetchCSV("data/content.csv")
    .then(content => {
      const contentContainer = document.getElementById("content-container");
      if (contentContainer) {
        contentContainer.innerHTML = content.map(row => `<p>${row.join(", ")}</p>`).join("");
      }
    })
    .catch(error => {
      console.error("Error loading content:", error);
    });
}

async function loadNavigation() {
  const navigationData = await fetchCSV("data/navigation.csv");
  const navbar = document.getElementById("navbar");

  if (navbar) {
    navbar.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">GitHub Pages CMS</a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              ${navigationData.map(([label, url]) => `<li class="nav-item"><a class="nav-link" href="${url}">${label}</a></li>`).join("")}
            </ul>
          </div>
        </div>
      </nav>
    `;
  }
}

loadContent();
loadNavigation();
