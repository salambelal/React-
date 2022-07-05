import React, {  useState ,useEffect} from 'react'

function Home() {

    const [movie, SetMovie] = useState([]);

    useEffect(() => {

        fetch("https://api.themoviedb.org/3/movie/popular?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US&page%22")
            .then((res) => res.json())
            .then((data) => {

                SetMovie(data.results);
                console.log(data.results);

            })



    }, [])
    return <div className="row">
     {movie.map((movie)=> 
     <div key={movie.id} className="card" style={{width: '18rem'}}>
    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} class="card-img-top" alt="..."></img>  <div class="card-body">
    <h5 class="card-title">{movie.title}</h5>
    <p class="card-text">{movie.original_language}</p>
    <a href={movie.id} class="btn btn-primary">Go somewhere</a>
  </div>
</div>
       )}
    </div>


}

export default Home