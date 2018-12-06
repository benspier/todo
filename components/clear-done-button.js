//clear-done button
(function(exports) {
  const clearButtons = document.querySelector('#clear-buttons-div');
  const clearDoneButton = clearButtons.querySelector('#clear-done-button');
  const clearDoneHandler = clearDoneButton.addEventListener('click', () => {
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

  exports.clearDoneButton = clearDoneHandler;
})(typeof exports === 'undefined' ? window.app : exports);
