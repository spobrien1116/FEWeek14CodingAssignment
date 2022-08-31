import React from 'react';

/* This is where the class Review is exported as a component to ReviewForm.js 
It contains a form for the content of a review's input. */
export default class Review extends React.Component {
    render () {
        return (
            <div id="reviewComponent">Review component
                <form id="reviewForm">
                    <div>
                        <label htmlFor="reviewInputContent" className="form-control" id="reviewInputLabel">Leave a review of this movie.</label>
                        <textarea className="form-control" id="reviewInputContent" rows="20"></textarea>
                    </div>
                </form>
            </div>
        );
    }
}