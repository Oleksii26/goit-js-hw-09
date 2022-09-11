function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }


  const refs = {
    start: document.querySelector('[data-start'),
    stop: document.querySelector('[data-stop'),
  };
  
  const TIME_INTERVAL = 1000;
  let timerId = null;
  refs.stop.disabled = true;
  
   
  function onClickStart() {
    refs.start.disabled = true;
    refs.stop.disabled = false;
  
    timerId = setInterval(() => {
      document.body.style.backgroundColor = getRandomHexColor();
    }, TIME_INTERVAL);
  }
  
  function onClickStop() {
    refs.start.disabled = false;
    refs.stop.disabled = true;
  
    clearInterval(timerId);
  }
  
  refs.start.addEventListener('click', onClickStart);
  refs.stop.addEventListener('click', onClickStop);