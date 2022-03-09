function createAndAppendPostHeaders(id, headerText, columnName) {
  // declare parent element
  const headerContainer = document.getElementById("post-header-container");
  headerContainer.innerHTML = "";

  // create a header element and give proper id and class names
  const header = document.createElement("div");
  header.classList.add("post-header");
  header.setAttribute("id", id);
  header.innerText = headerText;

  // append child to parent
  headerContainer.appendChild(header);

  // create click event to sort posts upon click on header element
  header.addEventListener("click", () => {
    sortBy(storedData, columnName);
    render();
  });
}
