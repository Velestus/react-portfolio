import React, { Component } from 'react';
import './project-card.css';

class ProjectCard extends Component {
  handleSiteClick() {
    window.open(this.props.url, "_blank");
  }
  render() {
    return (
        <div className="ProjectCard">
          <p className="ProjectCard-heading">{this.props.title}</p>
          <img src={this.props.image} alt={this.props.title} onClick={this.handleSiteClick.bind(this)}/>
          <p>{this.props.description}</p>
          <p>Wykorzystano: {this.props.framework}</p>
        </div>
    );
  }
}

export default ProjectCard;