function ejercicio1(cadena){
    let cad = cadena.split("");
    let cont = 0;
    for(let i=0;i<cad.length;i++){
        if(cad[i] == "a"|| cad[i] == "e"||cad[i] == "i"||cad[i] == "o"||cad[i] == "u"){
            cont++;
        }
    }

    return cont;
}

function ejercicio2(num = 100){

    for(let i = 1;i<=num;i++)
        if(i % 3 == 0 && i % 5 == 0){
            console.log("Div 3 + Div 5");
        }
        else{
            if(i % 3 == 0){
            console.log("Div 3");
            }else if(i % 5 == 0) 
                console.log("Div 5");
        }
              
}

function ejercicio3(cadena){
    let cad = cadena.split("");
    let seguir = true;
    let contAperturas = 0;
    let contCierres = 0;

    for(let i = 0;i<cad.length && seguir;i++){
        if(cad[i] == "(")
            contAperturas++;

        if(cad[i] == ")")
            contCierres++;
        
        if(cad[i] == ")" && !cadena.substring(0,i).includes("("))
            seguir = false;
           
        if(cad[i] == "(" && !cadena.substring(i,cadena.length).includes(")"))
            seguir = false;

         if(cad[cadena.length] == ")" && contAperturas != contCierres)
                seguir = false;
    }

    return seguir;
}


function ejercicio4(minutos){
    let segundosTotales = minutos * 60;
    let cont = 0;
    let min = minutos - 1;
    do{
    for(let i = 59;i>=0;i--){
        console.log(`${min} minutos y ${i} segundos`);
    }
    cont++;
    min--;
    }while(cont < minutos)

    console.log("TIEMPO TERMINADO");
}

function ejercicio5(array){
    fechaGanadora = new Date();
    for(let i=0;i<array.length;i++){
        fecha = new Date(array[i]);
        if (fecha.getTime() < fechaGanadora.getTime())
            fechaGanadora = fecha;
    }

    console.log(fechaGanadora);
}
/*
const productos = [
 { id: 1, nombre: "Laptop Gamer", categoria: "Electrónica", precio: 1500, stock: 10 },
 { id: 2, nombre: "Silla de Oficina Ergonómica", categoria: "Hogar", precio: 250, stock: 20 },
 { id: 3, nombre: "Libro 'Clean Code'", categoria: "Libros", precio: 45, stock: 50 }];

function ejercicio6(parametro){
    let total = 0;
    if (productos.categoria == parametro.categoria)
        total = productos.precio * productos.stock;
}
*/

class Cuenta{
    constructor(titular,saldo = 0){
        this.titular = titular;
        this.saldo = saldo;
    }


    depositar(cantidad) {
        this.saldo += cantidad;
    }

    retirar(cantidad){
        let retirada = false;
        if(this.saldo > 0){
            this.saldo -= cantidad;
            retirada = true;
        }

        return retirada;
    }
}


class CuentaCorriente extends Cuenta{
    constructor(titular,saldo,limiteCredito){
        super(
            this.titular = titular,
            this.saldo = saldo
        )
        this.limiteCredito = limiteCredito;
    }

    retirar(cantidad){
        let retirada = false;
        if(cantidad < (this.saldo + this.limiteCredito)){
            this.saldo -= cantidad;
            retirada = true;
        }

        return retirada;
    }
}


class CuentaAhorro extends Cuenta{
    constructor(titular,saldo,tasaInteres){
        super(
            this.titular = titular,
            this.saldo = saldo
        )
        this.tasaInteres = tasaInteres;
    }

    aplicarInteres(){
        this.saldo *= this.tasaInteres;
    }
}