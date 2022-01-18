//3.create one object

var obj={
    name:"nagamani",
    age:22,

}
console.log(obj)

//4.using new keyword

var person = new Object()
person.name="nagamani";
person.age=22;
console.log(person)

//5.adding property to that object
var obj={
        name:"nagamani",
      age:22,
    
    }
    obj['salary']=35000;//array method
    obj.qualification="BE";//dot method
    obj= {...obj,percentage:74,cgpa:8.1
    }
    var a = Object.defineProperty(obj,"age",{value:"20"})
    console.log(obj)//spread method
//     console.log(obj)

//6.reversing string without using builtin method

function rev (str){
    newstr="";
    for(var i = str.length-1;i>=0;i--){
        newstr+=str[i]
    }
    return newstr;
}
console.log(rev("mani"))

//7.creating array of json objects and deleting and adding it

let json = [{name:"mani",
              salary:"35000"},
              {name:"shubha",
              salary:"37000"},
              {name:"thripthi",
              salary:"34000"},]
             
              json.splice(json[1],1,{name:"hoogar",salary:35000})//deleting and editing
              console.log(json)

              // program to remove a property from an object

// creating an object
const student = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

// deleting a property from an object
delete student.greet;
delete student['score'];

console.log(student);