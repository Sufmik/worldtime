setInterval(myFuncSuper, 1000);

function myFuncSuper() {
    document.querySelector(".time").innerHTML = ""

let timeNow = new Date().toLocaleTimeString()
    document.querySelector(".time").innerHTML = (timeNow)
}