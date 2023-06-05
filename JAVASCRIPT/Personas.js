function Personas(nombre,cedula,fechaNac,email,ciuRes,ciuOri,artista,canciones){

class Persona {
    constructor (nombre,cedula,fechaNac,ciuRes,ciuOri,artista,canciones){
    this.nombre=nombre;
    this.cedula=cedula;
    this.fechaNac=fechaNac;
    this.ciuRes=ciuRes;
    this.ciuOri=ciuOri;
    this.artista=artista;
    this.canciones=canciones;
    }
    detalle () {
       var objDetalle= {nombre:this.nombre, cedula:this.cedula,fechaNac:this.fechaNac,ciuRes:this.ciuRes,ciuOri:this.ciuOri,artista:this.artista,canciones:this.canciones}
       return objDetalle;
    }
 }
 
 //for(i=0;i<6;i++){
 let Concurso=new Persona(nombre,cedula,fechaNac,email,ciuRes,ciuOri,artista,canciones)
 //}
 return Concurso;
}
console.log(Personas("Julian Arango","71366468","28/08/1983","jram828@yahoo.com","Medellin","Yarumal","Los Visconti",["Mama Vieja","El cristo de la pared","La copa rota"]));
console.log(Personas("Julian Pemberty","71366478","25/07/1983","jram838@yahoo.com","Medellin","Medellin","Dario Gomez",["Relicario","El cristo de la pared","La copa rota"]));
//console.log(Persona)