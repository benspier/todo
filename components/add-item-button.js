//add-item button
(function(exports) {
  const addButton = document.querySelector('#add-button');
  const addItemButton = addButton.addEventListener('click', () => {
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

  exports.addItemButton = addItemButton;
})(typeof exports === 'undefined' ? window.app : exports);
