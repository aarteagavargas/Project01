/**
 * Created by Alejandra Arteaga on 3/12/2015.
 */
var doOperations= function(){
    var numbers=arguments;
    console.log('The MAX is :'+getMax(numbers, numbers.length-1));
    console.log('The MIN is :'+getMin())
    console.log('The AVG is :'+getAvg())
    console.log('The SUM is :'+getSum())

};
// nombre de variables y funciones q empieze con miniscula no usar underscore _
//nombre de clases q empice con mayuscula eg Vehiculo

var getMax= function(numbers,pos,max){
    if()
    if (max== undefined)
        max=numbers[pos];

    if(pos==0)
        return max;

    /*if(numbers[pos]>numbers[pos-1])
        max=numbers[pos];
    else
        max=numbers[pos-1];*/

    if(numbers[pos]>numbers[pos-1])
        max=numbers[pos-1];

    getMax(numbers,pos-1,max);

};
var getMin= function(){

};
var getAvg= function(){

};
var getSum= function(){

};