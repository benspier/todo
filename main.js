(function() {
  const body = document.querySelector('body');
  const textBoxInput = body.querySelector('#text-box');
  const addButton = body.querySelector('#add-button');
  const clearButtons = body.querySelector('#clear-buttons-div');
  const clearDoneButton = clearButtons.querySelector('#clear-done-button');
  const clearAllButton = clearButtons.querySelector('#clear-all-button');
  const list = body.querySelector('ul');
  let n = 0;

  textBoxInput.focus();

  //event listeners
  textBoxInput.addEventListener('keypress', e => {
    if (textBoxInput.value !== '') {
      if (e.which === 13) {
        addToList();
      }
    }
  });

  addButton.addEventListener('click', () => {
    if (textBoxInput.value !== '') {
      addToList();
    }
  });

  clearDoneButton.addEventListener('click', () => {
    const array = list.querySelectorAll('input:checked');
    array.forEach(function(listItem) {
      listItem.parentNode.remove();
    });
    if (!list.querySelector('li')) {
      restoreDefaultBodyStyle();
    }
    textBox.focus();
  });

  clearAllButton.addEventListener('click', () => {
    const array = list.querySelectorAll('li');
    array.forEach(function(listItem) {
      listItem.remove();
    });
    restoreDefaultBodyStyle();
  });

  list.addEventListener('click', e => {
    checkBox(e);
  });

  //functions
  function addToList() {
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    if (!list.querySelector('li')) {
      changeBodyStyle();
    }
    list.appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
    input.setAttribute('id', n);
    label.setAttribute('for', n);
    input.type = 'checkbox';
    label.innerText = textBoxInput.value;
    textBoxInput.value = '';
    n += 1;
    textBoxInput.focus();
  }

  function changeBodyStyle() {
    body.classList.toggle('responsive-margin');
    clearButtons.style.visibility = 'visible';
    textBoxInput.placeholder = 'add something else...';
  }

  function restoreDefaultBodyStyle() {
    body.classList.toggle('responsive-margin');
    clearButtons.style.visibility = 'hidden';
    textBoxInput.placeholder = 'start a list...';
    n = 0;
    textBoxInput.focus();
  }

  function checkBox(e) {
    const element = e.target.closest('li');
    element.firstChild.checked = true;
    element.classList.toggle('done');
    console.log(e.target);
    console.log(element);
  }
})();
