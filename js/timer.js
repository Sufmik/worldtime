let arr = [
    {name: "Moscow",
     value: "msc",
     timezone: -180,},

    {name: "NewYork",
     value: "NY",
     timezone: 300,},

    {name: "LosAngeles",
     value: "LA",
     timezone: 480,},
]

function findOption() {
    let opt = document.getElementById("menu");
        return opt.value
}

// let test = findOption()

// let result = arr.find (el=>el.value===test)

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