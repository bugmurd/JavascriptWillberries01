const search = function () {
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')



    console.log(searchBtn)
    console.log(input)

    input.addEventListener('input', (event) => {
        console.log(event.target.value)
    })

}

search()