// script.js
document.getElementById('brawlStarsForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener la opción seleccionada
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert('Por favor, selecciona una opción de gemas o Brawl Pass.');
        return;
    }
    const optionValue = selectedOption.value;

    // Obtener el ID del jugador
    const playerId = document.getElementById('playerId').value.trim();
    if (!playerId) {
        alert('Por favor, ingresa tu ID de Brawl Stars.');
        return;
    }

    // Mostrar un mensaje de confirmación
    alert(`Has seleccionado ${optionValue === 'brawlpass' ? 'Brawl Pass' : optionValue === 'brawlpassplus' ? 'Brawl Pass Plus' : optionValue + ' gemas'} para el ID de jugador ${playerId}.`);

    // Aquí puedes agregar lógica adicional, como enviar los datos a un servidor
});
