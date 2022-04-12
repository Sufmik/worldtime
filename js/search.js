import iana from '/node_modules/spacetime/zonefile/iana.js'


const search = function () {
    const searchText = document.querySelector('.search_text')
    const dataList = document.querySelector('.city_list')
    const serachContainer = document.querySelector('.search')

    searchText.addEventListener('input', (event) => {
        const res = event.target.value
        const keys = Object.keys(iana)

        //const index = keys.filter(item => {
        //    return item.toLowerCase().includes(res.toLowerCase())
        //})
        keys.forEach(k => {
            const index = document.createElement('option')

            index.innerHTML = `<option value="${k}"></option>`

            dataList.append(index)
        })
    })
}

search()