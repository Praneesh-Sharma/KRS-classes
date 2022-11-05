var myNumber = 3.45678

console.log(myNumber.toFixed(2)); //rounds the number to the nearest decimal
console.log(myNumber.toFixed(3));
console.log(myNumber.toFixed(4));

myNumber +=5; //incremnt operator
console.log(myNumber);

var firstNum = 5.5;
var secondNum = 6.6;
console.log(firstNum+secondNum);

var firstNum = "21";
var secondNum = "4";
console.log(parseInt(firstNum) + parseInt(secondNum));

var yearOfBirth = 2004;
console.log(yearOfBirth.toString() + " is the year I was born"); //explicit type conversion
console.log(yearOfBirth + " is the year I was born"); //implicit type conversion

const x = false;
if(x){
    //this conde wont execute
}

//undefined = object exists but cont be donoe anything to
var myValue;
console.log(myValue); //undefined
console.log(typeof myValue); //undefined

var name = "Prawns"
console.log(name[0]);
console.log(name[1]);
console.log(name[10]); //undefined

/*null = object exists but is empyt and can be worked with
not exactly a datatype amd for many people it should be avoided*/
var temperature = 25;
console.log(temperature);
temperature = null;
console.log(temperature);
console.log(typeof temperature)
console.log(temperature == null)

var students = ['John', 'Mary', 'Paul'];
var primeNumbers = [2, 3, 5, 7, 11];
console.log(students.length);
console.log(students[0]);

/*Array Operations
push - adds elements to the end
pop - removes elements from the end
shift - removes elements from the front
unshift - adds elements to the front*/
var courses = ["HTML", "Python", "PHP", "C"];
console.log(courses);
courses.push("JavaScript");
console.log(courses);
courses.unshift("Bootstrap");
console.log(courses);
courses.pop();
console.log(courses);
courses.unshift();
console.log(courses);
courses[1] = "Java";
console.log(courses);
console.log(courses.slice(0,2)); //will print elements 0 and 1, 2 will be excluded

/*OBJECTS
Objects, like arrays, re lists of emlements, but are not ordered. Use key to indentufy instead of index. Has key-value pair
*/
var employee = {
    'name' : "John Taylor",
    'yearOfBirth' : 2004,
    'ID' : "12321",
    'role' : "Data Analyst"
};
console.log(employee['ID']);
console.log(employee.ID)

var test = {
    'property1' : 'Some Value',
    '2a' : 'Some other value',
    09335 : 'Another value',
    'hello-world' : 'Last value'
};
console.log(test.property1);
console.log(test['hello-world'])

//Object values can be functiuons. In this case we call them methods. Methods can use other object properties
var student = {
    'firstName' : 'Marle',
    'lastName' : 'Smith',
    'fullName' : function() {
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(student.fullName());

//Funtions are blocks of code designed to perform a specific task.Can help organize the code, and repetition and reduce the complexity of the code
function sum_numbers() {
    var num1 = 5;
    var num2 = 2;
    var sum = num1 + num2;

    console.log(sum);
}
sum_numbers(); //function invoked

//Function arguments
function sum_arg(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
}
sum_arg(10,25);
sum_arg(5.5,6.6);
sum_arg(-4,10);

function sum_args(num1, num2) {
    var sum = num1 + num2;
    return sum;
}
var sum = sum_args(1,2);
console.log(sum);