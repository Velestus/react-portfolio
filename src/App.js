import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './_components/navbar/navbar';
import Home from './_components/home/home';
import About from './_components/about/about';
import Projects from './_components/projects/projects';
import Contact from './_components/contact/contact';
import Footer from './_components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <main className="Main-body">
          <div className="Main-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/contact" component={Contact} />
              <Route render={() => <h1>Page not found</h1>} />
            </Switch>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
