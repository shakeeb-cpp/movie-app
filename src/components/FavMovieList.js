import React from 'react'

const FavMovieList = (props) => {

    const FavouriteCompnent = props.favouriteComponent;
    
    return (
        <div className='container-flex ' >
            <div className='col-12 mb-5 row flex flex-nowrap row-cols-lg-5 row-cols-sm-3 row-cols-2 align-items-center align-content-center g-1' style={{ maxHeight: '458px', marginTop: '0px' }} >
                {props.movies.map((movie, index) => {
                    return <div key={movie.imdbID} className='img-container2 d-flex justify-content-center m-sm-2 m-2' >
                        <img className='card-img' src={movie.Poster} alt="movie" style={{ height: '350px'}} />
                        <div onClick={() => props.handleFavouritesClick(movie)} className='overlay2 d-flex align-items-center justify-content-center'><FavouriteCompnent /></div>
                    </div>

                })}
            </div>
        </div>
    )
}

export default FavMovieList
