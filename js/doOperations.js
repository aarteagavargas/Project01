/**
 * Created by Alejandra Arteaga on 3/17/2015.
 */
var doOperations= function(){
    var numbers=arguments;
    console.log('The MAX is :'+getMax(numbers));
    console.log('The MIN is :'+getMin(numbers))
    console.log('The AVG is :'+getAvg(numbers))
    console.log('The SUM is :'+getSum(numbers))

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
var getAvg= function(numbers,pos,total){
    if(pos==undefined)
        pos=numbers.length -1

    if (total== undefined)
        total=numbers[pos];

    if(pos==0) {
        var avg = total / numbers.length;
        return avg;
    }

    total=total+(numbers[pos-1]);

    return getAvg(numbers,pos-1,total);
};
var getSum= function(numbers,pos,sum){
    if(pos==undefined)
        pos=numbers.length -1

    if (sum== undefined)
        sum=numbers[pos];

    if(pos==0)
        return sum;

    sum=numbers[pos-1]+sum;

    return getSum(numbers,pos-1,sum);

};
doOperations(5,4,3,1);