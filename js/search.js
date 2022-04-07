import iana from '/node_modules/spacetime/zonefile/iana.js'


const search = function () {
    const searchText = document.querySelector('.search_text')

    searchText.addEventListener('input', (event) => {
        const res = event.target.value
        const keys = Object.keys(iana)
        console.log(keys.includes(res));
        //console.log(keys.find(city => city.property == res))

        //index = Object.keys(iana).find(city => res == keys)
    })
}

search()