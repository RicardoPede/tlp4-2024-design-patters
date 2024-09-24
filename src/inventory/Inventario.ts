import { Equipo } from '../models/Equipo';
import { IInventario } from './IInventario';

export class Inventario implements IInventario {
  private static instance: Inventario;
  private equipos: Equipo[] = [];

  private constructor() { }

  static getInstance() {
    if (!Inventario.instance) {
      Inventario.instance = new Inventario();
    }
    return Inventario.instance;
  }

  agregarEquipo(nombre: string, tipo: string, estado: string, procesador?: string, ram?: string) {
    const equipo = new Equipo(nombre, tipo, estado, procesador!, ram!);
    this.equipos.push(equipo);
  }

  listarEquipos() {
    return this.equipos;
  }
}