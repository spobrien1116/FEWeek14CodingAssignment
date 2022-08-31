import React from 'react';
import ReviewForm from './ReviewForm';

/* This is where the class ReviewList is exported as a component to Movie.js
It contains an empty array of reviews, and an import of the ReviewForm component. */
export default class ReviewList extends React.Component {
    render () {
        let reviewArray = [];
        
        return (
            <div id="reviewListComponent">ReviewList component
                <div>
                    <ReviewForm />
                </div>
                <div>
                    Movie Reviews
                    {reviewArray}
                </div>
            </div>
        );
    }
}