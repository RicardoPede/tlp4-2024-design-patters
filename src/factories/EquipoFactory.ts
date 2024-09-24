import { Notebook } from "../models/Notebook";
import { Desktop } from "../models/Desktop";
import { Servidor } from "../models/Servidor";
import { IEquipoFactory } from "./IEquipoFactory";
import { Equipo } from "../models/Equipo";

export class NotebookFactory implements IEquipoFactory {
  create(nombre: string, estado: string, procesador: string, ram: string, ...extra: string[]): Equipo {
    const [bateria] = extra;
    return new Notebook(nombre, estado, procesador, ram, bateria);
  }
}

export class DesktopFactory implements IEquipoFactory {
  create(nombre: string, estado: string, procesador: string, ram: string, monitor: string, teclado: string, mouse: string): Equipo {
    return new Desktop(nombre, estado, procesador, ram, monitor, teclado, mouse);
  }
}

export class ServidorFactory implements IEquipoFactory {
  create(nombre: string, estado: string, procesador: string, ram: string, capacidad: string): Equipo {
    return new Servidor(nombre, estado, procesador, ram, capacidad);
  }
}