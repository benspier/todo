const body = document.querySelector('body');
const textBox = document.querySelector('#text-box');
const addButton = document.querySelector('#add-button');
const clearButtons = document.querySelector('#clear-buttons-div');
const clearDoneButton = clearButtons.querySelector('#clear-done-button');
const clearAllButton = clearButtons.querySelector('#clear-all-button');
const list = document.querySelector('ul');
let n = '0';

//load page with cursor in text field
textBox.focus();

//click to check/uncheck & style list items
list.addEventListener('click', e => {
  if (e.target.tagName === 'INPUT' && e.target.checked === false) {
    e.target.checked = true;
    e.target.parentNode.classList.add('done');
    return;
  }
  if (e.target.tagName === 'INPUT' && e.target.checked === true) {
    e.target.checked = false;
    e.target.parentNode.classList.remove('done');
    return;
  }
  if (
    e.target.tagName === 'LABEL' &&
    e.target.previousSibling.checked === false
  ) {
    e.target.previousSibling.checked = true;
    e.target.parentNode.classList.toggle('done');
    return;
  }
  if (
    e.target.tagName === 'LABEL' &&
    e.target.previousSibling.checked === true
  ) {
    e.target.previousSibling.checked = false;
    e.target.parentNode.classList.toggle('done');
    return;
  }
  if (e.target.tagName === 'LI' && e.target.firstChild.checked === false) {
    e.target.firstChild.checked = true;
    e.target.classList.toggle('done');
    return;
  }
  if (e.target.tagName === 'LI' && e.target.firstChild.checked === true) {
    e.target.firstChild.checked = false;
    e.target.classList.toggle('done');
    return;
  }
});

//spacebar to check/uncheck & style list items
list.addEventListener('keypress', e => {
  if (e.which === 32) {
    if (e.target.tagName === 'INPUT' && e.target.checked === false) {
      e.target.checked = true;
      e.target.parentNode.classList.add('done');
      return;
    }
    if (e.target.tagName === 'INPUT' && e.target.checked === true) {
      e.target.checked = false;
      e.target.parentNode.classList.remove('done');
      return;
    }
    if (
      e.target.tagName === 'LABEL' &&
      e.target.previousSibling.checked === false
    ) {
      e.target.previousSibling.checked = true;
      e.target.parentNode.classList.toggle('done');
      return;
    }
    if (
      e.target.tagName === 'LABEL' &&
      e.target.previousSibling.checked === true
    ) {
      e.target.previousSibling.checked = false;
      e.target.parentNode.classList.toggle('done');
      return;
    }
    if (e.target.tagName === 'LI' && e.target.firstChild.checked === false) {
      e.target.firstChild.checked = true;
      e.target.classList.toggle('done');
      return;
    }
    if (e.target.tagName === 'LI' && e.target.firstChild.checked === true) {
      e.target.firstChild.checked = false;
      e.target.classList.toggle('done');
      return;
    }
  }
});

//add item with return key
textBox.addEventListener('keypress', e => {
  if (textBox.value !== '') {
    if (e.which === 13) {
      if (!list.querySelector('li')) {
        clearButtons.style.visibility = 'visible';
        body.classList.add('responsive-margin');
        textBox.placeholder = 'add something else...';
      }
      addToList();
      textBox.focus();
    }
  }
});

//add-item button
addButton.addEventListener('click', () => {
  if (textBox.value !== '') {
    if (!list.querySelector('li')) {
      clearButtons.style.visibility = 'visible';
      body.classList.add('responsive-margin');
      textBox.placeholder = 'add something else...';
    }
    addToList();
    textBox.focus();
  }
});

//clear-done button
clearDoneButton.addEventListener('click', () => {
  const array = list.querySelectorAll('input:checked');
  array.forEach(function(listItem) {
    listItem.parentNode.remove();
  });
  if (!list.querySelector('li')) {
    clearButtons.style.visibility = 'hidden';
    body.classList.remove('responsive-margin');
    textBox.placeholder = 'start a list...';
  }
  textBox.focus();
});

//clear-all button
clearAllButton.addEventListener('click', () => {
  const array = list.querySelectorAll('li');
  array.forEach(function(listItem) {
    listItem.remove();
  });
  n = '0';
  if (!list.querySelector('li')) {
    clearButtons.style.visibility = 'hidden';
    body.classList.remove('responsive-margin');
    textBox.placeholder = 'start a list...';
  }
  textBox.focus();
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
