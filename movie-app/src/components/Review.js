import React from 'react';

/* This is where the class Review is exported as a component to ReviewForm.js 
It contains a form for the content of a review's input. */
export default class Review extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render () {
        return (
            <div className="reviewComponent">
                <h5>Movie Review</h5>
                <p className="review">{this.props.movieReview}</p>
                <h4>Star Rating: {this.props.starReview}</h4>
            </div>
        );
    }
}