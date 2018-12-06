(function(exports) {
  addToList = () => {
    const textBox = document.querySelector('#text-box');
    const li = document.createElement('li');
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.type = 'checkbox';
    label.innerText = textBox.value;
    textBox.value = '';
    list.appendChild(li);
    li.appendChild(input);
    li.appendChild(label);
    input.setAttribute('id', n);
    label.setAttribute('for', n);
    n = parseInt(Number(n) + 1);
  };

  exports.addToList = addToList;
})(typeof exports === 'undefined' ? (window.app = {}) : exports);
