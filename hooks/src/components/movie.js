import { useState , useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function Movie() {

    const {movie_id} = useParams();
    const [movie , SetMovie] = useState({});
 
    useEffect (()=>{
      
        axios(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=aa4bd1bce4554a2e53b3fc7f8136422c&language=en-US&page%22`)
            .then((res) =>SetMovie(res.data));

              

	}, [movie_id]);

	console.log(movie)
    return(
        <div className  ="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src={'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path}  /></div>
						</div>

						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">{movie.title}</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">Rate: {movie.vote_average}</span>
						</div>
						<p className="product-description">{movie.overview}</p>
						<h4 className="price">Generate Date: <span>{movie.release_date}</span></h4>


		
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">Watch</button>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    );
}

export default Movie;