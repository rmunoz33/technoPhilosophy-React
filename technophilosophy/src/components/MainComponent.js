import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { POSTS } from '../shared/posts';
import { VIDEOS } from '../shared/videos';
// import { GAMES } from '../shared/games';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: POSTS,
            videos: VIDEOS
            // games: GAMES 
        };
    }

    render() {
        return (
                <h1>Rocky's site</h1>
        );
    }   
}

export default Main;
