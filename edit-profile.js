document.addEventListener('DOMContentLoaded', function() {
    // Изменение аватара
    document.querySelector('.btn-avatar').addEventListener('click', function(e) {
        e.preventDefault();
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';

        input.onchange = function() {
            const file = input.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.querySelector('.avatar-large').src = e.target.result;
                }
                reader.readAsDataURL(file);
            }
        };

        input.click();
    });

    // Удаление аккаунта
    document.querySelector('.delete-account').addEventListener('click', function(e) {
        e.preventDefault();
        if (confirm('Вы уверены, что хотите удалить аккаунт? Это действие нельзя отменить!')) {
            alert('Аккаунт удален (заглушка)');
            window.location.href = 'index.html';
        }
    });

    // Проверка совпадения паролей
    const passwordFields = document.querySelectorAll('.password-section input[type="password"]');
    if (passwordFields.length >= 2) {
        const [currentPass, newPass, confirmPass] = passwordFields;

        confirmPass.addEventListener('input', function() {
            if (newPass.value !== confirmPass.value) {
                confirmPass.setCustomValidity('Пароли не совпадают');
            } else {
                confirmPass.setCustomValidity('');
            }
        });
    }

    // Обработка сохранения профиля
    document.querySelector('.save-btn').addEventListener('click', function(e) {
        e.preventDefault();
        alert('Изменения сохранены (заглушка)');
        // Здесь будет AJAX-запрос для сохранения данных
    });
});
