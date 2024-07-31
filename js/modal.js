// Esto obtiene el motal
const modal = document.getElementById('payment-modal');

// Con esto se pone la "X" pa cerrar
const closeBtn = document.querySelector('.close');

// Esto guarda los metodos de pago que hay
const paymentButtons = document.querySelectorAll('.payment-button');

// Pasa el metodo seleccionado al modal
const paymentMethodTitle = document.getElementById('payment-method-title');
const paymentMethodName = document.getElementById('payment-method-name');

// Función para abrir el modal con el método de pago que selecciono
function openModal(method) {
    paymentMethodTitle.textContent = `Método de Pago Seleccionado: ${method}`;
    paymentMethodName.textContent = method;
    modal.style.display = 'block';
}

// Asignar eventos de clic a los botones de métodos de pago
paymentButtons.forEach(button => {
    button.addEventListener('click', () => {
        const method = button.getAttribute('data-method');
        openModal(method);
    });
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Cerrar el modal al hacer clic fuera del contenido del modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Evento para el botón de confirmar pago
document.getElementById('confirm-payment').onclick = function() {
    alert('Se ha pagagdo correctamente con ' + paymentMethodName.textContent);
    modal.style.display = 'none';
}



/* Esta parte fue elaborada a puro prueba y error con IA, así se aprende JS en estos días */