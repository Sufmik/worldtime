//значение которое выбирает пользователь

let selector = []

function findOption(select) {
    const option = select.value
    selector.input = option
}

//рабочий метод!!!!!!

let newYork = new Date().toLocaleString("en-US", {timeZone: "America/New_York"},)
let losAngeles = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
let moscow = new Date().toLocaleString("en-Us", {timeZone: "Europe/Moscow"})

function tz() {
  this.timeZone
}
console.log(tz.newYork)

console.log(newYork)
console.log(losAngeles)
console.log(moscow)
//таймер

function myFuncSuper() {
    document.querySelector(".time").innerHTML = "" //удаление предыдущего значения

    let timeNow = new Date()

    let h = timeNow.getHours().toString()
    let m = timeNow.getMinutes().toString()
    let s = timeNow.getSeconds().toString()

    if (h.length<2) {
        h="0"+h
    }

    if (m.length<2) {
        m="0"+m
    }

    if (s.length<2) {
        s="0"+s
    }

    document.querySelector(".time").innerHTML = (h)+":"+(m)+":"+(s) //новое значение времени исходя из времени системы пользователя
}

myFuncSuper()
setInterval(myFuncSuper, 1000) //итерация таймера в 1у секунду