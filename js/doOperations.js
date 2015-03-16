/**
 * Created by Alejandra Arteaga on 3/12/2015.
 */
var doOperations= function(){
    var numbers=arguments;
    console.log('The MAX is :'+getMax(numbers));
    console.log('The MIN is :'+getMin(numbers))
    console.log('The AVG is :'+getAvg())
    console.log('The SUM is :'+getSum())

};
// nombre de variables y funciones q empieze con miniscula no usar underscore _
//nombre de clases q empice con mayuscula eg Vehiculo

var getMax= function(numbers,pos,max){
    if(pos==undefined)
        pos=numbers.length -1

    if (max== undefined)
        max=numbers[pos];

    if(pos==0)
        return max;

    /*if(numbers[pos]>numbers[pos-1])
        max=numbers[pos];
    else
        max=numbers[pos-1];*/

    if(max<numbers[pos-1])
        max=numbers[pos-1];

    return getMax(numbers,pos-1,max);


};
var getMin= function(numbers,pos,min){
    if(pos==undefined)
        pos=numbers.length -1

    if (min== undefined)
        min=numbers[pos];

    if(pos==0)
        return min;

    if(min>numbers[pos-1])
        min=numbers[pos-1];

    return getMin(numbers,pos-1,min);
};
var getAvg= function(){
    /*if(pos==undefined)
        pos=numbers.length -1

    if (avg== undefined)
        avg=numbers[pos];

    if(pos==0)
        return avg;

    avg=(numbers[pos-1]+avg) /2;

    return getMin(numbers,pos-1,avg);*/
};
var getSum= function(numbers,pos,sum){
    if(pos==undefined)
        pos=numbers.length -1

    if (sum== undefined)
        sum=numbers[pos];

    if(pos==0)
        return sum;

    sum=numbers[pos-1]+sum;

    return getMin(numbers,pos-1,sum);

};