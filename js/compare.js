const compare = () => {
    let arr = [
        {
            id: 1,
            name: "Moscow",
            value: "MSC",
            timezone: -180,
        },

        {
            id: 2,
            name: "NewYork",
            value: "NY",
            timezone: 300,
        },

        {
            id: 3,
            name: "LosAngeles",
            value: "LA",
            timezone: 480,
        },
    ]

    let opt = document.getElementById("menu")

    localStorage.setItem('city', JSON.stringify([]))
    let city = (JSON.parse(localStorage.getItem('city')))

    let getData = () => {
        opt.addEventListener('change', (e) => {
            if (city.length === 0) {
                city.push(opt.value)
                localStorage.setItem('city', JSON.stringify(city))
                console.log(city);

                let result = (value) => {
                    arr.find(city => {
                        if (city.value === value) {
                            return console.log(value)
                        } else { console.log('Лож'); }
                    })
                }
                result(opt.value)

            } else if (city.length > 0) {
                city.pop()
                city.push(opt.value)
                localStorage.setItem('city', JSON.stringify(city))
                console.log(city);

                let result = (value) => {
                    console.log(value);
                    arr.find(city => {
                        if (city.value === value) {
                            return console.log('Правда');
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