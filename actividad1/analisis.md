# Análisis Técnico del Sistema de Gestión Bibliotecaria
## 1. Mecanismo de Hoisting

El hoisting es un comportamiento del motor de JavaScript mediante el cual las declaraciones son procesadas antes de la ejecución del código. En el caso de las variables declaradas con var, la declaración es elevada al inicio de su ámbito de ejecución, pero no su inicialización.

### Ejemplo:

console.log(libro);
var libro = "El Aleph";

El motor interpreta internamente:

var libro;
console.log(libro);
libro = "El Aleph";

Por esta razón, el resultado será:

undefined

y no un error.

Implicaciones

El uso de var puede generar comportamientos inesperados porque permite acceder a variables antes de que reciban un valor válido. Esto dificulta la depuración y aumenta el riesgo de errores lógicos.

Para evitar estos problemas, ECMAScript moderno recomienda utilizar let y const, las cuales poseen una Temporal Dead Zone (TDZ) que impide su acceso antes de la inicialización.

### Ejemplo:

console.log(libro);
let libro = "El Aleph";

### Resultado:

ReferenceError

Este comportamiento mejora la seguridad y la predictibilidad del código.

## 2. Coerción de Tipos

JavaScript realiza conversiones implícitas de tipos cuando se utiliza el operador de igualdad débil (==).

### Analicemos la expresión:

[] == ![]
### Paso 1

### El operador lógico:

![]

### produce:

false

porque cualquier objeto es considerado truthy.

### La expresión queda:

[] == false
### Paso 2

El operador == intenta convertir ambos operandos a un tipo comparable.

false

### se convierte en:

0

### La comparación queda:

[] == 0
### Paso 3

### El arreglo vacío se convierte a cadena:

[].toString()

### Resultado:

""

### Luego la cadena vacía se convierte a número:

Number("")

### Resultado:

0

### La comparación final es:

0 == 0

### Resultado:

true
### Estrategia de mitigación

Para evitar errores derivados de conversiones implícitas:

Utilizar siempre igualdad estricta (===).
Validar explícitamente los tipos de datos.
Emplear herramientas de análisis estático como ESLint.
Utilizar TypeScript cuando sea posible para agregar tipado estático.

### Ejemplo:

[] === false

### Resultado:

false

sin realizar conversiones implícitas.

## 3. Gestión de Estados Nulos

JavaScript dispone de dos valores especiales para representar ausencia de información:

undefined

Indica que una variable existe pero aún no tiene un valor asignado.

### Ejemplo:

let isbn;
console.log(isbn);

### Resultado:

undefined
null

Representa una ausencia de valor definida de manera explícita.

### Ejemplo:

let isbn = null;
Aplicación al sistema bibliotecario

### Se recomienda utilizar:

undefined

Cuando un dato todavía no ha sido cargado o procesado.

### Ejemplo:

{
    titulo: "El Aleph",
    isbn: undefined
}
null

Cuando se conoce que el dato no existe o no aplica.

### Ejemplo:

{
    titulo: "El Aleph",
    isbn: null
}
Criterio recomendado
undefined: dato pendiente de asignación.
null: ausencia de dato conocida y deliberada.

Esta diferenciación mejora la semántica del modelo de datos y facilita las validaciones dentro del sistema.