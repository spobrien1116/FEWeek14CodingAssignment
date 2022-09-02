import React from 'react';
import Stars from './Stars';

/* This is where the class ReviewForm is exported as a component to ReviewList.js
It contains an import of both the Stars and Review components, as well as a button for submitting stars rating and review content input. */
export default class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starValue: ''
        };

        /* The line below is creating a reference to the text area in the render return for the <textarea> element.
        This is created so that the value can be reset to a blank string after the submit button is clicked. It is also being used
        in the handleSubmit function; see the explanation above that function. */
        this.reviewTextArea = React.createRef();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStarChange = this.handleStarChange.bind(this);
    }
    
    /* This function sets the state to reflect the value change for starValue. That value is passed up from the handleChange function
    in the child component Stars. */
    handleStarChange(theStarValue) {
        this.setState(state => {
            state.starValue = theStarValue;
            return state;
        });
    }
    
    /* The this.reviewTextArea.current.value is being sent out as a value to the function in the parent component Movie as a value for
    the input that has been typed in the <textarea> element down in the render return. It is tracked using the this.reviewTextArea = React.createRef()
    created in the constructor and linked via the ref={this.reviewTextArea} in the element below. */
    handleSubmit(somethingHappens) {
        this.props.buttonSubmit(this.reviewTextArea.current.value, this.state.starValue);
        somethingHappens.preventDefault();
        this.reviewTextArea.current.value = '';
        this.setState({starValue: ''});
    }

    render () {
        return (
            <div className="reviewFormComponent">
                <div className="starsComponent">
                    <Stars handleStarChange={this.handleStarChange} starValue={this.state.starValue}/>
                </div>
                <form className="reviewForm">
                    <div>
                        <label htmlFor="reviewInputContent" className="form-control reviewInputLabel">Leave a review of this movie.</label>
                        <textarea className="form-control reviewInputContent" rows="20" ref={this.reviewTextArea}></textarea>
                    </div>
                </form>
                <div>
                    <button type="button" className="btn btn-primary form-control submitReview" onClick={this.handleSubmit}>Submit Review</button>
                </div>
            </div>
        );
    }
}