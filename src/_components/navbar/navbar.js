import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
  render() {
    return (
        <header className="nav-container">
            <h2 className="title">Bartosz Borawski</h2>
            <nav className="NavBar">
                <li><NavLink exact={true} activeClassName='is-active' to="/">Strona Główna</NavLink></li>
                <li><NavLink exact={true} activeClassName='is-active' to={{pathname: '/about'}}>O Mnie</NavLink></li>
                <li><NavLink exact={true} activeClassName='is-active' to={{pathname: '/projects'}}>Moje Projekty</NavLink></li>
                <li><NavLink exact={true} activeClassName='is-active' to={{pathname: "/contact", state: {email: "b.borawski92@gmail.com"}}}>Kontakt</NavLink></li>
            </nav>
        </header>
    );
  }
}

export default NavBar;