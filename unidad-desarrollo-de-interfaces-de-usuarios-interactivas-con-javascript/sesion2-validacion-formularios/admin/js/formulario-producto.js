const formulario = document.getElementById('formulario-producto');
const inputs = document.querySelectorAll('#formulario-producto input');
const selects = document.querySelectorAll('#formulario-producto select');

const expresiones = {
    Modelo: /^[0-9]{1,6}$/,
    Producto: /^.{4,40}$/,
    Detalle: /^.{10,100}$/,
    Peso: /^[0-9.]{1,6}$/,
    Material: /^.{1,15}$/,
    Stock: /^[0-9]{1,6}$/
}

const campos = {
    Modelo: false,
    Producto: false,
    Detalle: false,
    Peso: false,
    Material: false,
    Stock: false
}

const validarCampo = (expresion, input, campo) => {
    expresion.test(input.value)
        ? (document.getElementById(`${campo}`).classList.add('is-valid'),
            document.getElementById(`${campo}`).classList.remove('is-invalid'),
            campos[campo] = true)
        : (document.getElementById(`${campo}`).classList.add('is-invalid'),
            document.getElementById(`${campo}`).classList.remove('is-valid'),
            campos[campo] = false);
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Modelo":
            validarCampo(expresiones.Modelo, e.target, 'Modelo');
            break;
        case "Producto":
            validarCampo(expresiones.Producto, e.target, 'Producto');
            break;
        case "Detalle":
            validarCampo(expresiones.Detalle, e.target, 'Detalle');
            break;
        case "Peso":
            validarCampo(expresiones.Peso, e.target, 'Peso');
            break;
        case "Material":
            validarCampo(expresiones.Material, e.target, 'Material');
            break;
        case "Stock":
            validarCampo(expresiones.Stock, e.target, 'Stock');
            break;
        case "Talla":
            e.target.value !== ''
                ? (document.getElementById('Talla').classList.remove('is-invalid'),
                    document.getElementById('Talla').classList.add('is-valid'))
                : (document.getElementById('Talla').classList.remove('is-valid'),
                    document.getElementById('Talla').classList.add('is-invalid'))
            break;
        case "Imagen":
            e.target.value !== ''
                ? (document.getElementById('Imagen').classList.remove('is-invalid'),
                    document.getElementById('Imagen').classList.add('is-valid'))
                : (document.getElementById('Imagen').classList.remove('is-valid'),
                    document.getElementById('Imagen').classList.add('is-invalid'))
            break;
    }
}


for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', validarFormulario);
    inputs[i].addEventListener('blur', validarFormulario);
}



let i = 0;
while (i < selects.length) {
    let select = selects[i];
    console.log(select);
    select.addEventListener('blur', validarFormulario);
    i++;
}