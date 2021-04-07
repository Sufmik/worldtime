//значение которое выбирает пользователь

let selector = []

function findOption(select) {
    const option = select.value
    selector.input = option
}

//массив с часовыми поясами и значениями

let arr = [
    {value: "LA", city: "Los Angeles", region: "America/Los_Angeles", utc: -8},
    {value: "MSC", city: "Moscow", region: "Europe/Moscow", utc: 3},
    {value: "NY", city: "New York", region:"America/New York", utc: -4},
    ]

d=new Date()
time_zone=d.getTimezoneOffset()

console.log(time_zone)

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