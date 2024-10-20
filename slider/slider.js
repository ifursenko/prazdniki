let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
    // Остановить текущее видео
    const currentVideo = slides[currentSlide].querySelector('video');
    if (currentVideo) {
        currentVideo.pause();
    }

    // Изменение текущего слайда
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Прокрутка слайдов
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;

    // Воспроизведение видео на новом слайде
    const newVideo = slides[currentSlide].querySelector('video');
    if (newVideo) {
        newVideo.play();
    }
}

// Автоматическое переключение слайдов каждые 5 секунд
