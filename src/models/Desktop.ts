import { Equipo } from "./Equipo";

export class Desktop extends Equipo {
    constructor(
      nombre: string,
      estado: string,
      procesador: string,
      ram: string,
      public monitor: string,
      public teclado: string,
      public mouse: string
    ) {
      super(nombre, "Desktop", estado, procesador, ram);
    }

    detalles() {
      return `${super.detalles()} - Monitor: ${this.monitor} - Teclado: ${this.teclado} - Mouse: ${this.mouse}`;
    }
  }