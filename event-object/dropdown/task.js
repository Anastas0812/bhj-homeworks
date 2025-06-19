const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const selectedValue = document.querySelector('.dropdown__value');
  const dropDownList = document.querySelector('.dropdown__list');
  const itemLinks = document.querySelectorAll('.dropdown__link');

  selectedValue.addEventListener('click', () => {
    dropDownList.classList.toggle('dropdown__list_active');
  }); 
  //если dropdown__list_active нет, toggle его добавит, если есть - удалит (
  // открыть/закрыть список
  
  itemLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); //не переходим по ссылке
      let text = event.target.textContent.trim();
      selectedValue.textContent = text;
      dropDownList.className = 'dropdown__list';
    });
  });
});

