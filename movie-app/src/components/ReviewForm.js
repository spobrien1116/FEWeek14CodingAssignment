import React from 'react';
import Stars from './Stars';
import Review from './Review';

/* This is where the class ReviewForm is exported as a component to ReviewList.js
It contains an import of both the Stars and Review components, as well as a button for submitting stars rating and review content input. */
export default class ReviewForm extends React.Component {
    render () {
        return (
            <div id="reviewFormComponent">ReviewForm component
                <div id="starsComponent">
                    <Stars />
                </div>
                <div>
                    <Review />
                </div>
                <div>
                    <button type="button" className="btn btn-primary form-control" id="submitReview">Submit Review</button>
                </div>
            </div>
        );
    }
}