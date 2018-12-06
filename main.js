(function(exports) {
  const {
    addToList,
    listHandler,
    addItemReturn,
    addItemButton,
    clearDoneButton
  } = exports.app;
})(typeof exports === 'undefined' ? window : exports);

const body = document.querySelector('body');
const textBox = document.querySelector('#text-box');

const clearButtons = document.querySelector('#clear-buttons-div');
const clearDoneButton = clearButtons.querySelector('#clear-done-button');
const clearAllButton = clearButtons.querySelector('#clear-all-button');
const list = document.querySelector('ul');
let n = '0';

//load page with cursor in text field
textBox.focus();

//click to check/uncheck & style list items
// list.addEventListener('click', e => {
//   if (e.target.tagName === 'INPUT' && e.target.checked === false) {
//     e.target.checked = true;
//     e.target.parentNode.classList.add('done');
//     return;
//   }
//   if (e.target.tagName === 'INPUT' && e.target.checked === true) {
//     e.target.checked = false;
//     e.target.parentNode.classList.remove('done');
//     return;
//   }
//   if (
//     e.target.tagName === 'LABEL' &&
//     e.target.previousSibling.checked === false
//   ) {
//     e.target.previousSibling.checked = true;
//     e.target.parentNode.classList.toggle('done');
//     return;
//   }
//   if (
//     e.target.tagName === 'LABEL' &&
//     e.target.previousSibling.checked === true
//   ) {
//     e.target.previousSibling.checked = false;
//     e.target.parentNode.classList.toggle('done');
//     return;
//   }
//   if (e.target.tagName === 'LI' && e.target.firstChild.checked === false) {
//     e.target.firstChild.checked = true;
//     e.target.classList.toggle('done');
//     return;
//   }
//   if (e.target.tagName === 'LI' && e.target.firstChild.checked === true) {
//     e.target.firstChild.checked = false;
//     e.target.classList.toggle('done');
//     return;
//   }
// });

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
// function addToList() {
//   const li = document.createElement('li');
//   const input = document.createElement('input');
//   const label = document.createElement('label');
//   input.type = 'checkbox';
//   label.innerText = textBox.value;
//   textBox.value = '';
//   list.appendChild(li);
//   li.appendChild(input);
//   li.appendChild(label);
//   input.setAttribute('id', n);
//   label.setAttribute('for', n);
//   n = parseInt(Number(n) + 1);
// }
