const compare = () => {
    let arr = [
        {
            name: "Moscow",
            value: "msc",
            timezone: -180,
        },

        {
            name: "NewYork",
            value: "NY",
            timezone: 300,
        },

        {
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
            if (city.length == 0) {
                city.push(opt.value)
                localStorage.setItem('city', JSON.stringify(city))
                console.log(city);

                /*let result = (value) => {
                    let city = (JSON.parse(localStorage.getItem('city')))

                    let newCity = city.map(item => {
                        if (item.value === value) {
                            return item
                        }
                    })
                    localStorage.setItem('city', JSON.stringify(newCity))
                }
                result()
                console.log(result());*/

            } else if (city.length > 0) {
                city.pop()
                city.push(opt.value)
                localStorage.setItem('city', JSON.stringify(city))
                console.log(city);
            } else {
                localStorage.setItem('city', JSON.stringify([]))
                console.log(e);
            }
        })
    }
    getData()
}

compare()