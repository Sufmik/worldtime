//забирает значение из меню select

let selector = {}

function findOption(select) {
    const option = select.value
    selector.input = option
}

//массив с часовыми поясами

let arr = [
    {value: "LA", city: "Los Angeles", region: "America/Los_Angeles", utc: -8},
    {value: "MSC", city: "Moscow", region: "Europe/Moscow", utc: 3},
    {value: "NY", city: "New York", region:"America/New York", utc: -4},
    ]

setInterval(myFuncSuper, 1000); //итерация таймера в 1у секунду

function myFuncSuper() {
    document.querySelector(".time").innerHTML = "" //удаление предыдущего значения

    let timeNow = new Date().toLocaleTimeString()
    document.querySelector(".time").innerHTML = (timeNow) //новое значение времени исходя из времени системы пользователя
}