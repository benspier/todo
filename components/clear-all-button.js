//clear-all button
(function(exports) {
  const clearButtons = document.querySelector('#clear-buttons-div');
  const clearAllButton = clearButtons.querySelector('#clear-all-button');
  const clearAllHandler = clearAllButton.addEventListener('click', () => {
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

  exports.clearAllButton = clearAllHandler;
})(typeof exports === 'undefined' ? window.app : exports);
