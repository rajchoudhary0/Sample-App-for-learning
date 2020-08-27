//Creating Class
class Book {
    constructor(title, author, year) {
            this.title = title;
            this.author = author;
            this.year = year;
        }
        //Adding Methods
    getSummury() {
        return ` ${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old.`;
    }
    revised(newYear) {
            this.year = newYear;
            this.revised = true;
        }
        //Static
    static bookStore() {
        return "Jack And Jones";
    }
}

//Creating Objects
var book1 = new Book("Book One", "John doe", 2002);
var book2 = new Book("Book Two", "Mary doe", 2006);

console.log(book2);

book2.revised(2011);

console.log(book2);

console.log(Book.bookStore());

//Creating Subclass or inheriting property of book class
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

//Creating objects for Magazine subclass
var mag1 = new Magazine("Mag One", "Mag Jane", 2008, "April");

mag1.revised(2011);
console.log(mag1.getSummury());