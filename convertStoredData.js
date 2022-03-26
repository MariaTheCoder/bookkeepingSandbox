function convertStoredData() {
  const csvRows = [];
  const singleHeaders = [];

  for (let i = 0; i < storedData.length; i++) {
    // variable to store values of one row, or all values of one column object inside of StoredData in form of an array
    const row = [];
    const columns = storedData[i].columns;

    for (const column in columns) {
      // firstly, get the headers just once
      if (i === 0) {
        singleHeaders.push(column);
      }

      // store values of each property inside of the StoredData[i].columns objects inside of innerArray
      // push each value to the array 'row'
      const value = columns[column];
      row.push(value);
    }
    csvRows.push(row);
  }

  //convert headers into a format that can be directly used for our csv file
  const headers = `${singleHeaders.join(";")}\n`;

  return [headers, csvRows];
}
