window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById('scrollToTopBtn').style.display = 'block';
  } else {
    document.getElementById('scrollToTopBtn').style.display = 'none';
  }
}

// Функция для прокрутки вверх
function scrollToTop() {
  document.body.scrollTop = 0; // Для Safari
  document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
}
