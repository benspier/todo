(function() {
  const body = document.querySelector('body');
  const inputTextBox = body.querySelector('#text-box');
  const buttonAdd = body.querySelector('#add-button');
  const buttonsClear = body.querySelector('#clear-buttons-div');
  const buttonClearDone = buttonsClear.querySelector('#clear-done-button');
  const buttonClearAll = buttonsClear.querySelector('#clear-all-button');
  const list = body.querySelector('ul');
  let n = 1;

  inputTextBox.focus();

  //event handlers
  body.addEventListener('click', e => {
    if (e.target.parentElement === list) {
      const element = e.target;
      !element.firstChild.checked
        ? (element.firstChild.checked = true)
        : (element.firstChild.checked = false);
      element.classList.toggle('done');
      console.log(element.firstChild.checked);
      console.log(e.target);
    }

    if (e.target === buttonAdd) {
      if (!list.querySelector('li')) changeBodyStyle();
      if (inputTextBox.value) addListItem();
      inputTextBox.focus();
    }

    if (e.target === buttonClearDone) {
      const array = list.querySelectorAll('input:checked');
      array.forEach(function(listItem) {
        listItem.parentNode.remove();
      });
      if (!list.querySelector('li')) {
        revertBodyStyle();
        inputTextBox.focus();
      }
    }

    if (e.target === buttonClearAll) {
      const array = list.querySelectorAll('li');
      array.forEach(function(listItem) {
        listItem.remove();
      });
      revertBodyStyle();
      inputTextBox.focus();
    }
  });

  inputTextBox.addEventListener('keypress', e => {
    if (e.key === 'Enter' && !list.querySelector('li')) changeBodyStyle();
    if (e.key === 'Enter' && inputTextBox.value) addListItem();
    inputTextBox.focus();
  });

  //functions
  function addListItem() {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    list.appendChild(li);
    li.appendChild(input);
    input.type = 'checkbox';
    input.setAttribute('id', n);
    li.appendChild(label);
    label.innerText = inputTextBox.value;
    label.setAttribute('for', n);
    inputTextBox.value = '';
    n += 1;
  }

  function changeBodyStyle() {
    body.classList.toggle('list-started');
    buttonsClear.classList.toggle('list-started');
    inputTextBox.placeholder = 'add something else...';
  }

  function revertBodyStyle() {
    body.classList.toggle('list-started');
    buttonsClear.classList.toggle('list-started');
    inputTextBox.placeholder = 'start a list...';
    n = 1;
  }
})();
