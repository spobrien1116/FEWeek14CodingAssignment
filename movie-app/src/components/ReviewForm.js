import React from 'react';
import Stars from './Stars';

/* This is where the class ReviewForm is exported as a component to ReviewList.js
It contains an import of both the Stars and Review components, as well as a button for submitting stars rating and review content input. */
export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reviewProgress: '',
            starValue: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStarChange = this.handleStarChange.bind(this);
    }
    
    handleStarChange(theStarValue) {
        this.setState(state => {
            state.starValue = theStarValue;
            return state;
        });
    }
    
    handleChange(somethingHappens) {
        this.setState(state => {
            state.reviewProgress = somethingHappens.target.value;
            return state;
        });
    }
    
    handleSubmit(somethingHappens) {
        this.props.buttonSubmit(this.state.reviewProgress);
        somethingHappens.preventDefault();
    }

    render () {
        return (
            <div className="reviewFormComponent">ReviewForm component
                <div className="starsComponent">
                    <Stars handleStarChange={this.handleStarChange}/>
                </div>
                <form className="reviewForm">
                    <div>
                        <label htmlFor="reviewInputContent" className="form-control reviewInputLabel">Leave a review of this movie.</label>
                        <textarea className="form-control reviewInputContent" rows="20" onChange={this.handleChange}></textarea>
                    </div>
                </form>
                <div>
                    <button type="button" className="btn btn-primary form-control submitReview" onClick={this.handleSubmit}>Submit Review</button>
                </div>
            </div>
        );
    }
}