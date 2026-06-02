# Justificación Arquitectónica
## 1. Análisis de Paradigmas

Para un sistema de gestión de finanzas personales, el enfoque basado en clases ofrece ventajas importantes frente a modelos puramente funcionales o implementaciones mediante objetos literales.

Las clases permiten representar entidades reales del dominio financiero, como cuentas bancarias, cuentas de ahorro y cuentas corrientes, encapsulando tanto los datos como los comportamientos asociados. Esto favorece la cohesión y mejora la mantenibilidad del código.

Un enfoque basado únicamente en objetos literales resulta adecuado para sistemas pequeños, pero se vuelve difícil de escalar cuando aparecen múltiples tipos de productos financieros con reglas específicas.

Por otra parte, el paradigma funcional proporciona beneficios relacionados con la inmutabilidad y la reducción de efectos secundarios. Sin embargo, para modelar entidades persistentes con estado propio, como cuentas bancarias que cambian su saldo mediante transacciones, la orientación a objetos ofrece una representación más natural y comprensible.

Por estas razones, la utilización de clases constituye una solución adecuada para este dominio.

## 2. Seguridad de Datos

La integridad financiera depende de que los saldos y la información de los titulares no puedan modificarse de forma arbitraria desde componentes externos.

La incorporación de miembros privados mediante la sintaxis # de ECMAScript permite restringir completamente el acceso directo a los atributos sensibles. De esta manera, cualquier modificación debe realizarse exclusivamente a través de métodos controlados que implementen las validaciones correspondientes.

Por ejemplo, sin encapsulamiento sería posible ejecutar:

cuenta.saldo = -50000;

lo que produciría un estado inconsistente.

Con campos privados, el saldo únicamente puede alterarse mediante operaciones autorizadas como depósitos y retiros, garantizando el cumplimiento de las reglas de negocio y reduciendo riesgos de corrupción de datos.

## 3. Escalabilidad

La arquitectura propuesta facilita la incorporación de nuevos productos financieros gracias a la herencia.

Si se desea agregar una clase como Credito o CuentaInversion, basta con extender la clase CuentaBancaria mediante la palabra clave extends.

Ejemplo conceptual:

class CuentaInversion extends CuentaBancaria {
    calcularRendimiento() {
        // lógica específica
    }
}

Esta estrategia permite reutilizar la funcionalidad común ya implementada, como validaciones de saldo, acceso a datos y operaciones básicas, mientras que cada producto incorpora únicamente sus reglas particulares.

El resultado es una arquitectura extensible, mantenible y alineada con el principio de abierto/cerrado, según el cual el sistema puede extenderse sin necesidad de modificar componentes ya existentes y probados.