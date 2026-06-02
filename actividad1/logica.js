const libros = [
    { titulo: "El Aleph", autor: "Borges", ventas: 500, stock: 10 },
    { titulo: "Rayuela", autor: "Cortázar", ventas: 1200, stock: 2 },
    { titulo: "Ficciones", autor: "Borges", ventas: 850, stock: 5 },
    { titulo: "100 años de soledad", autor: "García Márquez", ventas: 3000, stock: 0 },
];



const titulosMasVendidos = libros
    .filter(libro => libro.ventas > 1000)
    .map(libro => libro.titulo);

console.log("Títulos con más de 1000 ventas:");
console.log(titulosMasVendidos);



const ventasBorges = libros
    .filter(libro => libro.autor === "Borges")
    .reduce((total, libro) => total + libro.ventas, 0);

console.log("Ventas totales de Borges:");
console.log(ventasBorges);



const inventario = libros
    .map(libro => ({
        titulo: libro.titulo,
        estado: libro.stock === 0 ? "Agotado" : "Disponible",
        ventas: libro.ventas
    }))
    .sort((a, b) => b.ventas - a.ventas);

console.log("Inventario ordenado:");
console.log(inventario);