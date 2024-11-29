// Получаем все изображения с классом 'project-image'
const images = document.querySelectorAll('.masonry-item__image');

// Получаем элементы модального окна
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModalButton = document.getElementById('close-modal');

// Открытие модального окна с увеличенной картинкой
images.forEach(image => {
  image.addEventListener('click', function() {
    const imageSrc = this.src; // Получаем путь к изображению
    modalImage.src = imageSrc; // Устанавливаем путь изображения в модальном окне
    modal.style.display = 'flex'; // Показываем модальное окно
  });
});

// Закрытие модального окна
closeModalButton.addEventListener('click', function() {
  modal.style.display = 'none'; // Скрываем модальное окно
});

// Закрытие модального окна при клике на фон
modal.addEventListener('click', function(e) {
  if (e.target === modal) {
    modal.style.display = 'none'; // Скрываем модальное окно при клике на фон
  }
});