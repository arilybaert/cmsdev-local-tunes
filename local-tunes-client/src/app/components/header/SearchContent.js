import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContent = () => {

    const handleSearch = (event) => {
        console.log(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
    return (
        <div className="row o-homeHeader">
                <div className="col-12 m-searchTitle">
                    <h2>Discover</h2>
                </div>
                <div className="col-12 o-searchField">
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="search" className="a-searchInput" onChange={handleSearch}></input>
                        <button type="submit" className="a-searchButton">
                        <FontAwesomeIcon icon={faSearch} className="a-navLogo" id="search"/>

                        </button>
                    </form>
                </div>
            </div>
    )
}

export default SearchContent;