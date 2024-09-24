import { Equipo } from "./Equipo";

export class Servidor extends Equipo {
    constructor(
      nombre: string, 
      estado: string, 
      procesador: string, 
      ram: string,
      public capacidad: string
    ) {
      super(nombre, "Servidor", estado, procesador, ram);
    }

    detalles() {
      return `${super.detalles()} - Capacidad: ${this.capacidad}`;
    }
  }