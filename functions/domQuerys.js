
'use strict';

function addForm(nombre, apellido) {
    if( document.querySelectorAll('#extension-form').length == 0 ) {
        var nombreElement = document.createElement('input');
        nombreElement.value = `${nombre}`;
        nombreElement.className = 'form-control';
    
        var apellidoElement = document.createElement('input');
        apellidoElement.value = `${apellido}`;
        apellidoElement.className = 'form-control';

        var div = document.createElement('div');
        div.id = 'extension-form';
        div.className = 'row';
        div.appendChild(nombreElement);
        div.appendChild(apellidoElement);

        var elementoPadre = document.querySelector('header');
        elementoPadre.appendChild(div);
    }
}

function deleteForm() {
    if( document.querySelectorAll('#extension-form').length > 0 ) {
        document.querySelector('#extension-form').remove();
    }
}