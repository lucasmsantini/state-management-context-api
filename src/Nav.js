import React, {useContext} from 'react';
import {MovieContext} from './MovieContext.js';

const Nav = () => {
    const [movies,setmovies] = useContext(MovieContext);

    return(
        <div>
            <h3>Lucas</h3>
            <p>Lista de Movies: {movies.length} </p>
        </div>

    );

}

export default Nav;