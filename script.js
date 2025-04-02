document.addEventListener('DOMContentLoaded', () => {
    const itemForm = document.getElementById('item-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
    const clearBtn = document.getElementById('clear');

    // Agregar un ítem
    itemForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newItem = itemInput.value.trim();
        if (newItem === '') return;
        addItemToList(newItem);
        itemInput.value = '';
    });

    // Función para agregar ítem
    function addItemToList(item) {
        const li = document.createElement('li');
        li.innerHTML = `${item} <button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>`;
        itemList.appendChild(li);
    }

    // Eliminar ítems con confirmación
    itemList.addEventListener('click', (e) => {
        if (e.target.closest('.remove-item')) {
            const confirmation = confirm('¿Estás seguro de eliminar este ítem?');
            if (confirmation) {
                e.target.closest('li').remove();
            }
        }
    });

    // Limpiar toda la lista
    clearBtn.addEventListener('click', () => {
        itemList.innerHTML = '';
    });
});
