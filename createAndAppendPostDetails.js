function createAndAppendPostDetails(
  tag,
  innerText,
  postId,
  column,
  parent,
  documentNumber,
  selected = false
) {
  let post = document.createElement(tag);
  post.classList.add("post-detail");
  if (tag === "select") {
    if (column === "debitCredit") {
      const options = [...document.getElementById("debitCredit").options];

      const found = options.find((o) => o.value === innerText);
      let indexOfFound = options.indexOf(found);

      if (found) {
        let options_str = "";

        for (let i = 0; i < options.length; i++) {
          const element = options[i];

          options_str += `<option value="${element.value}">${element.value}</option>`;

          post.innerHTML = options_str;
        }
        post.selectedIndex = `${indexOfFound}`;
      }
    }

    if (column === "currency") {
      const currencies = [...document.getElementById("currency").options];

      const found = currencies.find((o) => o.value === innerText);
      let indexOfFound = currencies.indexOf(found);

      let options_str = "";

      for (let i = 0; i < currencies.length; i++) {
        const element = currencies[i];

        options_str += `<option value="${element.value}">${element.value}</option>`;

        post.innerHTML = options_str;
      }
      post.selectedIndex = `${indexOfFound}`;
    }
  } else if (tag === "div") {
    post.innerText = innerText;
    post.addEventListener("click", () => {
      storedData.forEach((element) => (element.selected = false));

      const found = storedData.filter(
        (p) => p.columns.documentNumber === documentNumber
      );

      if (found) {
        found.forEach((element) => {
          element.selected = true;
        });
      }

      render();
    });

    if (selected) {
      post.classList.add("selected");
    }
  } else if (tag === "input" && column === "date") {
    post.type = "date";
    post.value = innerText;
  } else {
    post.value = innerText;
  }

  post.setAttribute("post-id", postId);
  post.setAttribute("data-column", column);
  parent.appendChild(post);

  return post;
}
