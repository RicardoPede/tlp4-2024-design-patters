import { Equipo } from "../models/Equipo";

export interface IEquipoFactory {
  create(nombre: string, estado: string, procesador: string, ram: string, ...extra: string[]): Equipo;
}