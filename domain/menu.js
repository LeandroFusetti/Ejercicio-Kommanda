
const MenuPlato=require('./menuPlato')
class Menu{
    

    constructor(){
        this.platos=[]
    }
    agregarPlatoAlMenu(plato){
        const menuPlato= new MenuPlato(plato)   
        this.platos.push(menuPlato)
    }
    buscarPlatoPorNombre(nombre){
       const menuPlato= this.platos.find(item=>item.plato.nombre.toUpperCase() ==nombre.toUpperCase())
       return menuPlato || null
    }
    cambiarEstadoPlatoANoDisponible(nombre){
        const menuPlato= buscarPlatoPorNombre(nombre)
        if(plato){
            menuPlato.cambiarANoDisponible()
        }else return "no se encontro el plato"
    }

}


module.exports=Menu