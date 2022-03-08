function createAndAppendDefaultText(tag, id, innerText, parentId) {
  let parent = document.getElementById(`${parentId}`);
  parent.innerHTML = "";
  let defaultText = document.createElement(tag);

  defaultText.setAttribute("id", id);
  defaultText.innerText = innerText;

  parent.appendChild(defaultText);

  return defaultText;
}
