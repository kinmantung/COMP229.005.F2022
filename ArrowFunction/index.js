var hello;

hello = () => {
    document.getElementById("demo").innerHTML += "hello 1";
}

// A button object calls the function:
document.getElementById("btn1").addEventListener("click", hello);

// A button object call the function:
document.getElementById("btn2").addEventListener("click", () =>{
    document.getElementById("demo").innerHTML += "hello 2";
})