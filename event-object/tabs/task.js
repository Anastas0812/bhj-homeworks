document.querySelectorAll('.tabs-group').forEach(group => {
  const tabs = group.querySelectorAll('.tab');
  const tabContents = group.querySelectorAll('.tab__content');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tab_active'));
      tab.classList.add('tab_active');

      tabContents.forEach(c => c.classList.remove('tab__content_active'));
      if (tabContents[index]) {
        tabContents[index].classList.add('tab__content_active');
      }
    });
  });
});

