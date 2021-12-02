// let API_KEY1 = 'dcea1fd7b3e65d34387ad6de7ef9cc5e'

let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'

let topcount = 1
let popcount = 1
let upcomcount = 1

let popularApi =  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=`
let topApi =  `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=`
let upcomingApi =  `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=`

let app = document.querySelector('.append')
let btnpopular = document.querySelector('#popular')
let btnupcoming = document.querySelector('#upcoming')
let btntop = document.querySelector('#top')

let btnnext = document.querySelector('.next')
let btnprev = document.querySelector('.prev')
let title = document.querySelector('.title')




btntop.addEventListener('click', async function () {
    let response = await fetch(topApi + topcount)
    response = await response.json()
    render(response)

    btnnext.addEventListener('click', async function () {
        topcount += 1
        let newresponse = await fetch(topApi + topcount)
        newresponse = await newresponse.json()
        console.log(newresponse.results);
        render(newresponse)
        title.textContent = topcount
    })
    btnprev.addEventListener('click', async function () {
            topcount -= 1
            let newresponse = await fetch(topApi + topcount)
            newresponse = await newresponse.json()
            console.log(newresponse.results);
            render(newresponse)
            title.textContent = topcount

    })
})







btnpopular.addEventListener('click', async function () {

    let promise = await fetch(popularApi + popcount)
    promise = await promise.json()
    render(promise)

    
    btnnext.addEventListener('click', async function () {
        popcount += 1
        let newresponse = await fetch(popularApi + popcount)
        newresponse = await newresponse.json()
        console.log(newresponse.results);
        render(newresponse)
        title.textContent = popcount

    })
    btnprev.addEventListener('click', async function () {
        popcount -= 1
        let newresponse = await fetch(popularApi + popcount)
        newresponse = await newresponse.json()
        console.log(newresponse.results);
        render(newresponse)
        title.textContent = popcount
        
    })
}) 










btnupcoming.addEventListener('click', async function () {
    let promise = await fetch(upcomingApi + upcomcount)
    promise = await promise.json()
    render(promise)

    
    btnnext.addEventListener('click', async function () {
        upcomcount += 1
        let newresponse = await fetch(upcomingApi + upcomcount)
        newresponse = await newresponse.json()
        console.log(newresponse.results);
        render(newresponse)
        title.textContent = upcomcount
    })
    btnprev.addEventListener('click', async function () {
        upcomcount -= 1
        let newresponse = await fetch(upcomingApi + upcomcount)
        newresponse = await newresponse.json()
        console.log(newresponse.results);
        render(newresponse)
        title.textContent = upcomcount
        
    })
})



function render (p) {
    app.innerHTML = null
    for(let i of p.results) {
        let div = document.createElement('div')
        div.className = 'movie'
        div.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500/${i.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">

            <div class="movie-info">
                <h3>${i.title}</h3>
                <span class="orange">${i.vote_average}</span>
            </div>
            <span class="date">${i.release_date}}</span>
        `
        app.append(div)
    }
}


async function get() {
    let response = await fetch(topApi + topcount)
    response = await response.json()

    render(response)
}

get()