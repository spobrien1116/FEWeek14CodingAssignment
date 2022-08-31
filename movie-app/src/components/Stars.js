import React from 'react';

/* This is where the class Stars is exported as a component to ReviewForm.js
It contains a form which allows for the movie review's rating in stars, from 0 to 5. */
export default class Stars extends React.Component {
    render() {
        return (
            <div id="starsComponent">Stars component
                <form>
                    <label htmlFor="starRatingInput" className="form-control" id="starRatingLabel">How would you rate this? (0 to 5)</label>
                    <select className="form-select" id="starRatingInput" aria-label="Default menu selection">
                        <option defaultValue>Choose a rating</option>
                        <option value="0">Zero stars</option>
                        <option value="1">One star</option>
                        <option value="2">Two stars</option>
                        <option value="3">Three stars</option>
                        <option value="4">Four stars</option>
                        <option value="5">Five stars</option>
                    </select>
                </form>
            </div>
        );
    }
}