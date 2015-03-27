/**
 * Created by Alejandra Arteaga on 3/13/2015.
 */
var countWords= function(paragraph){
    console.log("The number of words is: "+paragraph.split(" ").length)
    return paragraph.split(" ").length;
};
/*
Exercise: Write a JavaScript program to display the current day and time in the
following format:
    Today is : Friday.
    Current time is : 4 PM : 50 : 22*/

var printDate=function(){
    var   now = new Date();
    var jason= {
        '1':'Monday',
        '2':'Tuesday',
        '3':'Wednesday',
        '4':'Thursday',
        '5':'Friday',
        '6':'Saturday',
        '7':'Sunday'

    }; //para fin de una variable ;
    /* var strDays= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    console.log("Today is: "+ strDays[now.getDay()]);*/
    console.log("Today is: "+ jason[now.getDay()]);
    // Formato de 24 hrs
    var hour= now.getHours()>12 ? (now.getHours()-12)+' AM ': now.getHours()+' PM ';//funciona igual q un IF
    console.log("Current time is: "+ hour+":"+now.getMinutes()+":"+now.getSeconds());

};
/*
 >RE= new RegExp(/^[a-z]{5}$/);  ^ = inicio $ = fin
 >RE.test('asdfadsfsdfsdf')
 >true
 >RE.test('as')
 >false
 >/^[0-9]{4}$/.test('4564')
 true
 /^[0-9]{4}$/.test('456445')
 false
 /^The user [a-z]{4} is not registered in the app$/.test('The user sdaff is not registered in the app')
 false
 /^The user [a-z]{4} is not registered in the app$/.test('The user sdaf is not registered in the app')
 true
 /^The user [a-z]{4,5} is not registered in the app$/.test('The user sdafll is not registered in the app')
 false
 */

/*
Exercise: Write JavaScript code to check that a string with the format “2014-
 06-06” is a valid date
 */
var validDate= function(){
    //var reg = new RegExp(/^[0-9]{4}-[0-9]{2}-[0-9]{2}$/);
    // > /^0[0-9]{1}|1[0-2]{1}$/.test('02') el argumento en test debe ser mandado com cadena pq al convertir se elimina el cero
    var regMonth = new RegExp(/^0[0-9]{1}|1[0-2]{1}$/);
    var regDay = new RegExp(/^0[0-9]{1}|1[0-9]{1}|2[0-9]{1}|3[0-9]{1}$/);

};
console.log('----Count Word----');
countWords("Hola Mundo");
console.log('----Print Date----');
printDate();



