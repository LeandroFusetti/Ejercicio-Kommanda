const Menu= require('./menu')
class Comanda{
    constructor(){
        this.platosComanda= []
        this.estadoComanda= "Ingresando"
    }
    agregarPlatoAComanda(plato,menu){
        const platoMenu= menu.buscarPlatoPorNombre(plato.nombre)
        if(platoMenu.estado=="Disponible"){

          this.platosComanda.push(plato)
        }else return "plato no disponible"
    }
    buscarPlatoPorNombre(nombre){
        const menuPlato= this.platosComanda.find(platoComanda=>platoComanda.nombre.toUpperCase() ==nombre.toUpperCase())
        return menuPlato || null
     }
     modificarPlatoComanda(nombreDeAPlatoAModificar,menuPlato){
        
        const plato = this.buscarPlatoPorNombre(nombreDeAPlatoAModificar)
        if(plato){
            plato= menuPlato

        }else return "no se encontro el plato"
     }
     eliminarPlato(nombreDeAPlatoAEliminar){
         const plato = this.buscarPlatoPorNombre(nombreDeAPlatoAEliminar)
        if(plato){
            this.platosComanda =this.platosComanda.filter(x=> x !=plato)
        }else return "no se encontro el plato"

     }

}

module.exports=Comanda
