function createDownloadCSVButton() {
  const buttonContainer = document.getElementById("download-csv-container");
  buttonContainer.innerHTML = "";

  const downloadCSVButton = document.createElement("button");
  downloadCSVButton.innerText = "Download as CSV file";
  downloadCSVButton.setAttribute("id", "download-as-csv");
  downloadCSVButton.setAttribute("class", "buttons");
  downloadCSVButton.addEventListener("click", downloadCSV);

  buttonContainer.appendChild(downloadCSVButton);
  return downloadCSVButton;
}
