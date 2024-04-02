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


//metodos 
class MiClase {
    private metodoPrivado(): void {
      // Este método solo puede ser llamado desde dentro de la clase.
    }
  
    protected metodoProtegido(): void {
      // Este método puede ser llamado desde dentro de la clase o de clases derivadas.
    }
  
    public metodoPublico(): void {
      // Este método puede ser llamado desde cualquier lugar.
    }
  }

  abstract class Figura {
    abstract calcularArea(): number;
  }
  
  class Circulo extends Figura {
    calcularArea(): number {
      // Implementación del método calcularArea para la clase Circulo
    }
  }
  
  