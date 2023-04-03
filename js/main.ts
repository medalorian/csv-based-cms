async function fetchCSV(url: string): Promise<string[][]> {
  const response = await fetch(url);
  const data = await response.text();
  const rows = data.split("\n");
  return rows.map(row => row.split(","));
}

async function loadContent() {
  const content = await fetchCSV("data/content.csv");
  const contentContainer = document.getElementById("content");
  if (contentContainer) {
    contentContainer.innerHTML = content.map(row => `<p>${row.join(", ")}</p>`).join("");
  }
}

loadContent();
