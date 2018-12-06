//click to check/uncheck & style list items
(function(exports) {
  const listHandler = list.addEventListener('click', e => {
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
  });

  exports.listHandler = listHandler;
})(typeof exports === 'undefined' ? window.app : exports);
