//значение которое выбирает пользователь

// let selector = []
//
// function findOption(select) {
//     const option = select.value
//     selector.input = option
// }
//
// //часовые пояса
//
// let newYork = new Date().toLocaleString("en-US", {timeZone: "America/New_York", hour12:false, })
//         let m = newYork
//
// let losAngeles = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
// let moscow = new Date().toLocaleString("en-Us", {timeZone: "Europe/Moscow"})
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
