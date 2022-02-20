function createAndAppendPostDetails(tag, innerText, parent, id) {
  let post = document.createElement(tag);
  post.classList.add("post-detail");

  if (tag === "div") {
    post.innerText = innerText;
  } else if (tag === "input") {
    post.value = innerText;
  }

  post.setAttribute("data-rownumber", id);
  parent.appendChild(post);

  return post;
}
