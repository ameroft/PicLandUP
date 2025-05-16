document.addEventListener('DOMContentLoaded', function() {
    const shareBtn = document.getElementById('shareBtn');
    const shareLinkContainer = document.getElementById('shareLinkContainer');
    const copyBtn = document.getElementById('copyBtn');
    const postLink = document.getElementById('postLink');

    // Обработчик кнопки "Поделиться"
    shareBtn.addEventListener('click', function() {
        shareLinkContainer.style.display = shareLinkContainer.style.display === 'flex' ? 'none' : 'flex';
    });

    // Обработчик кнопки "Копировать"
    copyBtn.addEventListener('click', function() {
        postLink.select();
        document.execCommand('copy');

        // Временное изменение текста кнопки
        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Скопировано!';

        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    });
});
