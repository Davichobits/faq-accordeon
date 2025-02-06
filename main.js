// Selecciona todos los elementos <details> dentro de la sección de la tarjeta
const faqs = document.querySelectorAll('.faq');

// Itera sobre cada <details>
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    console.log(faqs)
    // Cierra todos los <details> excepto el que ha sido clickeado
    faqs.forEach(item => {
      if (item !== faq) {
        item.removeAttribute('open');
      }
    });
  });
});