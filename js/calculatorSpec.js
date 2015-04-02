//Calculator Spec  (Specification)
/*BDD
 Jazmine
 Calculator
 should be able to add two numbers
 should be able to substract two numbers
 should be able to multiply two numbers
 should be able to divide two numbers
 */
describe('Calculator', function(){ //testsuite Calculator
    it('should be able to add two numbers',function(){
        var calculator=new Calculator();
        var actRes=calculator.add(1,2);
        var expRes=3;

        expect(actRes).toBe(expRes);
    }); //especificacion/Requeriment 1 = testcase 1
    it('should be able to substract two numbers',function(){});//especificacion/Requeriment 2= testcase 2
    it('should be able to multiply two numbers',function(){});//especificacion/Requeriment 3= testcase 3
    it('should be able to divide two numbers',function(){});//especificacion/Requeriment 4= testcase 4
});
