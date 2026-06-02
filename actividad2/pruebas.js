const {
    CuentaBancaria,
    CuentaAhorros,
    CuentaCorriente
} = require("./finanzas");



const cuenta1 = new CuentaBancaria(
    "Sebastián Gómez",
    1000
);

cuenta1.depositar(500);
cuenta1.retirar(300);

console.log("Cuenta Bancaria");
console.log(cuenta1.titular);
console.log(cuenta1.saldo);



const ahorro = new CuentaAhorros(
    "Ana Torres",
    2000,
    500
);

ahorro.retirar(1000);

console.log("\nCuenta Ahorros");
console.log(ahorro.titular);
console.log(ahorro.saldo);



const corriente = new CuentaCorriente(
    "Carlos Pérez",
    1000,
    500,
    20
);

corriente.retirar(1200);

console.log("\nCuenta Corriente");
console.log(corriente.titular);
console.log(corriente.saldo);



console.log("\nPrueba de encapsulamiento");
console.log(corriente.saldo);
