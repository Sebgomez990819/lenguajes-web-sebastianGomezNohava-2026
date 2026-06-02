function crearSistemaSeguridad(claveInicial) {
    let clave = claveInicial;

    return {
        validarClave(claveIngresada) {
            return claveIngresada === clave;
        },

        cambiarClave(claveActual, nuevaClave) {
            if (claveActual === clave) {
                clave = nuevaClave;
                return true;
            }

            return false;
        }
    };
}



const sistema = crearSistemaSeguridad("Biblioteca2026");

console.log(sistema.validarClave("Biblioteca2026")); 

console.log(
    sistema.cambiarClave("Biblioteca2026", "NuevaClave123")
); 

console.log(
    sistema.validarClave("NuevaClave123")
); 

