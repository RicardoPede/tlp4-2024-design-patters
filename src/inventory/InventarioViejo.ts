export class InventarioViejo {
    private items: { nombre: string, tipo: string, estado: string }[] = [];
  
    agregarItem(nombre: string, tipo: string, estado: string) {
      this.items.push({ nombre, tipo, estado });
    }
  
    obtenerItems() {
      return this.items;
    }
  }