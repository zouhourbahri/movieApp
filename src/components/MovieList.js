import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ ListOfMovies, handleRemove, handlemovie, search, ratefiltring }) => {

    return (
        <div>
            <div id="ListOfMovies">
                    {search==='' && ratefiltring===0 ?
                    ListOfMovies.map(movie => <MovieCard key={movie.id} movie={movie} handleRemove={handleRemove} handlemovie={handlemovie} />)
                    : ListOfMovies.filter(movie => (movie.title.toLowerCase().includes(search.toLowerCase()) && movie.rate.value===ratefiltring)).map(movie => <MovieCard key={movie.id} movie={movie} handleRemove={handleRemove} handlemovie={handlemovie} />)}
            </div>
        </div>
    )
}

export default MovieList
