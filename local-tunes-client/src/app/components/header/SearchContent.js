import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchContent = () => {

    return (
        <div className="row o-homeHeader">
                <div className="col-12 m-searchTitle">
                    <h2>Discover</h2>
                </div>
                <div className="col-12 o-searchField">
                    <form>
                        <input type="text" name="search" className="a-searchInput"></input>
                        <button type="submit" className="a-searchButton">
                        <FontAwesomeIcon icon={faSearch} className="a-navLogo" id="search"/>

                        </button>
                    </form>
                </div>
            </div>
    )
}

export default SearchContent;