import React, { Component } from 'react';
import './contact.css';
import linkedInLogo from '../../linkedin.png';
import gitHubLogo from '../../github.svg';

class Contact extends Component {
  handleLinkedInClick() {
    window.open("https://www.linkedin.com/in/bartosz-borawski-134a7b142/", "_blank");
  }
  handleGitHubClick() {
    window.open("https://github.com/Velestus/", "_blank");
  }
  
  render() {
    return (
        <div className="Contact">
          <div className="Contact-heading">
            <h1>Dane Kontaktowe</h1>
          </div>
          <article className="Contact-body">
            <p>Mam nadzieję, że moje portfolio przyciąga uwagę.</p>
            <p>Poniżej podaję sposoby skontaktowania się ze mną:</p>
            <p><i class="fa fa-at" aria-hidden="true"></i> Adres e-mail: <span className="Email-address">b.borawski92@gmail.com</span></p>
            <div className="Contact-type-box">
              <p>LinkedIn</p>
              <img src={linkedInLogo} className="LinkedIn-logo" alt="LinkedIn Logo" onClick={this.handleLinkedInClick}/>
            </div>
            <div className="Contact-type-box">
              <p>GitHub</p>
              <img src={gitHubLogo} className="GitHub-logo" alt="GitHub Logo" onClick={this.handleGitHubClick}/>
            </div>
          </article>
        </div>
    );
  }
}



export default Contact;