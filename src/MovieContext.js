import React, {useState, createContext} from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies, setmovies] = useState([
        {
            name: 'harry potter',
            price: '$10',
            id: 3851
        },
        {
            name: 'game of thrones',
            price: '$12',
            id: 56478
        },
        {
            name: 'inception',
            price: '$18',
            id: 9541
        }
    ]);
    return (
        
        <MovieContext.Provider value={[movies, setmovies]}> 
            {props.children}
        </MovieContext.Provider>
        
    )

}