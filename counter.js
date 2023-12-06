function incrementCounter() {
    if (!localStorage.getItem('visitCount')) {
      localStorage.setItem('visitCount', 1);
    } else {
      let count = parseInt(localStorage.getItem('visitCount'));
      count++;
      localStorage.setItem('visitCount', count);
    }
  }
  
  function displayCounter() {
    const countElement = document.getElementById('visitCount');
    if (countElement) {
      countElement.textContent = localStorage.getItem('visitCount') || '0';
    }
  }
  
  window.addEventListener('load', () => {
    incrementCounter();
    displayCounter();
  });
  