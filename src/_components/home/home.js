import React, { Component } from 'react';
import './home.css';
import reactLogo from '../../react-logo.svg';
import angularLogo from '../../angular.svg';

class Home extends Component {
  render() {
    return (
        <div className="Home">
          <div className="Home-heading">
            <h1>Bartosz Borawski - Portfolio</h1>
          </div>
          <article className="Home-body">
            <p>Witam na stronie z moim portfolio. Zebrałem tutaj swoje dotychczasowe projekty, na których uczyłem się różnych funkcjonalności.</p>
            <p>W swoich projektach wykorzystywałem głównie:</p>
            <div className="Logo-box">
              <img src={reactLogo} className="React-logo" alt="React Logo" />
              <img src={angularLogo} className="Angular-logo" alt="Angular Logo" />
            </div>
            <p>Zachęcam do zapoznania się z całą zawartością tej strony.</p>
          </article>
        </div>
    );
  }
}

export default Home;