const textBox = document.querySelector('#text-box');
const addButton = document.querySelector('#add-button');
const clearCompletedButton = document.querySelector('#clear-completed-button');
const clearAllButton = document.querySelector('#clear-all-button');
const list = document.querySelector('ul');

//add item with return key
document.addEventListener('keypress', e => {
  if (textBox.value !== '') {
    if (e.which === 13) {
      addToList();
    }
  }
});

//add-item button
addButton.addEventListener('click', () => {
  if (textBox.value !== '') {
    addToList();
  }
});

//clear-completed button
clearCompletedButton.addEventListener('click', () => {
  const array = list.querySelectorAll('input:checked');
  array.forEach(function (listItem) {
    listItem.parentNode.remove();
  });
});

//clear-all button
clearAllButton.addEventListener('click', () => {
  const array = list.querySelectorAll('li');
  array.forEach(function (listItem) {
    listItem.remove();
  })
});

//function
function addToList() {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  input.type = 'checkbox';
  input.dataset.checkbox = 'unchecked';
  label.innerText = textBox.value;
  textBox.value = '';
  list.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
}
