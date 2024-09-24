import { Equipo } from "../models/Equipo";

export interface IInventario {
    agregarEquipo(nombre: string, tipo: string, estado: string): void;
    listarEquipos(): Equipo[];
}
