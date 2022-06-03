import React from 'react';
import { Props } from './constants'

const Search:React.FC<Props> = ({ searchLocation, handleInputChange }) => {
    return (
        <input
            className="form-control searchInput"
            onChange={handleInputChange}
            onKeyPress={searchLocation}
            placeholder="Search"
            type="text"
        />
    );
}

export default Search;
