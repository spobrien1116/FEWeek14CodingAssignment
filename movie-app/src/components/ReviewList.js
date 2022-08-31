import React from 'react';
import Review from './Review';

export default class ReviewList extends React.Component {
    render () {
        return (
            <div>The review list component
                <Review />
            </div>
        );
    }
}