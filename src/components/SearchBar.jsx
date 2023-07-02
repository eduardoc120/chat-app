import React from 'react';

import '../assets/styles/SearchBar.css';

import searchIcon from '../assets/static/search.svg';

const SearchBar = props => (
    <div className={`Search-bar ${props.extraClasses && props.extraClasses}`}>
        <input type="text" placeholder="Search..." onChange={props.handler} />
        <img src={searchIcon} alt="search icon"/>
    </div>
);

export default SearchBar;
