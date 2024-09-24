import { Observador } from "./Observador";
import { Inventario } from "../inventory/Inventario";
import { Equipo } from "../models/Equipo";

export class Soporte implements Observador {
    constructor(
      private inventario: Inventario,
    ) { }
  
    repararEquipo(nombre: string) {
      const equipos = this.inventario.listarEquipos();
      const equipo = equipos.find((equipo) => equipo.nombre === nombre);
      if (equipo) {
        equipo.estado = "en reparación";
      }
    }
  
    notificar(equipo: Equipo, newEstado: string): void {
      console.log(`El equipo ${equipo.nombre} cambió su estado a ${newEstado}`);
    }
  }
  