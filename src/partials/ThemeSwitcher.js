import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import {faSun} from '@fortawesome/free-solid-svg-icons';

export default class ThemeSwitcher extends React.Component {

    render() {
        return (
            <button className="app__dark-mode-btn icon level-right" onClick={this.props.toggleTheme}>
                <FontAwesomeIcon icon={this.props.darkMode ? faSun : faMoon} color={this.props.darkMode ? '#FFA500' : '#4D5B6B'}/>
            </button>
        );
    }

}