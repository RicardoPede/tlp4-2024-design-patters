import { InventarioViejo } from "../inventory/InventarioViejo";
import { IInventario } from "../inventory/IInventario";
import { Equipo } from "../models/Equipo";

export class AdaptadorInventario implements IInventario {
    private inventarioViejo: InventarioViejo;
  
    constructor(inventarioViejo: InventarioViejo) {
      this.inventarioViejo = inventarioViejo;
    }
  
    agregarEquipo(nombre: string, tipo: string, estado: string) {
      this.inventarioViejo.agregarItem(nombre, tipo, estado);
    }
  
    listarEquipos(): Equipo[] {
      return this.inventarioViejo.obtenerItems().map(item => new Equipo(item.nombre, item.tipo, item.estado, "", ""));
    }
  }