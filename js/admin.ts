document.getElementById("add-content-form")?.addEventListener("submit", async (event) => {
  event.preventDefault();
  const newContent = (document.getElementById("new-content") as HTMLInputElement).value;
  if (newContent) {
    const content = await fetchCSV("data/content.csv");
    content.push([newContent]);
    // Save the updated CSV data
    // Note: This step requires manual intervention to save the file, as JavaScript cannot directly write files to the repo.
    alert("New content added! Please manually update the content.csv file in the 'data' folder with the new content.");
  }
});
