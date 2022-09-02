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

    handleSubmit(theReview, theStarValue) {
        this.props.buttonSubmitAgain(theReview, theStarValue, this.props.movieDetail.id);
    }

    render() {
        return (
            <div key={this.props.movieDetail.id} className="movieComponent">
                <h2>{this.props.movieDetail.title}</h2>
                <br></br>
                <img src={this.props.movieDetail.image} width='600' className="image"></img>
                <p className="synopsis"><b>Synopsis</b><br></br>
                <i>{this.props.movieDetail.synopsis}</i></p>
                <br></br>
                <div>
                    <ReviewList {...{reviewArray: this.props.movieDetail.reviewArray, starArray: this.props.movieDetail.starArray}}/>
                </div>
                <br></br>
                <div>
                    <ReviewForm {...{reviewArray: this.props.movieDetail.reviewArray, buttonSubmit: this.handleSubmit}}/>
                </div>
            </div>
        );
    }
}