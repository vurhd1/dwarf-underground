import React, { Component } from 'react';

import './App.css';
import Header from './Header'
import Author from './Author'
import MainArticle from './MainArticle'
import ArticleLinks from './ArticleLinks'
import Advirtisement from './Advirtisement'
import NewLinks from './NewLinks'

class App extends Component {
  render() {
    return (
      <div className="App">

        <Header />

        <main className="expanded row">
          <div className="large-8 medium-12 columns article">
            <h2 className="article-title">Gold Madness - Fact or Fiction?</h2>
            
            <Author />

            <MainArticle />

            <ArticleLinks />

          </div>
          
          <Advirtisement />

          <NewLinks />

        </main>

        <footer className="expanded row">
          <h6>&copy; 2017 Erebor Industries</h6>
          <h6 className="float-right">All rights reserved</h6>
        </footer>
      </div>
    );
  }
}

export default App;
