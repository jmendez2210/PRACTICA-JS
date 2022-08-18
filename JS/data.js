//NUEVOS PRODUCTOS PARA MOSTRAR VEHICULOS EN COTIZAR

class modelos {
    constructor (id,marca,modelo,version,color,precio){
        this.id = id
        //this.img = img
        this.marca = marca
        this.modelo = modelo
        this.version = version
        this.color = color
        this.precio = precio
        

    }
}
let vehiculos = []
vehiculos.push( new modelos(0, "Peugeot", "3008", "Nuevo 3008 GT HYBRID4 300 eEAT8", "Blanco", 47090000)) 
vehiculos.push( new modelos(1, "Peugeot", "New 3008", "Active Pack Puretech 130 MT6", "Rojo", 45090000)) 
vehiculos.push( new modelos(2, "Peugeot", "HYBRID4 3008", "Active Pack BlueHDI 130 MT6", "Azul", 42090000)) 
vehiculos.push( new modelos(3, "Peugeot", "3008", "GT Puretech 180 EAT8", "Azul", 42090000)) 



let cotizador = []


