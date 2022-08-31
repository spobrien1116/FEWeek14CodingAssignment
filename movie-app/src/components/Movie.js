import React from 'react';
import ReviewList from './ReviewList';

/* This is where the class Movie is exported as a component to MovieList.js
It contains an import of ReviewList component, in addition to props from MovieList which include the movie's image and synopsis. */
export default class Movie extends React.Component {
    render() {
        return (
            <div id="movieComponent">Movie component
                <br></br>
                <img src={this.props.image} width='600'></img>
                <p><b>Synopsis</b><br></br>
                <i>{this.props.synopsis}</i></p>
                <br></br>
                <div>Review List
                    <ReviewList />
                </div>
                <br></br>
            </div>
        );
    }
}