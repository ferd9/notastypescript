interface Character {
    name: string;
    hp:number;
    skils: string[];
    hometown?: string; //opcional
}

//const indica que una variable es constante,
//significa que su valor no va a cambiar.
const strider: Character = {
    name: "capitan",
    hp: 100,
    skils: ["jump", "fly", "teleport"],
    hometown: "Unknow"
};
export {};