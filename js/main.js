/**
 * Created by Alejandra Arteaga on 3/6/2015.
 */
/*console.error("Error Main !")
//
console.log("this is the main program")
var getData = function(){
   var name= window.prompt("Your Name?");
   var age = window.prompt("Your Age?");
   if(age>30)
        console.log("Hey"+name+"ur are an old person");
   else
       console.log("Hey"+name+"ur are an young person");
};
getData();*/
//nombre de la clase escrita con mayuscula inicial
/*
Person= function(name, age){
    this.name=name;
    this.age=age;
};
pepe=new Person('Pepe',13);
pepe.name
//creacion de un metodo especifico SOLO para un objeto (caracteristica solo existe en javascript)
pepe.playSoccer= function(){
    console.log('Pepe is playing soccer')
}
//invoke the method with parenthesis
pepe.playSoccer()
// por ejemplo
paco=new Person('Paco',13);
// no existe el metodo play soccer para el objeto paco
paco.playSoccer()*/
//-------------------------------------
//var age='';//variable Global
//function calculateAge(bornYear){
//    var age = 2014 - bornYear;// variable local
//    return age;
//}
//-------------------------------------
/*var age='';// variable global
function calculateAge(bornYear){
    age = 2014 - bornYear;// variable global
    return age;
}*/
//-------------------------------------
//la variable age es global by default pero esta mal pq deberia ser local
//function calculateAge(bornYear){
//    age = 2014 - bornYear;
//    return age;
//}
//age propiedad del objeto window = variable Global
//> window.age
//> sayBye=function(){console.log('Bye')}
//> window.sayBye
//>calculateAge()
//> NaN //NOT an Number
//>calculateAge(1999,8) // ignora el 2DO Parametro
//>arguments
//>1999,8
//>arguments[0]

/*function calculateAge(bornYear){
    var age = 2014 - argumetns[0];// variable local
    return age;
}*/
function calculateAge(bornYear){
    var age = 2014 - bornYear;// variable local
    return age;
}