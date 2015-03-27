/**
 * Created by Alejandra Arteaga on 3/19/2015.
 */
//Control structures
/*
 num=["2","1"]
 ["2", "1"]
 num.reverse()
 ["1", "2"]

 "this is a javasript".split(" ")
 ["this", "is", "a", "javasript"]

 "this is a javasript".split("")
 ["t", "h", "i", "s", " ", "i", "s", " ", "a", " ", "j", "a", "v", "a", "s", "r", "i", "p", "t"]
SCOPE SOLUTION
number-->string-->Array
Array--> String-->Number

 int=456
 456
 string=int.toString()
 "456"
 array=string.split("")
 Number(array.join(''))

* */
var iscapicua=function(num){
    return num==Number(num.toString().split('').reverse().join(''));

};
var getFirstCapicua=function(init, limit){
    for(var i=init; i<= limit; i++){
        if(iscapicua(i)){
            return i;
        }
    }
};

var getFirstCapicuaSV=function(init, limit){
    for(var i=init; i<= limit; i++){
        if(!iscapicua(i)){
            continue;//continua con el sqt i++
        }
        return i;
    }
};
var getFirstCapicuaTV=function(init, limit){
    for(var i=init; i<= limit; i++){
        if(iscapicua(i)){
           break; //sale del for
        }
    }
    return i;
};
var getFirstCapicuaFV=function(init, limit){
    for(var i=init; i<= limit; i++){
        if(!iscapicua(i)){
            continue;//continua con el sqt i++
        }
        break;
    }
    return i;
};
//n=5 ==> 2,4,6,8,10
/*var isEven= function(n){
    if n%2 == 0
    return res
};*/


var getEvenNumbers=function(n){//n=5 ==> 2,4,6,8,10
    for(var i=2; i<= n*2 ; i+2){
            console.log(i);
    }
};

var getOddNumbers=function(n){//n=5 ==> 1,3,5,7,9
    for(var i=1; i<= n*2 ; i+2){
        console.log(i);
    }
};