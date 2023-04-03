document.getElementById("add-content-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const newContent = document.getElementById("new-content").value;
  if (newContent) {
    fetchCSV("data/content.csv")
      .then(content => {
        content.push([newContent]);
        // Save the updated CSV data
        // Note: This step requires manual intervention to save the file, as JavaScript cannot directly write files to the repo.
        alert("New content added! Please manually update the content.csv file in the 'data' folder with the new content.");
      })
      .catch(error => {
        console.error("Error loading content:", error);
      });
  }
});
