const body = document.querySelector('body');
const textBoxInput = body.querySelector('#text-box');
const addButton = body.querySelector('#add-button');
const clearButtons = body.querySelector('#clear-buttons-div');
const clearDoneButton = clearButtons.querySelector('#clear-done-button');
const clearAllButton = clearButtons.querySelector('#clear-all-button');
const list = body.querySelector('ul');
let n = 0;

//load page with cursor in text field
textBoxInput.focus();

list.addEventListener('click', e => {
  const element = e.target.closest('li');
  element.firstChild.checked = true;
  element.classList.toggle('done');
  console.log(element);
});

//add item with return key
textBoxInput.addEventListener('keypress', e => {
  if (textBoxInput.value !== '') {
    if (e.which === 13) {
      addToList();
    }
  }
});

//'add item' button
addButton.addEventListener('click', () => {
  if (textBoxInput.value !== '') {
    addToList();
  }
});

//'clear done' button
clearDoneButton.addEventListener('click', () => {
  const array = list.querySelectorAll('input:checked');
  array.forEach(function(listItem) {
    listItem.parentNode.remove();
  });
  if (!list.querySelector('li')) {
    restoreDefaultStyle();
  }
  textBox.focus();
});

//'clear all' button
clearAllButton.addEventListener('click', () => {
  const array = list.querySelectorAll('li');
  array.forEach(function(listItem) {
    listItem.remove();
  });
  restoreDefaultStyle();
});

//functions
function addToList() {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  if (!list.querySelector('li')) {
    listStyle();
  }
  input.type = 'checkbox';
  label.innerText = textBoxInput.value;
  textBoxInput.value = '';
  list.appendChild(li);
  li.appendChild(input);
  li.appendChild(label);
  input.setAttribute('id', n);
  label.setAttribute('for', n);
  n += 1;
  textBoxInput.focus();
}

function listStyle() {
  body.classList.toggle('responsive-margin');
  clearButtons.style.visibility = 'visible';
  textBoxInput.placeholder = 'add something else...';
}

function restoreDefaultStyle() {
  body.classList.toggle('responsive-margin');
  clearButtons.style.visibility = 'hidden';
  textBoxInput.placeholder = 'start a list...';
  n = 0;
  textBoxInput.focus();
}
