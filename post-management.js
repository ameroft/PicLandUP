document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('editModal');
    const closeModal = document.querySelector('.modal-close');
    const cancelBtn = document.querySelector('.btn-cancel');
    const editForm = document.querySelector('.edit-form');

    // Обработчики для кнопок редактирования
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const postItem = this.closest('.post-item');
            const postTitle = postItem.querySelector('.post-title').textContent;
            const postDescription = postItem.querySelector('.post-description').textContent;
            const postCategory = postItem.querySelector('.post-category').textContent;

            // Заполняем форму данными поста
            document.getElementById('edit-title').value = postTitle;
            document.getElementById('edit-description').value = postDescription;
            document.getElementById('edit-category').value = postCategory.toLowerCase();

            // Показываем модальное окно
            modal.style.display = 'flex';
        });
    });
    
      // Обработчики для кнопок удаления
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Вы уверены, что хотите удалить этот пост?')) {
                const postItem = this.closest('.post-item');
                postItem.style.opacity = '0';
                postItem.style.transition = 'opacity 0.3s';

                setTimeout(() => {
                    postItem.remove();
                    // Здесь можно добавить AJAX-запрос для удаления на сервере
                }, 300);
            }
        });
    });

    // Закрытие модального окна
    function closeEditModal() {
        modal.style.display = 'none';
    }

    closeModal.addEventListener('click', closeEditModal);
    cancelBtn.addEventListener('click', closeEditModal);

    // Закрытие при клике вне модального окна
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeEditModal();
        }
    });

    // Обработка формы редактирования
    editForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const newTitle = document.getElementById('edit-title').value;
        const newDescription = document.getElementById('edit-description').value;
        const newCategory = document.getElementById('edit-category').value;

        // Здесь будет код для сохранения изменений (AJAX запрос)
        console.log('Сохранение изменений:', {
            title: newTitle,
            description: newDescription,
            category: newCategory
        });

        // Закрываем модальное окно
        closeEditModal();
        
        // Обновляем данные на странице (временно)
        alert('Изменения сохранены (заглушка)');
    });
});
