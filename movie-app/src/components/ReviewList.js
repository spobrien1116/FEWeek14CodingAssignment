import React from 'react';
import Review from './Review';

/* This is where the class ReviewList is exported as a component to Movie.js
It contains an empty array of reviews, and an import of the ReviewForm component. */
export default class ReviewList extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        let myReviews = [];
        let count = 0;
        for (let movieReview of this.props.reviewArray) {
            myReviews.push(<Review {...{movieReview, key: count ++}}/>);
        }
        
        return (
            <div className="reviewListComponent">ReviewList component
                <div>
                    Movie Reviews
                    {myReviews}
                </div>
            </div>
        );
    }
}