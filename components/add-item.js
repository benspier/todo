//add-item.js
(function(exports) {
  const body = document.querySelector('body');
  const textBox = body.querySelector('#text-box');
  const clearButtons = body.querySelector('#clear-buttons-div');

  function addItem(e) {
    if (textBox.value !== '') {
      if (e.key === 'Enter' || e.target.tagname === 'BUTTON') {
        if (!list.querySelector('li')) {
          clearButtons.style.visibility = 'visible';
          body.classList.add('responsive-margin');
          textBox.placeholder = 'add something else...';
        }
        addToList();
        textBox.focus();
      }
    }
  }

  exports.addItem = addItem;
})(typeof exports === 'undefined' ? window.app : exports);
