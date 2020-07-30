import React from 'react';
import PropTypes from "prop-types";
import List from "../2/components";

const buttons = [
    'first',
    'nano',
    'bob',
    'tomato',
];

class Index extends React.Component {
    state = {
        activeButtonName: '',
    };
    clickHandler = (name, active) => {
        this.setState({
            activeButtonName: name,
        });
    };
    render() {
        const {activeButtonName} = this.state;
        return (
            <div>
                {buttons.map((i, index) => (
                    <Button clickHandler={this.clickHandler} key={index} name={i}
                            active={this.state.activeButtonName}/>
                ))}
                <Details name={activeButtonName}/>
            </div>
        );
    }
}

const Button = ({name, active, clickHandler}) => {
    const onClickHandler = () => {
        clickHandler(name);
    };
    return (
        <button
            onClick={onClickHandler}
            style={{color: active === name ? 'red' : 'blue'}}
        >
            {name}
        </button>
    );
};
Button.propTypes = {
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
};

function Details({name}) {
    return <div>{name}</div>;
}
Details.propTypes = {
    name: PropTypes.string,
};

const Task = () => {
    return <Index/>;
};

export default Task;
