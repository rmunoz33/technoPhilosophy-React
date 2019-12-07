import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import { POSTS } from '../shared/posts';
import { VIDEOS } from '../shared/videos';
import { GAMES } from '../shared/games';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: POSTS,
            videos: VIDEOS,
            games: GAMES 
        };
    }

    render() {

        const HomePage = () => {
            return (
                <Home 
                    post={this.state.posts.filter(post => post.featured)[0]}
                    video={this.state.videos.filter(video => video.featured)[0]}
                    game={this.state.games.filter(game => game.featured)[0]}
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory campsites={this.state.campsites} />} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
                    <Route exact path='/aboutus' render={() => <About partners={this.state.partners} /> } />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
