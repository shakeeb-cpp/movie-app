import React, { useState, useEffect } from 'react';
import './App.css';
import AddFavourites from './components/AddFavourites';
import FavMovieList from './components/FavMovieList';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import MovieListHeadingfav from './components/MovieListHeadingfav';
import SearchBox from './components/SearchBox';
import RemoveFavourites from './RemoveFavourites';

function App() {

  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState('');


  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1f6022fa`;

    let response = await fetch(url);
    let responseJson = await response.json();
    // console.log(responseJson);
    if (responseJson.Search) {
      setMovies(responseJson.Search)
    }
  }

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem('react-movie-favourites'));
    setFavourites(movieFavourites)
  }, []);


  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-favourites', JSON.stringify(items));

  }

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter((favourite) =>
      favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  return (
    <>
      <div className='container-flex mt-5'>
        <MovieListHeading heading='Movies' />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className='container-flex p-lg-3 mx-sm-2 ' id='news-container'>

        <MovieList movies={movies} handleFavouritesClick={addFavouriteMovie} favouriteComponent={AddFavourites} />

      </div>
      <div className='container-flex mt-5'>
        <MovieListHeadingfav heading='Favourites' />
      </div>
      <div className="container-flex mt-3 mb-5 overflow-x-auto" >
        <FavMovieList movies={favourites} handleFavouritesClick={removeFavouriteMovie} favouriteComponent={RemoveFavourites} />
      </div>

    </>
  );
}

export default App;
