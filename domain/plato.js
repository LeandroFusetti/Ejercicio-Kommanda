class Plato {
    
    #nombre
    #precio
    #categoria
    constructor (nombre,categoria,precio){
        this.nombre =nombre
        this.categoria= categoria
        this.precio=precio
    }
    get nombre(){
        return this.#nombre
    }
    get categoria(){
        return this.#categoria

    }
    get precio(){
        return this.#precio
    }
    set nombre(nombre){
        this.#nombre=nombre
    }
    set categoria(categoria){
        this.#categoria=categoria

    }
    set precio(precio){
        this.#precio = precio
    }

}

module.exports=Plato
