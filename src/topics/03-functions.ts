function saludar(){
    console.log("Hoooooooolaaaaaa");
}

function mostrarSuma(a: number, b: number){
    console.log(a + b);
}

function sumar(a : number, b:number): number{
    return a + b;
}

let resultado: number = sumar(12, 16);

const restar = (a: number, b: number) => {
    return a - b;
}

function operacion(a: number, b?: number, c: number = 5): number{
    return a * c;
}

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = (character: Character, amount: number) => {
    character.hp += amount;
}

const strider: Character = {
    name: "Stride",
    hp: 50,
    showHp(){
        console.log(this.hp);
    }
}