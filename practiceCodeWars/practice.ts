let nombre: string = "Juan";
const edad: number = 30;

function sumar(a: number, b: number): number {
    return a + b;
}
interface Persona {
    nombre: string;
    edad: number;
}

function saludar(persona: Persona) {
    return `Hola, ${persona.nombre}`;
}


class Coche {
    marca: string;

    constructor(marca: string) {
        this.marca = marca;
    }

    conducir() {
        console.log(`Conduciendo un ${this.marca}`);
    }
}

const miCoche = new Coche("Toyota");
miCoche.conducir();
