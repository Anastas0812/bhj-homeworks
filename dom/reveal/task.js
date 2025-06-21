const blocks = document.querySelectorAll('.reveal');

function showBlock() {
  blocks.forEach(block => {
    const rect = block.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      block.classList.add('reveal_active');
    }
  });
}

window.addEventListener('scroll', showBlock);
showBlock();