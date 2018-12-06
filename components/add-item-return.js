//add item with return key
(function(exports) {
  const clearButtons = document.querySelector('#clear-buttons-div');
  const textBox = document.querySelector('#text-box');
  const addItemReturn = textBox.addEventListener('keypress', e => {
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

  exports.addItemReturn = addItemReturn;
})(typeof exports === 'undefined' ? window.app : exports);
