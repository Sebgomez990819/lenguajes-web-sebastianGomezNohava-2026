class CuentaBancaria {
    #saldo;
    #titular;

    constructor(titular, saldoInicial) {
        if (saldoInicial < 0) {
            throw new Error("El saldo inicial no puede ser negativo.");
        }

        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    get titular() {
        return this.#titular;
    }

    get saldo() {
        return this.#saldo;
    }

    depositar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a depositar debe ser mayor que cero.");
        }

        this.#saldo += monto;
    }

    retirar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor que cero.");
        }

        if (monto > this.#saldo) {
            throw new Error("Saldo insuficiente.");
        }

        this.#saldo -= monto;
    }

    _obtenerSaldo() {
        return this.#saldo;
    }

    _actualizarSaldo(nuevoSaldo) {
        this.#saldo = nuevoSaldo;
    }
}

class CuentaAhorros extends CuentaBancaria {
    #saldoMinimo;

    constructor(titular, saldoInicial, saldoMinimo) {
        super(titular, saldoInicial);
        this.#saldoMinimo = saldoMinimo;
    }

    retirar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor que cero.");
        }

        const saldoRestante = this._obtenerSaldo() - monto;

        if (saldoRestante < this.#saldoMinimo) {
            throw new Error(
                `No se puede retirar. Debe mantenerse un saldo mínimo de ${this.#saldoMinimo}.`
            );
        }

        this._actualizarSaldo(saldoRestante);
    }
}

class CuentaCorriente extends CuentaBancaria {
    #limiteSobregiro;
    #comisionSobregiro;

    constructor(
        titular,
        saldoInicial,
        limiteSobregiro,
        comisionSobregiro = 10
    ) {
        super(titular, saldoInicial);

        this.#limiteSobregiro = limiteSobregiro;
        this.#comisionSobregiro = comisionSobregiro;
    }

    retirar(monto) {
        if (monto <= 0) {
            throw new Error("El monto a retirar debe ser mayor que cero.");
        }

        let saldoActual = this._obtenerSaldo();

        if (monto <= saldoActual) {
            this._actualizarSaldo(saldoActual - monto);
            return;
        }

        const excedente = monto - saldoActual;

        if (excedente > this.#limiteSobregiro) {
            throw new Error("Se excede el límite de sobregiro.");
        }

        const nuevoSaldo =
            saldoActual -
            monto -
            this.#comisionSobregiro;

        this._actualizarSaldo(nuevoSaldo);
    }
}

module.exports = {
    CuentaBancaria,
    CuentaAhorros,
    CuentaCorriente
};