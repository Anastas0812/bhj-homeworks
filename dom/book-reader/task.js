const buttons = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');
const textColorButtons = document.querySelectorAll('.book__control_color .color');
const bgColorButtons = document.querySelectorAll('.book__control_background .color');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    buttons.forEach(btn => btn.classList.remove('font-size_active'));

    button.classList.add('font-size_active');
    book.classList.remove('book_fs-small', 'book_fs-big');

    const size = button.dataset.size;
    
    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
  }); 
});

textColorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    textColorButtons.forEach(b => b.classList.remove('color_active'));

    button.classList.add('color_active');
    book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');

    const textColor = button.dataset.textColor;

    if (textColor === 'gray') {
      book.classList.add('book_color-gray');
    } else if (textColor === 'whitesmoke') {
      book.classList.add('book_color-whitesmoke');
    } else if (textColor === 'black') {
      book.classList.add('book_color-black');
    }
  });
});

bgColorButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    bgColorButtons.forEach(b => b.classList.remove('color_active'));

    button.classList.add('color_active');
    book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');

    const bgColor = button.dataset.bgColor;

    if (bgColor === 'black') {
      book.classList.add('book_bg-black');
    } else if (bgColor === 'gray') {
      book.classList.add('book_bg-gray');
    } else if (bgColor === 'white') {
      book.classList.add('book_bg-white');
    }
  });
});