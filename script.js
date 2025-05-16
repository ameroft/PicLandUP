document.addEventListener('DOMContentLoaded', function() {
    // Обработчик формы входа
    const loginForm = document.querySelector('.auth-form');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            // Здесь будет логика авторизации
            console.log('Попытка входа:', { email, password, remember });

            // Перенаправление после успешного входа
            // window.location.href = 'index.html';
        });
    }

    // Анимация при загрузке
    const authCard = document.querySelector('.auth-card');
    if (authCard) {
        authCard.style.opacity = '0';
        authCard.style.transform = 'translateY(20px)';
        authCard.style.transition = 'all 0.4s ease-out';

        setTimeout(() => {
            authCard.style.opacity = '1';
            authCard.style.transform = 'translateY(0)';
        }, 100);
    }
});

// Проверка совпадения паролей при регистрации
function validatePassword() {
    const password = document.getElementById('reg-password');
    const confirm = document.getElementById('reg-confirm');

    if (password.value !== confirm.value) {
        confirm.setCustomValidity('Пароли не совпадают');
    } else {
        confirm.setCustomValidity('');
    }
}

// Инициализация проверки
if (document.getElementById('reg-password')) {
    document.getElementById('reg-password').addEventListener('input', validatePassword);
    document.getElementById('reg-confirm').addEventListener('input', validatePassword);
}

// Обработчик выхода
if (document.querySelector('.logout')) {
    document.querySelector('.logout').addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Вы действительно хотите выйти?')) {
            window.location.href = 'index.html';
        }
    });
}

// Карусель постов недели
document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (track && slides.length > 0 && nextBtn && prevBtn) {
        let currentIndex = 0;

        function updateCarousel() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;

            slides.forEach((slide, index) => {
                slide.classList.toggle('active', index === currentIndex);
            });
        }

        nextBtn.addEventListener('click', function() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        });

        prevBtn.addEventListener('click', function() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        });

        // Автопрокрутка (опционально)
        let interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }, 5000);

        // Остановка автопрокрутки при наведении
        const carousel = document.querySelector('.carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', () => clearInterval(interval));
            carousel.addEventListener('mouseleave', () => {
                interval = setInterval(() => {
                    currentIndex = (currentIndex + 1) % slides.length;
                    updateCarousel();
                }, 5000);
            });
        }
    }
});


// Фильтрация постов по категориям
document.addEventListener('DOMContentLoaded', function() {
    const categoryTabs = document.querySelectorAll('.category-tab');

    if (categoryTabs.length > 0) {
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', function() {
                // Удаляем активный класс у всех вкладок
                categoryTabs.forEach(t => t.classList.remove('active'));
                // Добавляем активный класс текущей вкладке
                this.classList.add('active');

                // Здесь будет логика фильтрации постов
                // Пока просто для примера:
                console.log('Выбрана категория:', this.textContent);
            });
        });
    }
});


// Показ превью изображения
document.getElementById('file-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const preview = document.querySelector('.image-preview');
            preview.innerHTML = `<img src="${event.target.result}" alt="Превью">`;
        };
        reader.readAsDataURL(file);
    }
});

