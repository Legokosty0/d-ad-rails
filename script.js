let currentIndex = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    // Ограничение индекса
    if (index >= totalSlides) currentIndex = 0;
    else if (index < 0) currentIndex = totalSlides - 1;
    else currentIndex = index;

    // Сдвиг слайдов
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Обновление индикаторов
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Автоматическое переключение (каждые 3 секунды)
setInterval(nextSlide, 10000);

// Инициализация первого активного индикатора
dots[0].classList.add('active');