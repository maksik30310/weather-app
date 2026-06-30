// 1. Находим карточку и инпут по их правильным ID
const weatherCard = document.getElementById('weatherCard');
const cityInput = document.getElementById('cityInput');

// 2. Показываем карточку погоды (удаляем класс hidden)
weatherCard.classList.remove('hidden');

// 3. Вешаем слушатель события на инпут
cityInput.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        alert('Кликнули Enter! Скоро здесь будет запрос к OpenWeatherMap.');
    }
});
