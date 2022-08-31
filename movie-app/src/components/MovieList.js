import React from 'react';
import Movie from './Movie';

/* The MovieList class is exported as a container/component to App.js
It contains an import of the Movie component, which is used multiple times. */
export default class MovieList extends React.Component {
    render () {
        let movieOne = {
            image: 'https://media.istockphoto.com/photos/ai-robot-thinking-picture-id1029035836',
            synopsis: 'A movie about a robot that becomes self-aware and begins to question its purpose.'
        }

        let movieTwo = {
            image: 'https://freedesignfile.com/upload/2017/05/Female-chef-Stock-Photo-04.jpg',
            synopsis: 'A movie about a chef who is also a wizard.'
        }

        let movieThree = {
            image: 'https://media.istockphoto.com/photos/alien-picture-id664373658?k=20&m=664373658&s=170667a&w=0&h=RNyzsmYPmT5E-KTrDMEg1u93X5IFf9za8N9oc8bauaU=',
            synopsis: 'A movie about an alien coach inspiring an underdog hockey team on Pluto.'
        }
        
        return (
            <div id="movieListComponent">MovieList component
                <Movie {...movieOne}/>
                <Movie {...movieTwo}/>
                <Movie {...movieThree}/>
            </div>
        );
    }
}