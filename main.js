const textBox = document.querySelector('#text-box');
const addButton = document.querySelector('#add-button');
const clearCompletedButton = document.querySelector('#clear-completed-button');
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
  while ((list.querySelector('input').checked = true)) {
    list.querySelector('input:checked + label').remove();
    list.querySelector('input:checked').remove();
  }
});

//function
function addToList() {
  const li = document.createElement('li');
  const liCheckbox = document.createElement('input');
  const liLabel = document.createElement('label');
  liCheckbox.type = 'checkbox';
  liCheckbox.dataset.checkbox = 'unchecked';
  liLabel.innerText = textBox.value;
  textBox.value = '';
  list.appendChild(li);
  li.appendChild(liCheckbox);
  li.appendChild(liLabel);
}
