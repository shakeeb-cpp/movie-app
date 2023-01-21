import React from 'react'

const MovieList = (props) => {

    const FavouriteCompnent = props.favouriteComponent;

    return (
        <div className='col-12 mb-5 row row-cols-lg-5 row-cols-sm-3 row-cols-2 align-items-center align-content-center g-0' >


            {props.movies.map((movie, index) => {
                return <div>
                    <div key={movie.imdbID} className='img-container d-flex justify-content-center mb-4 p-0 m-sm-3 m-2'  >
                        <img className='card-img object-fit-cover' src={movie.Poster} alt="movie" style={{ height: '360px'}} />
                        <div onClick={() => props.handleFavouritesClick(movie)} className='overlay d-flex align-items-center justify-content-start'><FavouriteCompnent /></div>
                    </div>
                </div>
            })}


        </div>
    )
}
/* //  */

export default MovieList

