import React from 'react'

const MovieListHeading = (props) => {
    return (
        <div className='col'>
            <h1 className='float-start ms-sm-4 ms-0'>{props.heading}</h1>
        </div>
    )
}

export default MovieListHeading
