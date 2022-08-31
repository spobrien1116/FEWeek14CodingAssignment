import React from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

export default class Movie extends React.Component {
    render() {
        return (
            <div>Movie component
                <img src='#'></img>
                <p>Synopsis</p>
                <div>Rating
                    <Stars />
                </div>
                <br></br>
                <div>Review List
                    <ReviewList />
                </div>
                <div>Review Form
                    <ReviewForm />
                </div>
            </div>
        );
    }
}