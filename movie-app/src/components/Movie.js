import React from 'react';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

/* This is where the class Movie is exported as a component to MovieList.js
It contains an import of ReviewList component, in addition to props from MovieList which include the movie's image and synopsis. */
export default class Movie extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(theReview) {
        this.props.buttonSubmitAgain(theReview, this.props.movieDetail.id);
    }

    render() {
        return (
            <div key={this.props.movieDetail.id} className="movieComponent">Movie component
                <br></br>
                <img src={this.props.movieDetail.image} width='600'></img>
                <p><b>Synopsis</b><br></br>
                <i>{this.props.movieDetail.synopsis}</i></p>
                <br></br>
                <div>Review List
                    <ReviewList reviewArray={this.props.movieDetail.reviewArray}/>
                </div>
                <br></br>
                <div>Review Form
                    <ReviewForm {...{reviewArray: this.props.movieDetail.reviewArray, buttonSubmit: this.handleSubmit}}/>
                </div>
            </div>
        );
    }
}