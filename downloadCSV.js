function downloadCSV() {
  const convertedData = convertStoredData();

  let csv = convertedData[0];

  convertedData[1].forEach((row) => {
    csv += row.join(";");
    csv += "\n";
  });

  let hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  hiddenElement.target = "_blank";

  //provide the name for the CSV file to be downloaded
  hiddenElement.download = "file.csv";
  hiddenElement.click();
}
