const timer = () => {
    const data = [

        {
            time: 0,
            src: '<img src=nums/num/0.svg>',
        },

        {
            time: 1,
            src: '<img src=nums/num/1.svg>',
        },

        {
            time: 2,
            src: '<img src=nums/num/2.svg>',
        },

        {
            time: 3,
            src: '<img src=nums/num/3.svg>',
        },

        {
            time: 4,
            src: '<img src=nums/num/4.svg>',
        },

        {
            time: 5,
            src: '<img src=nums/num/5.svg>',
        },

        {
            time: 6,
            src: '<img src=nums/num/6.svg>',
        },

        {
            time: 7,
            src: '<img src=nums/num/7.svg>',
        },

        {
            time: 8,
            src: '<img src=nums/num/8.svg>',
        },

        {
            time: 9,
            src: '<img src=nums/num/9.svg>',
        },
    ]

    const d = new Date()
    let timeNow = spacetime(d)
    opt = document.getElementById("menu")

    opt.addEventListener('change', () => {
        if (opt.value == 'choose') {
            console.log('Выберите город');
        } else {
            newTime = timeNow.goto(opt.value)
            return console.log(newTime.time());
        }
    })

    //час
    const h = opt.value == 'choose' ? timeNow.hour() : newTime.hour()
    const h1 = Math.floor(h / 10); //час, первая цифра
    const h2 = h - h1 * 10 //час, вторая цифра

    //минута
    const m = timeNow.minute()
    const m1 = Math.floor(m / 10); //минута, первая цифра
    const m2 = m - m1 * 10 //минута, вторая цифра

    //секунда
    const s = timeNow.second()
    const s1 = Math.floor(s / 10); //минута, первая цифра
    const s2 = s - s1 * 10 //минута, вторая цифра


    //определение нужного числа
    data.find(value => {
        if (h1 == value.time) {
            const index = data.find(value => value.time == h1).src
            document.querySelector('.hour').innerHTML = (index)
        }
    })

    data.find(value => {
        if (h2 == value.time) {
            const index = data.find(value => value.time == h2).src
            document.querySelector('.hour1').innerHTML = (index)
        }
    })

    data.find(value => {
        if (m1 == value.time) {
            const index = data.find(value => value.time == m1).src
            document.querySelector('.minute').innerHTML = (index)
        }
    })

    data.find(value => {
        if (m2 == value.time) {
            const index = data.find(value => value.time == m2).src
            document.querySelector('.minute1').innerHTML = (index)
        }
    })

    data.find(value => {
        if (s1 == value.time) {
            const index = data.find(value => value.time == s1).src
            document.querySelector('.seconds').innerHTML = (index)
        }
    })

    data.find(value => {
        if (s2 == value.time) {
            const index = data.find(value => value.time == s2).src
            document.querySelector('.seconds1').innerHTML = (index)
        }
    })
}

timer()

setInterval(timer, 500)