//1
class Persona{
    name;
    age;

    constructor(name,age){
        this.name = name;
        this.age = age;
        this.estomago = [];
    }

    comer(comida){
        if(this.estomago.length < 10)   
            this.estomago.push(comida);
        else
            console.log("Ya comiste demasiado");
    }

    cagar(){
        this.estomago.pop();
    }

    toString(){
        return this.name + ", " + this.age;
    }
}
//2
class Car{
    modelo;
    consumo;

    constructor(modelo,consumo){
        this.modelo = modelo;
        this.consumo = consumo;
        this.tanque = 0;
        this.cuentaKm = 0;
    }

    llenar(litros){
        this.tanque += litros;
    }

    conducir(distancia){
    const maxDistancia = this.tanque * this.consumo;

    if (distancia <= maxDistance) {
      this.cuentaKm += distancia;
      this.tank -= distancia / this.consumo;
    } else {
      this.cuentaKm += maxDistancia;
      this.tank = 0;
      return `Me quede sin combustible a ${this.cuentaKm} KM`;
    }
  }
}

//3
class Lambdasiana{
    constructor(objeto){
        this.nombre = objeto.nombre;
        this.edad = objeto.edad;
        this.ubicacion = objeto.ubicacion;
    }

    hablar(){
        return `Hola mi nombre es ${this.nombre} y soy de ${this.ubicacion}`;
    }
}

//4

class Instructor extends Lambdasiana{
    constructor(objeto){
        super(objeto);
        this.especialidad = objeto.especialidad;
        this.lenguajeFav = objeto.lenguajeFav;
        this.muletilla = objeto.muletilla;
    }

    demo(asignatura){
        return `Hoy estamos aprendiendo sobre ${asignatura}`;
    }

    grade(estudiante,asignatura){
        return `${estudiante.nombre} recibe una puntuacion perfecta en ${asignatura}`;
    }

    cambiarNotas(){
        posibilidad = Math.floor(Math.random() * 2) + 1;
        posibilidad == 2 ? Estudiante.calificacion += Math.floor(Math.random() * 25) + 1 : Estudiante.calificacion -= Math.floor(Math.random() * 25) + 1;
    }
}


//5
class Estudiante extends Lambdasiana{
    //Constructor
    constructor(objeto) {
        super({
            nombre: objeto.nombre,
            edad: objeto.edad,
            ubicacion: objeto.ubicacion
        });
        this.antecedentes = objeto.antecedentes;
        this.clase = objeto.clase;
        this.asignaturasFav = objeto.asignaturasFav;
        this.calificacion = objeto.calificacion ?? Math.floor(Math.random() * 100) + 1; //si no la pasa el objeto la crea aleatoriamente
    }

    //Metodos
    listaAsignaturasFav(){
        return this.asignaturasFav.join(", "); 
    }

    asignacion(asignatura){
        return `${this.nombre} ha enviado una solicitud para ${asignatura}`;
    }

    desafio(asignatura){
        return `${this.nombre} ha empezado un desafio para ${asignatura}`;
    }

    posgrado(){
        if(this.calificacion > 70)
            return "enhorabuena, te has graduado!";
        else 
            return "Debes mejorar tu calificacion para poder graduarte";
    }
}

//6
class ProyectoManager extends Instructor{
    //Constructor
    constructor(objeto){
        super({
            nombre: objeto.nombre,
            edad: objeto.edad,
            ubicacion: objeto.ubicacion,
            especialidad: objeto.especialidad,
            lenguajeFav: objeto.lenguajeFav,
            muletilla: objeto.muletilla
        });
        this.gradClassName = objeto.gradClassName;
        this.profesorFav = objeto.profesorFav;
    } 
    //Metodos
    standUp(canal){
        return `${nombre} announces to ${canal}, @channel standy times!`;
    }

    debugsCode(estudiante,asignatura){
        return `${nombre} debugs ${estudiante.nombre}'s code on ${asignatura}`;
    }
}

//7




//GATO

class Gato{
    nombre;
    cansancio;
    hambre;
    soledad;
    felicidad;


    alimentar(cantidad){
         if (this.hambre > 30)
            console.log(this.nombre + " ya comió mucho");
        else
        this.hambre -= cantidad;
    }

    dormir(cantidad){
         if (this.cansancio > 30)
            console.log(this.nombre + " ya durmió demasiado");
        else
        this.cansancio -= cantidad;
    }

    mascota(){
        this.soledad = 0;
    }

    alegrar(cantidad){
        if (this.felicidad > 30)
            console.log(this.nombre + " no quiere ser acariciado");
        else
        this.felicidad += cantidad;
    }

    get status(){
        if (this.cansancio > 10)
            console.log(this.nombre + " esta muy cansado")
        else
            console.log(this.nombre + " tiene mucha energia");

        if (this.hambre > 10)
            console.log(this.nombre + " tiene mucha hambre")
        else
            console.log(this.nombre + " tiene la barriga llena");

        if (this.soledad > 10)
            console.log(this.nombre + " esta muy solo")
        else
            console.log(this.nombre + " esta bien acompañado");

        if (this.felicidad > 10)
            console.log(this.nombre + " esta muy feliz")
        else
            console.log(this.nombre + " esta muy triste");


    }
}


//LIBRERIA
class Libro {
  constructor(titulo, genero, autor, leer = false, fechaLectura = null) {
    this.titulo = titulo;
    this.genero = genero;
    this.autor = autor;
    this.read = read;
    this.fechaLectura = fechaLectura;
  }
}

class Libreria {
  constructor() {
    this.libros = [];
    this.libroActual = null;
    this.siguenteLibro = null;
    this.ultimoLibro = null;
  }

  añadir(libro){
    this.libros.push(libro);
  }

  terminarLibro(){
    this.libroActual
  }
}



//PIEDRA PAPEL TIJERAS


