const Comanda =require ('./domain/comanda')
const Plato= require('./domain/plato')
const Menu=require('./domain/menu')
const MenuPlato=require('./domain/menuPlato')
const express = require('express')


const fideos= new Plato("fideos","principal",9000)
const gaseosa= new Plato("gaseosa","bebida",3000)
const menu1 = new Menu()

menu1.agregarPlatoAlMenu(fideos)
menu1.agregarPlatoAlMenu(gaseosa)

console.log(menu1.buscarPlatoPorNombre("fideos"))
const comanda1= new Comanda()

comanda1.agregarPlatoAComanda(fideos,menu1)
comanda1.agregarPlatoAComanda(gaseosa,menu1)

console.log(comanda1.platosComanda);


console.log(comanda1.platosComanda);


const app = express()

app.use(express.json())

app.listen(8080,()=>{
    console.log("escuchando");
    
})

app.get("/menu/:id",(req,res)=>{
    const id= req.params
    res.status(200).json({
        id,
        menu1
    })
})

