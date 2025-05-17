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

// Проверяем, какая тема сохранена в localStorage
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-toggle-dark-icon').classList.add('hidden');
    document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
} else {
    document.documentElement.classList.remove('dark');
    document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
    document.getElementById('theme-toggle-light-icon').classList.add('hidden');
}

// Обработчик кнопки переключения темы
document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');

    // Сохраняем выбранную тему в localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    // Переключаем иконки
    document.getElementById('theme-toggle-dark-icon').classList.toggle('hidden');
    document.getElementById('theme-toggle-light-icon').classList.toggle('hidden');
});