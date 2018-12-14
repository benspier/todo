(function() {
  const body = document.querySelector('body');
  const inputTextBox = body.querySelector('#text-box');
  const buttonAdd = body.querySelector('#add-button');
  const buttonsClear = body.querySelector('#clear-buttons-div');
  const buttonClearDone = buttonsClear.querySelector('#clear-done-button');
  const buttonClearAll = buttonsClear.querySelector('#clear-all-button');
  const list = body.querySelector('ul');
  let n = 0;

  inputTextBox.focus();

  //event listeners
  inputTextBox.addEventListener('keypress', e => {
    if (e.key === 'Enter' && !list.querySelector('li')) changeBodyStyle();
    if (e.key === 'Enter' && inputTextBox.value) addListItem();
    inputTextBox.focus();
  });

  buttonAdd.addEventListener('click', () => {
    if (!list.querySelector('li')) changeBodyStyle();
    if (inputTextBox.value) addListItem();
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
    const element = e.target.closest('li');
    element.firstChild.checked = true;
    element.classList.toggle('done');
    console.log(element);
  });

  //functions
  function addListItem() {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
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
    buttonsClear.style.visibility = 'visible';
    inputTextBox.placeholder = 'add something else...';
  }

  function restoreDefaultBodyStyle() {
    body.classList.toggle('responsive-margin');
    buttonsClear.style.visibility = 'hidden';
    inputTextBox.placeholder = 'start a list...';
    n = 0;
  }

  // function checkBox(e) {
  //   const element = e.target.closest('li');
  //   element.firstChild.checked = true;
  //   element.classList.toggle('done');
  // }
})();
