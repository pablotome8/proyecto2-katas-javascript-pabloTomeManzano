// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
const btnToClick = document.getElementById('btnToClick');

btnToClick.addEventListener('click', (event) => {
    console.log('Información del evento click:', event);
});


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focusInput = document.querySelector('input.focus');

focusInput.addEventListener('focus', (event) => {
    console.log('Valor del input en focus:', event.target.value);
});


// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const valueInput = document.querySelector('input.value');

valueInput.addEventListener('input', (event) => {
    console.log('Valor actual del input:', event.target.value);
});