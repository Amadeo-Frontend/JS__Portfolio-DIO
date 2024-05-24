function toggleAccordion(trigger) {
    const accordion = trigger.parentElement;
    const arrow = trigger.querySelector('.arrow');
    const isActive = accordion.classList.contains('active');
  
    accordion.classList.toggle('active');
  
    // Alternar a imagem da seta
    if (isActive) {
      arrow.src = './public/images/trigger-up.svg';
    } else {
      arrow.src = './public/images/trigger-down.svg';
    }
  }
  