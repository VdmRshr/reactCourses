import React from 'react';
import './style.css';
import { ReactComponent as RubyIcon } from './icons/ruby.svg';
import { ReactComponent as PythonIcon } from './icons/python.svg';
import { ReactComponent as JavaIcon } from './icons/java.svg';
import { ReactComponent as JavacriptIcon } from './icons/javascript.svg';
import { ReactComponent as PhpIcon } from './icons/php.svg';
import PropTypes from "prop-types";

const languages = [
  {name: 'JavaScript', icon: JavacriptIcon},
  {name: 'Java', icon: JavaIcon},
  {name: 'Ruby', icon: RubyIcon},
  {name: 'PHP', icon: PhpIcon},
  {name: 'Python', icon: PythonIcon},
];

function LanguagePicker({ languages, selected, onUpdateLanguage }) {
  return (
    <ul className="">
      {languages.map(({name, icon: Icon}) => (
        <li key={name} className="language" >
          <button
            className='btn-clear nav-link'
            style={name === selected ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(name)}
          >
            <Icon width={32} height={32} className="icon" />
            {name}
          </button>
        </li>
      ))}
    </ul>
  )
}
LanguagePicker.propTypes = {
  selected: PropTypes.string,
  onUpdateLanguage: PropTypes.func,
  languages: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        icon: PropTypes.elementType
      })
  ),
};
class Popular extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedLanguage: 'JavaScript'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }
  updateLanguage (selectedLanguage) {
    this.setState({
      selectedLanguage
    })
  }
  render() {
    const { selectedLanguage } = this.state;
    return (
      <LanguagePicker
        selected={selectedLanguage}
        onUpdateLanguage={this.updateLanguage}
        languages={languages}
      />
    )
  }
}

const Task = () => {
  return (
    <Popular />
  );
};

export default Task;
