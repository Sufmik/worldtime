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
    opt.addEventListener('change', () => { alert(opt.value) })
}

compare()