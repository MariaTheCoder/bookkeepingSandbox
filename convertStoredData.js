function convertStoredData() {
  let myArray = [];
  let singleHeaders = [];

  for (let i = 0; i < storedData.length; i++) {
    const object = storedData[i].columns;
    // variable to store values of one row, or all values of one column object inside of StoredData in form of an array
    let row = [];

    for (const key in object) {
      // firstly, get the headers just once
      if (i === 0) {
        singleHeaders.push(key);
      }

      // store values of each property inside of the StoredData[i].columns objects inside of innerArray
      // push each value to the array 'row'
      const value = object[key];
      row.push(value);
    }
    myArray.push(row);
  }

  //convert headers into a format that can be directly used for our csv file
  const headers = `${singleHeaders.join(";")}\n`;

  return [headers, myArray];
}
