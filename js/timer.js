let arr = [
    {msc: -180},
    {ny: 300},
    {la: 480},
]

let selector = []

let find = function findOption() {
    let opt = document.getElementById("menu");
        selector.input=opt.value
}
 arr.includes(find) ? console.log("true") : console.log("Ура")

//таймер

function timer() {
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

timer()

setInterval(timer, 1000) //итерация таймера в 1у секунду