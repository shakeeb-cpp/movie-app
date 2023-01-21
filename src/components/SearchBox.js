import React from 'react'

const SearchBox = (props) => {
    return (
        <div className='col col-sm-4 col-7 ms-auto me-2' >
            <form className="d-flex" role="search">
                <input className="form-control text-bg-light me-2" placeholder='Search Here ...' value={props.value} onChange={(event) => props.setSearchValue(event.target.value)} type="search" aria-label="Search" />
            </form>
        </div>
    )
}

export default SearchBox
