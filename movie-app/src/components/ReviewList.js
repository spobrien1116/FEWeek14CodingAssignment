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
        for (let i = 0; i < this.props.reviewArray.length; i++) {
            myReviews.push(<Review {...{movieReview: this.props.reviewArray[i], starReview: this.props.starArray[i], key: count ++}}/>);
        }
        
        return (
            <div className="reviewListComponent">
                <div>
                    <h3>Movie Reviews</h3>
                    {myReviews}
                </div>
            </div>
        );
    }
}