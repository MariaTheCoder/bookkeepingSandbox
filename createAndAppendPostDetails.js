function createAndAppendPostDetails(tag, innerText, parent) {
  let post = document.createElement(tag);
  post.classList.add("post-detail");
  post.innerText = innerText;
  parent.appendChild(post);
  return post;
}
