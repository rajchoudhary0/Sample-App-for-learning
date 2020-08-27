// const book1 = {
//     title: "Book One",
//     author: "John Doe",
//     year: 2020,
//     getSummury: function() {
//         return ` ${this.title} was written by ${this.author} in ${this.year}`;
//     }
// };

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    // this.getSummury = function() {
    //     return ` ${this.title} was written by ${this.author} in ${this.year}`;
    // }
}
//Prototype
Book.prototype.getSummury = function() {
    return ` ${this.title} was written by ${this.author} in ${this.year}`;
}

Book.prototype.getAge = function() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old.`;
}

Book.prototype.revised = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

const book1 = new Book("Book One", "John Doe", 2019);
const book2 = new Book("Book two", "jane Doe", 2016);

book2.revised(2018);
console.log(book2);

// Inheritance
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}
//Prototype Inheritance
Magazine.prototype = Object.create(Book.prototype)

// Creating new Magazine
const mag1 = new Magazine("Mag one", "Mary Jane", 2012, "October");
const mag2 = new Magazine("Mag Two", "Jose Dow", 2008, "March");

mag2.revised(2009);

// Use own constructor Name
Magazine.prototype.constructor = Magazine;

console.log(mag2);