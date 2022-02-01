let countdown = document.querySelector(".count");
setTimeout(() => {
  countdown.innerText = "5";
  setTimeout(() => {
    countdown.innerText = "4";
    setTimeout(() => {
      countdown.innerText = "3";
      setTimeout(() => {
        countdown.innerText = "2";
        setTimeout(() => {
          countdown.innerText = "1";
          setTimeout(() => {
            countdown.innerText = "0";
            setTimeout(() => {
              countdown.innerHTML = `
              <div>
                <img src="./mala.jpg" alt="thiru"/>
                <p class="wishes">
                  Happy Birthday</p> <span><b class="icon">♥</b><b class="icc">☺</b>ThiruMalai<b class="icc">☺</b><b class="icon">♥</b> </span>
                `;
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
});
