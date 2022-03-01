function createAndAppendPostDetails(
  tag,
  innerText,
  parent,
  documentNumber,
  selected = false
) {
  let post = document.createElement(tag);
  post.classList.add("post-detail");

  if (tag === "div") {
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
