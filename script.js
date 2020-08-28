// function printTime() {
//     setInterval(function() {

//         var now = new Date();
//         var hours = now.getHours();
//         var minutes = now.getMinutes();
//         var seconds = now.getSeconds();
//         var output = hours + ":" + minutes + ":" + seconds + "<br/>";
//         document.getElementById("demo").innerHTML = output;

//         document.write(output);
//     }, 1000);
// }

// var d = new Date();

// function rndInteger(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

// function voting() {
//     var age, votable;
//     age = Number(document.getElementById("age").value);
//     if (isNaN(age)) {
//         votable = "Input is not a number";
//     } else {
//         votable = (age < 18) ? "Too Young" : "Too Old ";
//     }
//     document.getElementById("test").innerHTML = votable;
// }


function currentTime() {
    var date = new Date(); /* creating object of Date class */
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var midday = "";
    midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour); /* assigning hour in 12-hour format */
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    document.getElementById("clock").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();
// var ourList = document.getElementById("our-List");
// var button = document.getElementById("outButton");
// var headLine = document.getElementById("ourHeadLine");
// var listItems = document.querySelectorAll("#our-list li");
// var itemCounter = 1;

// ourList.addEventListener("click", activateItem);


// function activateItem(e) {
//     if (e.target.nodeName == "LI") {
//         headLine.innerHTML = e.target.innerHTML;
//         for (i = 0; i < e.target.parentNode.children.length; i++) {
//             e.target.parentNode.children[i].classList.remove("active");
//         }
//         e.target.classList.add("active");
//     }
// }

// ourButton.addEventListener("click", createNew);

// function removeItem() {
//     return this.innerHTML.remove;
// }

// function createNew(l) {
//     ourList.innerHTML += "<li>" + "Something New " + itemCounter + "</li>";
//     itemCounter++;
// }
// var person = function(firstName, lastName, age, eyeColor) {
//     this.firtsname = firstName;
//     this.lastname = lastName;
//     this.age = age;
//     this.eyecolor = eyeColor;
// }

// var father = new person("Anil", "Choudhary", 55, "brown");
// var mother = new person("Sudhira", "Devi", 45, "Black");
// var brother = new person("Ashutosh", "Choudhary", 24, "Ocker");


// class Car {
//     constructor(brand) {
//         this.carName = brand;
//     }
//     static hello(x) {
//         return " I have a " + x.carName;
//     }
// }

// var myCar = new Car("Ford");

// document.getElementById("test2").innerHTML = Car.hello(myCar);

// class person1 {
//     constructor(name) {
//         this.personName = name;
//     }
//     present() {
//         return "I am " + this.personName;
//     }
// }

// class Son extends person1 {
//     constructor(name, chil) {
//         super(name);
//         this.child = chil;
//     }
//     show() {
//         return this.present() + " " + this.child;
//     }
// }

// var personNew = new Son("anil", "raj");
// document.getElementById("test").innerHTML = personNew.show();

var form = document.querySelector('form');
form.addEventListener('submit', genMsg);
var someText = document.getElementById('someText');

function genMsg(e) {
    e.preventDefault();
    var message = document.getElementById("message").value;
    var final = "";
    if (message == "") {
        final = "PLease Write Something.";
    } else {
        final = "<li>" + message.toUpperCase() + "</li>";
    }
    someText.innerHTML += final;
}
someText.addEventListener('click', function(e) {
    if (confirm("Are You Sure?? You want to delete")) {
        e.target.style.display = "none";
    }
})