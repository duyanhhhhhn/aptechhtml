function showHello(){
    alert("Hello world");
}
var x = document.getElementById("btn");
// arrow function
x.onclick = () => alert("hello world");
// document.getElementById("btn").addEventListener("click", showHello);
// document.getElementById("btn").addEventListener("click", showGoodBye);
// document.getElementById("btn").removeEventListener("click",showGoodBye)
// var Cong = (a, b) => a + b
// console.log(Cong(3, 5));