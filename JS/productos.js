
class Producto {
    constructor(ID, genero, taco, color, talla, precio, stock, img){
        this.ID = ID;
        this.genero = genero;
        this.taco = taco;
        this.color = color;
        this.talla = talla;
        this.precio = precio;
        this.stock = stock;
        this.img = img;
    }

    };


    const baseDeDatos = [
        new Producto(1,"Hombre","Alto","Rojo", 37, 5000,20,"images/Hombre4.png"),
        new Producto(2,"Hombre","Fino","Blanco", 40, 5000,30,"images/Hombre2.png"),
        new Producto(3,"Hombre","medio","Gris", 42, 5000,10,"images/Hombre3.png"),
        new Producto(4,"Hombre","Alto","Blanco", 37, 5000,20,"images/Hombre4.png"),
        new Producto(5,"Mujer","Alto","Rojo", 37, 5000,20,"images/Mujer2.png"),
        new Producto(6,"Mujer","Alto","Rojo", 37, 5000,20,"images/Mujer3.png"),
        new Producto(7,"Mujer","Alto","Rojo", 37, 5000,20,"images/Mujer4.png"),
        new Producto(8,"Mujer","Alto","Rojo", 37, 5000,20,"images/Mujer2.png"),
       
    ]