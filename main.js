(function() {
  const body = document.querySelector('body');
  const inputTextBox = body.querySelector('#text-box');
  const buttonAdd = body.querySelector('#add-button');
  const buttons = body.querySelector('#clear-buttons-div');
  const buttonClearDone = buttons.querySelector('#clear-done-button');
  const buttonClearAll = buttons.querySelector('#clear-all-button');
  const list = body.querySelector('ul');
  let n = 0;

  inputTextBox.focus();

  //event listeners
  inputTextBox.addEventListener('keypress', e => {
    if (inputTextBox.value !== '' && e.which === 13) addListItem();
  });

  buttonAdd.addEventListener('click', () => {
    if (inputTextBox.value !== '') addListItem();
    inputTextBox.focus();
  });

  buttonClearDone.addEventListener('click', () => {
    const array = list.querySelectorAll('input:checked');
    array.forEach(function(listItem) {
      listItem.parentNode.remove();
    });
    !list.querySelector('li')
      ? restoreDefaultBodyStyle()
      : inputTextBox.focus();
  });

  buttonClearAll.addEventListener('click', () => {
    const array = list.querySelectorAll('li');
    array.forEach(function(listItem) {
      listItem.remove();
    });
    restoreDefaultBodyStyle();
    inputTextBox.focus();
  });

  list.addEventListener('click', e => {
    checkBox(e);
    inputTextBox.focus();
  });

  //functions
  function addListItem() {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    if (!list.querySelector('li')) changeBodyStyle();
    list.appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
    input.setAttribute('id', n);
    label.setAttribute('for', n);
    input.type = 'checkbox';
    label.innerText = inputTextBox.value;
    inputTextBox.value = '';
    n += 1;
  }

  function changeBodyStyle() {
    body.classList.toggle('responsive-margin');
    buttons.style.visibility = 'visible';
    inputTextBox.placeholder = 'add something else...';
  }

  function restoreDefaultBodyStyle() {
    body.classList.toggle('responsive-margin');
    buttons.style.visibility = 'hidden';
    inputTextBox.placeholder = 'start a list...';
    n = 0;
  }

  function checkBox(e) {
    const element = e.target.closest('li');
    element.firstChild.checked = true;
    element.classList.toggle('done');
    console.log(element);
  }
})();
