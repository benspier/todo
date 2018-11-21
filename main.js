const textBox = document.querySelector('#text-box');
const addButton = document.querySelector('#add-button');
const clearCompletedButton = document.querySelector('#clear-completed-button');
const clearAllButton = document.querySelector('#clear-all-button');
const list = document.querySelector('ul');
let n = '0';

//load page with cursor in text field
textBox.focus();

list.addEventListener('click', e => {
  if (
    e.target.tagName === 'LI' &&
    e.target.querySelector('input').checked !== 'true'
  ) {
    e.target.classList.toggle('done');
    e.target.querySelector('input').checked = 'true';
  }
  if (
    e.target.tagName === 'LABEL' &&
    e.target.parentNode.querySelector('input').checked !== 'true'
  ) {
    e.target.parentNode.classList.toggle('done');
    e.target.parentNode.querySelector('input').checked = 'true';
  }
});

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
  array.forEach(function(listItem) {
    listItem.parentNode.remove();
  });
});

//clear-all button
clearAllButton.addEventListener('click', () => {
  const array = list.querySelectorAll('li');
  array.forEach(function(listItem) {
    listItem.remove();
  });
  n = '0';
});

//function
function addToList() {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  input.type = 'checkbox';
  label.innerText = textBox.value;
  textBox.value = '';
  list.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
  input.setAttribute('id', n);
  label.setAttribute('for', n);
  n = parseInt(Number(n) + 1);
}
