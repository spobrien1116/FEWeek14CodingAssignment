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
                <p>Review component</p>
                <p>{this.props.movieReview}</p>
            </div>
        );
    }
}