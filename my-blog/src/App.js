import './App.css';
import React, {Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import NavBar from './NavBar'

class App extends Component {
  render(){
    return (
      <Router>
          <div className="App">
            <NavBar />
            <div id="page-body">
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} />
                <Route path="/article-list" component={ArticleListPage} />
                <Route path="/article/:name" component={ArticlePage} />
                <Route component={NotFoundPage} />
              {/* <HomePage /> */}
              </Switch>
           </div>
        </div>
      </Router>
    );
  }
}

export default App;
