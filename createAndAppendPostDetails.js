function createAndAppendPostDetails(
  tag,
  innerText,
  parent,
  documentNumber,
  selected = false
) {
  let post = document.createElement(tag);
  post.classList.add("post-detail");
  if (tag === "select") {
    const options = [...document.getElementById("debitCredit").options];

    const found = options.find((o) => o.value === innerText);

    if (found) {
      let options_str = "";

      for (let i = 0; i < options.length; i++) {
        const element = options[i];

        options_str +=
          '<option value="' +
          element.value +
          '">' +
          element.value +
          "</option>";

        post.innerHTML = options_str;
      }
    } else {
      const currencies = [...document.getElementById("currency").options];
      let options_str = "";

      for (let i = 0; i < currencies.length; i++) {
        const element = currencies[i];

        options_str +=
          '<option value="' +
          element.value +
          '">' +
          element.value +
          "</option>";

        post.innerHTML = options_str;
      }
    }
  } else if (tag === "div") {
    post.innerText = innerText;
    post.addEventListener("click", () => {
      storedData.forEach((element) => (element.selected = false));

      const found = storedData.find((p) => p.documentNumber === documentNumber);

      if (found) {
        found.selected = true;
      }

      render();
    });

    if (selected) {
      post.classList.add("selected");
    }
  } else if (tag === "input") {
    post.value = innerText;
  }

  post.setAttribute("data-rownumber", documentNumber);
  parent.appendChild(post);

  return post;
}
