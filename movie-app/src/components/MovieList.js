import React from 'react';
import Movie from './Movie';

/* The MovieList class is exported as a container/component to App.js
It contains an import of the Movie component, which is used multiple times. */
export default class MovieList extends React.Component {
    // handleClick() {
    //     this.setState(state => (this.reviewArray.push(formContent)));
    // }
    constructor(props) {
        super(props);
        this.state = {
            movieDetails : [
                {
                    title: 'AI: I think, Therefore I Am',
                    image: 'https://media.istockphoto.com/photos/ai-robot-thinking-picture-id1029035836',
                    synopsis: 'A movie about a robot that becomes self-aware and begins to question its purpose.',
                    id: 0,
                    reviewArray: ["Here is a one review: not great.", "Another review: I was rooting for the robot!"],
                    starArray: [2, 4]
                },
                {
                    title: 'Cast: Iron Cooking',
                    image: 'https://freedesignfile.com/upload/2017/05/Female-chef-Stock-Photo-04.jpg',
                    synopsis: 'A movie about a chef who is also a wizard.',
                    id: 1,
                    reviewArray: ["Not enough hand-made pasta.", "10/10 would watch magic dishes be made again."],
                    starArray: [1, 5]
                },
                {
                    title: 'The Goal is Out There',
                    image: 'https://media.istockphoto.com/photos/alien-picture-id664373658?k=20&m=664373658&s=170667a&w=0&h=RNyzsmYPmT5E-KTrDMEg1u93X5IFf9za8N9oc8bauaU=',
                    synopsis: 'A movie about an alien coach inspiring an underdog hockey team on Pluto.',
                    id: 2,
                    reviewArray: ["Interesting to see how low gravity changed the game completely!", "Spoilers: a little disappointed they lost the championship match."],
                    starArray: [4, 3]
                }
            ]
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(theReview, theStarValue, id) {
        this.setState(state => {
            /* This will update the movie review state. */
            state.movieDetails[id].reviewArray.push(theReview);
            /* This line of code below would be able to add the reviews into the proper reviewArray even if I had not
            set up the id of each object in movieDetails to match its index number in the array.
            
            movieDetails.find(anyMovie => anyMovie.id === id).reviewArray.push(theReview); */

            /* This will update the star rating state. */
            state.movieDetails[id].starArray.push(theStarValue);
            return state;
        })
    }

    render () {
        let myMovies = [];
        for (let movieDetail of this.state.movieDetails) {
            /* This iterates through the the array of movieDetails and pushes each object in that array into a new array
            of myMovies that consists of a Movie component with the props of that specific movieDetail object. */
            myMovies.push(<Movie {...{movieDetail, key: movieDetail.id, buttonSubmitAgain: this.handleSubmit}}/>);
        }
        
        return (
            <div id="movieListComponent">
                {myMovies}
            </div>
        );
    }
}