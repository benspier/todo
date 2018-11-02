const box = document.getElementById("text-box");
const button = document.getElementById("button");
const list = document.getElementById("list")

document.addEventListener("keypress", e => {
    if (e.which === 13) {
        addToList()
    }
})

button.addEventListener("click", () => {
    addToList()
})

const addToList = () => {
    const li = document.createElement("li");
    const liCheckbox = document.createElement("input")
    const liLabel = document.createElement("label")
    liCheckbox.type = "checkbox";
    liLabel.innerText = box.value;
    box.value = "";
    list.appendChild(li);
    li.appendChild(liCheckbox)
    li.appendChild(liLabel)
}
