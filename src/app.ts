import {Inventario} from "./inventory/Inventario";
import { NotebookFactory, DesktopFactory, ServidorFactory } from "./factories/EquipoFactory";
import { Soporte } from "./observers/Soporte";
import { InventarioViejo } from "./inventory/InventarioViejo";
import { AdaptadorInventario } from "./adapters/AdaptadorInventario";

console.log('Ejercicio 1:');
// Ejemplo Ejercicio 1:
const inventario = Inventario.getInstance();
inventario.agregarEquipo("Notebook HP", "Portátil", "disponible", "Ryzen 7", "8GB");
console.log('Equipo agregado:', inventario.listarEquipos());
// [{ nombre: "Notebook HP", tipo: "Portátil", estado: "disponible" }]

console.log('Ejercicio 2:');
// Ejemplo Ejercicio 2:
const notebookFactory = new NotebookFactory();
const notebook = notebookFactory.create("Notebook", "Notebook HP", "disponible", "Ryzen 7", "8GB", "5500");
console.log(notebook.detalles());
// Nombre: Notebook HP - Tipo: Notebook - Estado: disponible - Procesador: 8GB - RAM: 8GB

console.log('Ejercicio 3:');
// Ejemplo Ejercicio 3:
const soporte = new Soporte(inventario);
notebook.agregarObservadores(soporte);
notebook.cambiarEstado("en reparación");
console.log(notebook.detalles());
console.log(notebook);

console.log('Ejercicio 4:');
// Ejemplo Ejercicio 4:
const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Notebook DELL", "Notebook", "disponible");
console.log(adaptador.listarEquipos());
// [{ nombre: "Notebook DELL", tipo: "Notebook", estado: "disponible" }]