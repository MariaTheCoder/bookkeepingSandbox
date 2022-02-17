function createAndAppendPostDetails(tag, innerText, parent, id) {
  let post = document.createElement(tag);
  post.classList.add("post-detail");
  post.innerText = innerText;
  post.setAttribute("data-rowNumber", id);
  parent.appendChild(post);
  return post;
}
