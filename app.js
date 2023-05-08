// alert("hey")

// Chapter 35 to 38

// Q1
// function time(){
//     var date = new Date()
//     document.write(date)
// }
// time()

// Q2
// function userName(){
//     var fName = prompt("Enter Your first Name")
//     var lName = prompt("Enter Your last Name")
//     /*var greetUser = fName + lName
//     alert("Hello " + greetUser)*/
//     alert("Hello " + fName + " " + lName)
// }
// userName()

// Q3
// function sum(){
//     var num1 = +prompt("Enter Num 1")
//     var num2 = +prompt("Enter Num 2")
//     var sum = num1 + num2
//     console.log(sum)
// }
// sum()

// Q4

// var num1 = 10
// var num2 = 5
// function foo(number1 = 0, number2 = 0){
//     return number1 * number2

// }
// var result = foo(num1, num2)
// console.log(result) 

// Q5
// skiped

// Q6
// skiped

// Q7
// function foo(){
//     var startNum = +prompt("Enter first Number")
//     var lastNum = +prompt("Enter last Number")
    
//     for(var i = startNum; i>lastNum; i++){
//         document.write(i)
//     }
// }
// foo() 
// wrong answered



// Chp 43 to 48
// Q1

// function link(){
//     var click = document.getElementById("click")
//     // console.log(click)
//     alert("This is a tag")
// }

// Q2

// function img(){
//     var img1 = document.getElementById("img1")
//         // console.log(img1)
//     alert("Thanks for purchasing Mobile from our store")
    
// }

// function imG(){
//     var img2 = document.getElementById("img2")
//     alert("Thanks for Purchasing Mobile from our store")
// }

// Q3

// function dlt1(){
//     var table1 = document.getElementById("dlt1")
//     table1.remove()
//     console.log(table1)
    
//    /* var table2 = document.getElementById("dlt2")
//     table2.remove()
//     console.log(table2)*/

// }
// function dlt2(){
//     var table2 = document.getElementById("dlt2")
//     table2.remove()
//     console.log(table2)
    
// }

// function dlt3(){
//     var table3 = document.getElementById("dlt3")
//     table3.remove()
//     console.log(table3)
    
// }

// function dlt4(){
//     var table4 = document.getElementById("dlt4")
//     table4.remove()
//     console.log(table4)
    
// }

// Q4

// function mouseOver(){
//     var over = document.getElementById("img")
//     // console.log(over)
//     over.src = "assests/mob2.webp"
// }

// function mouseOut(){
//     var out = document.getElementById("img")
//     out.src = "assests/mob1.webp"
// }

// Q5
// var count = 0;
// var counterElement = document.getElementById("click")
// function addition(){
//     count++;
//     counterElement.innerText = count;
// }

// function subtraction(){
//     count--;
//     counterElement.innerText = count;
// }


//  chap 49 to 52 
//Q1 

// function getValue(){
//     var name = document.getElementById("name")
//     var email = document.getElementById("email")
//     var password = document.getElementById("password")

//     document.write(name.value + "<br />")
//     document.write(email.value + "<br />")
//     document.write(password.value + "<br />")
// }

// Q2

// var loremTxt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet deserunt totam iste tempore excepturi quod est eum fuga earum aspernatur?"
// function seeMore(parameter1){
//     var para = document.getElementById("para");
//     var seeBtn = parameter1;
//     if(seeBtn.innerHTML == "See More"){
//         seeBtn.innerHTML = "See less"
//         para.innerHTML = loremTxt
//     } else{
//         seeBtn.innerHTML = "See More"
//         para.innerHTML = "Lorem ipsum dolor sit amet."

//     }
// }


// Q3
// function dlt1(){
//     var table1 = document.getElementById("dlt1")
//     table1.remove()
//     console.log(table1)
    
//    /* var table2 = document.getElementById("dlt2")
//     table2.remove()
//     console.log(table2)*/

// }
// function dlt2(){
//     var table2 = document.getElementById("dlt2")
//     table2.remove()
//     console.log(table2)
    
// }

// function dlt3(){
//     var table3 = document.getElementById("dlt3")
//     table3.remove()
//     console.log(table3)
    
// }

// function dlt4(){
//     var table4 = document.getElementById("dlt4")
//     table4.remove()
//     console.log(table4)
    
// }


// here i used chatgpt
// let studentList = [];

// function addStudent() {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let phone = document.getElementById("phone").value;
//     let student = {name: name, email: email, phone: phone};
//     studentList.push(student);
//     displayStudents();
//     document.querySelector('form').reset();
// }

// function displayStudents() {
//     let table = document.getElementById("studentTable");
//     table.innerHTML = "";
//     for(let i = 0; i < studentList.length; i++) {
//         let student = studentList[i];
//         let row = table.insertRow();
//         let nameCell = row.insertCell(0);
//         let emailCell = row.insertCell(1);
//         let phoneCell = row.insertCell(2);
//         let actionCell = row.insertCell(3);
       
//  }
//   }