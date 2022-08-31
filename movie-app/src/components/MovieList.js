import React from 'react';
import Movie from './Movie';

export default class MovieList extends React.Component {
    render () {
        return (
            <div>Movie List component
                <Movie />
            </div>
        );
    }
}