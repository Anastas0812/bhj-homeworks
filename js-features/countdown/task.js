const timer = document.getElementById('timer');


setInterval(() => {
  timer.textContent = Number(timer.textContent) - 1;
    if (timer.textContent < 10) {
      timer.textContent = 0 + timer.textContent;
      if (timer.textContent === '0-1') {
        alert('Вы победили в конкурсе!');
        //нажмите ок и вы увидите салют :)
        window.location.href = 'https://ru.pinterest.com/pin/14988611253445573/';

      }
    }

}, 1000);


/**
 * если в файле style.css увеличить ширину на 1 пиксель, таймер встанет в одну строку
 * и не будет перескакивать, можно посмотреть на примере 00:00:40 
 * итого width: 401px; спасет ситуацию
 * как я поняла он студентам доступен только для чтения 
 */
