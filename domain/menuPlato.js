class MenuPlato{
    #estado
    constructor(plato){
        this.plato=plato
        this.estado="Disponible"
    }
    cambiarANoDisponible(){
        this.estado= "No disponible"
    }
    disponibilizarPlato(){
        this.estado="Disponible"
    }
}

module.exports= MenuPlato