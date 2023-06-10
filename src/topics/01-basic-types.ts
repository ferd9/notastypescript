/**
 * Entre los tipos de datos en TypeScript podemos encontrar:

    Cadenas de texto (strings)
    Números (number)
    Booleanos (true & false)
    Any
    Arrays
    Tuplas
    Enumerados (enum)
    Void
    Null
    Undefined
    object
 */
//cadena (string)
let name: string = "Strider";

//numeros (number)
let cantidad: number = 5;

//Booleanos (true & false)
let esVerdad: boolean = true;

//any - si a una variable es de tipo any
//significa que puede tener caulquier tipo de dato.
let unaCosa: any = "Hola";
unaCosa = 15;
unaCosa = false;

//Arrays - es un conjuntos de datos que pueden ser
// de un tipo de dato especificos o 
//de diferentes tipos de datos 
// y se definen con corchetes []
let nombres: string[] = ["Jose","manuel","Luis"];
let numeros: number[] = [100, 26, 45.3, 0.256, 10];
let afirmaciones: boolean[] = [true, false, true];
let mixto: any[] = ["pancho", 100, false, 0.26];

//tupla es similar a un arrya, la diferencia
//esta en que debemos definir los tipos de datos
//que tendra cada elemento del array y respetar el orden de este.
let miTupla: [string, number, boolean] = ["hola",15,false];

/**
 * void
 * El tipo void puede considerarse como el opuesto a any,
 * mientras any representa cualquier tipo, 
 * void representa ningún tipo.
 * Algunas funciones como las de imprimir algo
 * son un ejemplo del uso de void ya que estas
 * no retornan ningún valor.
 */
function saludar(): void {
    console.log("Hola Mundo");
}

//enum - un enum se encarga de juntar en un 
//solo tipo de dato un conjunto de constantes.
enum Dias {
    Lunes, //0
    Martes, //1
    Miercoles, //2
    Jueves, //3
    Viernes, //4
    Sabado, //5
    Domingo, //6
  }

  enum DiasDelaSemana {
    Lunes="Lunes",
    Martes="Martes",
    Miercoles="Miercoles",
    Jueves="Jueves",
    Viernes="Viernes",
    Sabado="Sabado",
    Domingo="Domingo",
  }  

  /**
   * En TypeScript, los tipos undefined y null 
   * pueden solo tener el valor undefined y null respectivamente.
   * Así como el tipo void, 
   * los tipos undefined y null no resultan tan útiles.
   */
  let variableSinDefinir: undefined = undefined;
  let variableNula: null = null;

/**
 * En JavaScript, la forma mas básica en la que agrupamos
 * y enviamos datos es a través de objetos.
 * En TypeScript representamos estos a traves 
 * de object types (tipos de objeto).
 */
let objeto = {nombre: "manro", edad: 35};

/**
 * Si no se especifica el tipo de dato
 * a una variable typescript los infiere
 * en base al valor que se le asigne a la 
 * varialbe. 
 */
let apellido = "lopez";
let kilos = 15;
let deNocheSaleElSol = false;

console.log({name, cantidad, apellido, kilos});





export {};