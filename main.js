const box = document.getElementById("text-box");
const button = document.getElementById("button");
const list = document.getElementById("list")

button.addEventListener("click", function () {
    const listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.textContent = box.value;
    box.value = "";
})

// function addToList() {
//     butextContent("click", function () {
//         console.log(textBox.value)
//     })
// }