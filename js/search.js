import iana from '/node_modules/spacetime/zonefile/iana.js'


const search = function () {
    const searchText = document.querySelector('.search_text')

    searchText.addEventListener('input', (event) => {
        const res = event.target.value
        const keys = Object.keys(iana)

        const index = keys.filter(item => {
            return item.toLowerCase().includes(res.toLowerCase())
        })
        console.log(index);
    })
}

search()