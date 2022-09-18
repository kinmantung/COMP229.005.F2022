//var hello;

//hello = () => {
 //   document.getElementById("demo").innerHTML += "hello 1";
//}

// A button object calls the function:
//document.getElementById("btn1").addEventListener("click", hello);

// A button object call the function:
//document.getElementById("btn2").addEventListener("click", () =>{
//    document.getElementById("demo").innerHTML += "hello 2";
//})

//var numbers = [1,2,3,4,5];
//const squares = numbers.map (n => n * n);
//document.write(squares);

//var evens = new Array();
//numbers.forEach(n =>{
//    if(n % 2 == 0){
//        evens.push(n);
//    }
//})
//document.write('<br>');
//document.write(evens);

const author = {
    fullName: "Bob Alice",
    books: ["book 01","book 02","book 03"],

    printBooks() {
        this.books.forEach(book => console.log(book + ' by ' + this.fullName));
    },

    printBooks1() {
        function PrintValue(book){
            document.write(book + ' by ' + this.fullName + '<br>');
       }
        this.books.forEach(PrintValue);
    },

    printBooks2() {
        this.books.forEach(function(book){
            document.write(book + ' by ' + this.fullName + '<br>');
        });
    }
};

author.printBooks();
author.printBooks1();
author.printBooks2();