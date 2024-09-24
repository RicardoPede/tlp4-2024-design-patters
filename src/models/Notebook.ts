import { Equipo } from "./Equipo";

export class Notebook extends Equipo {
    constructor(
      nombre: string, 
      estado: string, 
      procesador: string, 
      ram: string,
      public bateria: string
    ) {
      super(nombre, "Notebook", estado, procesador, ram);
    }

    detalles() {
      return `${super.detalles()} - Batería: ${this.bateria}`;
    }
  }