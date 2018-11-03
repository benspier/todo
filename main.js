const box = document.querySelector("#text-box");
const addButton = document.querySelector("#add-button");
const completedButton = document.querySelector("#completed-button");
const clearButton = document.querySelector("#clear-button");
const list = document.querySelector("list")

//add item with enter key
document.addEventListener("keypress", e => {
  if (box.value !== "") {
    if (e.which === 13) {
      addToList();
    }
  }
});

//add item with button
addButton.addEventListener("click", () => {
  if (box.value !== "") {
    addToList();
  }
});

//remove completed items button
// completedButton.addEventListener("click", () => {

// })

//function
const addToList = () => {
  const li = document.createElement("li");
  const liCheckbox = document.createElement("input");
  const liLabel = document.createElement("label");
  liCheckbox.type = "checkbox";
  liLabel.innerText = box.value;
  box.value = "";
  list.appendChild(li);
  li.appendChild(liCheckbox);
  li.appendChild(liLabel);
};
