const timer = () => {
    let timeNow = new Date()

    data = {
        time: 1,
        src: '<img src=nums/num/0.svg>',
    }

    //час
    const h = timeNow.getHours()
    const h1 = Math.floor(h / 10); //час, первая цифра
    const h2 = h - h1 * 10 //час, вторая цифра

    //минута
    const m = timeNow.getMinutes()
    const m1 = Math.floor(m / 10); //минута, первая цифра
    const m2 = m - m1 * 10 //минута, вторая цифра

    //секунда
    const s = timeNow.getSeconds()
    const s1 = Math.floor(s / 10); //минута, первая цифра
    const s2 = s - s1 * 10 //минута, вторая цифра

    //определение нужного числа

    if (h1 === data.time) {
        document.querySelector('.hour').innerHTML = data.src
    }
}

timer()