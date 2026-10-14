/* -------------------------------------------------------------------------- */
/*                     Operadores de comparacion y logicos                    */
/* -------------------------------------------------------------------------- */
console.log("5 > 3:", 5 > 3); // true
console.log("5 === '5':", 5 === "5"); // false (estricto)
console.log("7 !== 7:", 7 !== 7); // false

const esMayor = 20 >= 18; // true
const tieneEntrada = false;
console.log("AND:", esMayor && tieneEntrada); // false
console.log("OR :", esMayor || tieneEntrada); // true
console.log("NOT:", !tieneEntrada); // true

/* -------------------------------------------------------------------------- */
/*                                Condicionales                               */
/* -------------------------------------------------------------------------- */
const hora = 21;
if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 19) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches"); // se imprime
}

const edad = 16;
const permisoAdulto = true;
if (edad >= 18 || permisoAdulto) {
  console.log("Puede ver la película +16");
} else {
  console.log("No puede ver la película");
}

/* -------------------------------------------------------------------------- */
/*                                    While                                   */
/* -------------------------------------------------------------------------- */
let i = 1;
while (i <= 5) {
  console.log("i =", i);
  i++;
}

//Suma
let num1 = 10;
let num2 = 1;
let total = 0;
while (num2 <= num1) {
  total += num2;
  num2++;
}
console.log("Suma total:", total);

//Contar vocales en un texto (recorriendo por índice)
let textoOriginal = "Programacion";
let textoMinuscula = textoOriginal.toLowerCase();
let indice = 0;
let cantidadVocales = 0;

//mientras el indice sea menor a la longitud del string
while (indice < textoMinuscula.length) {
  let caracterActual = textoMinuscula[indice];

  if (
    caracterActual === "a" ||
    caracterActual === "e" ||
    caracterActual === "i" ||
    caracterActual === "o" ||
    caracterActual === "u"
  ) {
    cantidadVocales++;
  }
  indice++;
}
console.log("Vocales en", textoOriginal, "=", cantidadVocales);

/* -------------------------------------------------------------------------- */
/*                                      FOR                                   */
/* -------------------------------------------------------------------------- */
//for clasico: (inicializacion, condicion, incremento) - Similar a usar un range()
for (let n = 1; n <= 5; n++) {
  console.log("n =", n);
}

// tabla de multiplicar
let baseTabla = 4;
for (let x = 1; x <= 10; x++) {
  console.log(`${baseTabla} x ${x} = ${baseTabla * x}`);
}

/* -------------------------------------------------------------------------- */
/*                                 FOR STRINGS                                */
/* -------------------------------------------------------------------------- */
//Similar a lo visto en python
let texto = "Hola mundo";

for (const letra of texto) {
  console.log(letra);
}

/* -------------------------------------------------------------------------- */
/*                                   ARRAY                                    */
/* -------------------------------------------------------------------------- */
let frutas = ["manzana", "banana", "pera"];

//Acceso por indice
console.log("frutas[0]:", frutas[0]);

//Longitud de lista
console.log("length:", frutas.length);

// Recorrido clásico
for (let indice = 0; indice < frutas.length; indice++) {
  console.log(`${indice}: ${frutas[indice]}`);
}

// for...of (valores)
for (const fruta of frutas) {
  console.log("for...of:", fruta);
}

//for...in (indices)
for (let indice in frutas) {
  console.log(`${parseInt(indice) + 1}: ${frutas[indice]}`);
}

// push / pop
frutas.push("uva");
console.log("push ->", frutas);

//elimina el ultimo elemento del array (y lo devuelve)
eliminado = frutas.pop();
//Podemos mostrar a quien eliminamos, porque el metodo pop lo devuelve
console.log("Eliminado: ", eliminado);
//Mostramos cómo quedo el array
console.log("pop  ->", frutas);

// Contar pares en un array
let numeros = [5, 8, 12, 3, 9, 14];
let pares = 0;
for (const num of numeros) {
  if (num % 2 === 0) {
    pares++;
  }
}
console.log("Cantidad de pares:", pares);

// Promedio
let sumaNumeros = 0;
for (const valor of numeros) {
  sumaNumeros += valor;
}
console.log("Promedio:", sumaNumeros / numeros.length);

/* -------------------------------------------------------------------------- */
/*                                   SPLICE                                   */
/* -------------------------------------------------------------------------- */
//permite modificar el contenido de un array existente eliminando,
// reemplazando o agregando elementos
//Sintaxis:
// array.splice(inicio, cantidadAEliminar, elemento1, elemento2, ...)

//inicio: El índice donde comenzará a cambiar el array. Si es negativo, cuenta desde el final del array.
//cantidadAEliminar: Un entero que indica el número de elementos a eliminar desde la posición de inicio.
// Si es 0, no se elimina ningún elemento (útil si solo queres agregar).

//elemento1, elemento2... (opcional): Los elementos que se agregarán al array en la posición de inicio

const array = [1, 2, 3];
array.splice(1, 1);
console.log("RESULTADO DE USAR SPLICE:", array);

/* -------------------------------------------------------------------------- */
/*                                   OBJETOS                                  */
/* -------------------------------------------------------------------------- */
let persona = {
  nombre: "Jose",
  edad: 25,
  estudiante: true,
};

//acceso a atributos/claves
console.log(persona.nombre);
console.log(persona["edad"]);

//acceso dinamico
let claveDinamica = "estudiante";
console.log(persona[claveDinamica]);

// Mutacion y nueva propiedad
persona.edad = 26;
persona.ciudad = "Buenos Aires";
console.log("edad:", persona.edad, "| ciudad:", persona.ciudad);

//FOR...OF... en objetos NO recorre nada

// FOR...IN... en objetos recorre CLAVES
for (const clave in persona) {
  console.log(`${clave}: ${persona[clave]}`);
}

/* -------------------------------------------------------------------------- */
/*                              ARRAY DE OBJETOS                              */
/* -------------------------------------------------------------------------- */
let grupo = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Juan", edad: 19 },
  { nombre: "Luz", edad: 30 },
];

// Promedio de edades
let totalEdades = 0;

for (const personaDelGrupo of grupo) {
  totalEdades += personaDelGrupo.edad;
}
console.log("Promedio edades:", totalEdades / grupo.length);

// Filtrar mayores de 21 (armando nuevo array, sin usar metodos de filtro)
let mayores21 = [];
for (const personaDelGrupo of grupo) {
  if (personaDelGrupo.edad >= 21) {
    //metodo push agrega elementos al array
    mayores21.push(personaDelGrupo.nombre);
  }
}
console.log("Mayores de 21:", mayores21);

//Otros ejemplos de array de objetos
let inventario = [
  { nombre: "Lapicera", precio: 200, stock: 10 },
  { nombre: "Cuaderno", precio: 500, stock: 3 },
  { nombre: "Regla", precio: 150, stock: 6 },
];

let totalInventario = 0;
for (const producto of inventario) {
  //Armamos la linea a imprimir para comodidad y menos codigo
  let linea = `Producto: ${producto.nombre} | $${producto.precio} | stock: ${producto.stock}`;

  if (producto.stock < 5) {
    console.log(linea, "  ⚠️  Pocas unidades");
  } else {
    console.log(linea);
  }
  totalInventario += producto.precio * producto.stock;
}
console.log("Valor total del inventario:", totalInventario);
