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

loadContent();
