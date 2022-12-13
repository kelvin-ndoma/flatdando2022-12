//first declare our URL to use throughtout
let URL = 'http://localhost:3000/films'

const listHolder = document.getElementById('films')
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementsByClassName('film item')[0].remove()
fetchMovies(URL)
})

//we now Create a fetch function to get the data from the db.json in a list form 
function fetchMovies(URL){
    fetch(URL)
    .then(resp => resp.json())
    .then(movies => {
        movies.forEach(movie => {
            displayMovie(movie)
        });
    })
}
//function to display the titles of the movies as a list
function displayMovie(movie){
   
    const list = document.createElement('li')
    list.style.cursor="cell"
    list.textContent= (movie.title)
    listHolder.appendChild(list)
    addClickEvent()
}

//Adding the click event listener for the movies
function addClickEvent(){
    let children=listHolder.children
    

    for(let i=0; i<children.length; i++){
        let child=children[i]
        // console.log(child) <= to check if have the right child

        child.addEventListener('click',() => {
            fetch(`${URL}/${i+1}`)
            .then(res => res.json())
            .then(movie => {
                document.getElementById('buy-ticket').textContent = 'Buy Ticket'
                setUpMovieDetails(movie)
            })

        })
    }
}


// the poster to be dispalyed on the  poster id to show the following
function setUpMovieDetails(funMovie){
    
    const preview = document.getElementById('poster')
    preview.src = funMovie.poster;
    //title of the movie
    const movieTitle = document.querySelector('#title');
    movieTitle.textContent = funMovie.title;
    //runtime of the movie
    const movieTime = document.querySelector('#runtime');
    movieTime.textContent = `${funMovie.runtime} minutes`;

    //description of the movie
    const movieDescription = document.querySelector('#film-info');
    movieDescription.textContent = funMovie.description;
    //Showtime of the movie
    const showTime = document.querySelector('#showtime')
    showTime.textContent = funMovie.showtime;
    // available tickets =capacity - tickets sold
    const tickets  = document.querySelector('#ticket-number')
    tickets.textContent = funMovie.capacity -funMovie.tickets_sold;
}

 //Sold out section
const btn = document.getElementById('buy-ticket')

        btn.addEventListener('click', function(event){
            let remainingTickets = document.querySelector('#ticket-number').textContent
            event.preventDefault()
            if(remainingTickets > 0){
                document.querySelector('#ticket-number').textContent  = remainingTickets-1
                
            }
            else if(parseInt(remTickets, 10)===0){
                btn.textContent = 'Sold Out'
            }
    })