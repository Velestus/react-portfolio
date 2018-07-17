import React, { Component } from 'react';
import './about.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.handleCVClick.bind(this);
    this.handleCVEnglishClick.bind(this);
  }
  handleCVClick() {
    window.open("http://projects.bborawski.pl/cv/CV_Borawski_Bartosz.pdf", "_blank");
  }
  handleCVEnglishClick() {
    window.open("http://projects.bborawski.pl/cv/CV_Borawski_Bartosz_English.pdf", "_blank");
  }

  render() {
    return (
        <div className="About">
          <div className="About-heading">
            <h1>O Mnie</h1>
          </div>
          <article className="About-body">
            <img src="http://projects.bborawski.pl/cv/avatar.JPG" className="About-photo" alt="Bartosz Borawski zdjęcie"/>
            <p>Kilka krótkich informacji z mojego życia:</p>
            <ul className="About-list">
              <li>Jestem absolwentem Wydziału Mechatroniki Politechniki Warszawskiej</li>
              <li>Posiadam sporą kolekcję gier planszowych</li>
              <li>Lubię przeczytać dobrą książkę fantasy</li>
            </ul>
            <p>O mojej przeszłości zawodowej, osiągnięciach oraz umiejętnościach przeczytać można w moim CV.</p>
            <div className="About-icon-container">
              <div className="About-icon-wrapper">
                <a className="About-icon" onClick={this.handleCVClick}><i class="fa fa-file-text-o fa-5x" aria-label="Zobacz polskie CV"></i></a>
                <p>Język polski.</p>
              </div>
              <div className="About-icon-wrapper">
                <a className="About-icon" onClick={this.handleCVEnglishClick}><i class="fa fa-file-text-o fa-5x blue" aria-label="Zobacz angielskie CV"></i></a>
                <p>Język angielski.</p>
              </div>
            </div>
            <p>Kliknięcie w ikonę otworzy plik z moim CV.</p>
          </article>
        </div>
    );
  }
}

export default About;