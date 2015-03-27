/**
 * Created by Alejandra Arteaga on 3/20/2015.
 */
/*var sayhello=function(){
    console.log("hello");
};
sayhello();*/
// anonymous functions
/*(function(){
    console.log("hello");
})();*/
/*
var sayhello=function(name){
    console.log("hello "+name)+'!';
};
sayhello('Leo');

*/
//anonymous function
(function(name){
    console.log("hello "+name +'!');
})('Linda');

(function(name, lastname){
    console.log("hello "+name+' '  +lastname +'!');
})('Linda', 'Flores');

//FUNCTIONS ANINADAS
/*var Person= function(name,age){
    //constructor
    this.name=name;
    this.age=age;
    //Functions anidada : getAge anf getHistory
    //this= hace referencia al object  'Pepe'
    this.getAge= function(){
        return this.age
    };
    this.getHistory= function(){
        console.log(this.name+ ' was born '+ this.age +' years ago ');
        return this.age
    };
    //encapsulacion la variable age deberia ser privada
    this.setAge=function(age){
        this.age=age;
    };
};

var pepe= new Person('Pepe', 12);
pepe.getAge();
pepe.getHistory();
pepe.setAge('18');
pepe.getHistory();*/

var Person= function(name,age){
    //constructor
    this.name=name;
    // age es variable privada
    var _age=age;
    //Functions anidada : getAge anf getHistory
    //this= hace referencia al object  'Pepe'
    this.getAge= function(){
        return _age
    };
    this.getHistory= function(){
        console.log(this.name+ ' was born '+ _age +' years ago ');
        return _age
    };
    //encapsulacion la variable age deberia ser privada
    this.setAge=function(newAge){
        _age=newAge;
    };
};

var pepe= new Person('Pepe', 12);
pepe.getAge();
pepe.getHistory();
//pepe.setAge('18');
//pepe.getHistory();
/*
>pepe
<Person {name: "Pepe", getAge: function, getHistory: function, setAge: function}
>pepe.age  //ya tengo el control sobre la variable age esta encapsulado
<undefined
>pepe.getAge()
<12
>pepe.age=24
<24
>pepe.age
<24
>pepe.getAge()
<12

*/
