const clipboardItem = document.querySelector('[data-clipboard]');

if (clipboardItem) {
  clipboardItem.onclick = ({ currentTarget }) => {
    clipboardFunc(currentTarget.getAttribute('data-clipboard'));
  }
}

function clipboardFunc(value) {
  navigator.clipboard.writeText(value);
}
