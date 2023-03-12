//старая версия...

const compare = () => {
    let arr = [
        {
            id: 1,
            name: "Moscow",
            value: "MSC",
            timezone: 0,
        },

        {
            id: 2,
            name: "NewYork",
            value: "NY",
            timezone: 8 //300
        },

        {
            id: 3,
            name: "LosAngeles",
            value: "LA",
            timezone: 11 //480
        },
    ]

    let opt = document.getElementById("menu")

    localStorage.setItem('city', JSON.stringify([]))
    localStorage.setItem('zone', JSON.stringify([]))
    let city = (JSON.parse(localStorage.getItem('city')))

    let getData = () => {
        opt.addEventListener('change', (e) => {
            if (city.length === 0) {
                city.push(opt.value)
                localStorage.setItem('city', JSON.stringify(city))

                let result = (value) => {
                    arr.find(city => {
                        if (city.value === value) {
                            const arrIndex = arr.find(array => array.value === value).timezone
                            localStorage.setItem('zone', JSON.stringify(arrIndex))
                            return console.log(arrIndex)
                        } else { console.log('Лож'); }
                    })
                }
                result(opt.value)

            } else if (city.length > 0) {
                city.pop()
                city.push(opt.value)
                localStorage.setItem('city', JSON.stringify(city))

                let result = (value) => {
                    arr.find(city => {
                        if (city.value === value) {
                            const arrIndex = arr.find(array => array.value === value).timezone
                            localStorage.setItem('zone', JSON.stringify(arrIndex))
                            return console.log(arrIndex)
                        } else { console.log('Лож'); }
                    })
                }
                result(opt.value)

            } else {
                localStorage.setItem('city', JSON.stringify([]))
                console.log(e);
            }
        })
    }
    getData()
}

compare()