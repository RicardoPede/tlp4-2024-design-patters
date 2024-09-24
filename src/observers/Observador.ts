import { Equipo } from "../models/Equipo";

export interface Observador {
    notificar(equipo: Equipo, newEstado: string): void;
  }