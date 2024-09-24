import { Observador } from '../observers/Observador';

export class Equipo {

    private observadores: Observador[] = [];
  
    constructor(
      public nombre: string,
      public tipo: string,
      public estado: string,
      public procesador: string,
      public ram: string
    ) { }
  
    detalles(): string {
      return `Nombre: ${this.nombre} - Tipo: ${this.tipo} - Estado: ${this.estado} - Procesador: ${this.procesador} - RAM: ${this.ram}`;
    }
  
    agregarObservadores(observador: Observador): void {
      this.observadores.push(observador);
    }
  
    cambiarEstado(newEstado: string): void {
      this.estado = newEstado;
      this.notificarObservadores();
    }
  
    private notificarObservadores(): void {
      for (const observador of this.observadores) {
        observador.notificar(this, this.estado);
      }
    }
  
  }