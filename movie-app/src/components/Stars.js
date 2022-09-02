import React from 'react';

/* This is where the class Stars is exported as a component to ReviewForm.js
It contains a form which allows for the movie review's rating in stars, from 1 to 5. */
export default class Stars extends React.Component {
    constructor(props) {
        super(props);
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(somethingHappens) {
        this.props.handleStarChange(somethingHappens.target.value);
    }
    
    /* The value in the <select> element of {this.props.starValue} is meant to serve as a target to further change its state
    up in the parent ReviewForm component. */
    render() {
        return (
            <div className="starsComponent">
                <form>
                    <label htmlFor="starRatingInput" className="form-control starRatingLabel">How would you rate this? (1 to 5)</label>
                    <select className="form-select starRatingInput" aria-label="Default menu selection" value={this.props.starValue} onChange={this.handleChange}>
                        <option defaultValue value="">Choose a rating</option>
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