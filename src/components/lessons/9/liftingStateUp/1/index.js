import React from 'react';
import PropTypes from "prop-types";

const VoteComponent = ({resolution, terminalNumber, onVote}) => {
    const style = {
        padding: '8px',
        marginTop: '16px',
        border: 'solid 1px grey',
    };
    const increase = () => {
        onVote('inc');
    };
    const decrease = () => {
        onVote('dec');
    };

    console.log('VoteComponent render');
    return (
        <div style={style}>
            <h6>Terminal number: {terminalNumber}</h6>
            <h3>Resolution: "{resolution}"</h3>
            <button onClick={decrease}>No</button>
            <button onClick={increase}>Yes</button>
        </div>
    );

}

VoteComponent.propType = {
    resolution: PropTypes.string.isRequired,
    onVote: PropTypes.func.isRequired,
    terminalNumber: PropTypes.number.isRequired,
};

const VotingDisplay = ({resolution, result}) => {
    return (
        <React.Fragment>
            <h1>Resolution: {resolution}</h1>
            <h2>Result: {result}</h2>
        </React.Fragment>
    );
};

VotingDisplay.propType = {
    resolution: PropTypes.string.isRequired,
    result: PropTypes.number.isRequired
};

class VotingSystem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            votesNumber: 0,
        };
    }

    onVote = (arg) => {
        this.setState({votesNumber: arg === 'inc' ? this.state.votesNumber + 1 : this.state.votesNumber - 1});
    };

    render() {
        const {resolution} = this.props;
        const {votesNumber} = this.state;
        return (
            <React.Fragment>
                <VotingDisplay resolution={resolution} result={votesNumber}/>
                <VoteComponent resolution={resolution} onVote={this.onVote} terminalNumber={1}/>
                <VoteComponent resolution={resolution} onVote={this.onVote} terminalNumber={2}/>
                <VoteComponent resolution={resolution} onVote={this.onVote} terminalNumber={3}/>
            </React.Fragment>
        );
    }
}

VotingDisplay.propType = {
    resolution: PropTypes.string.isRequired,
};

const resolution = 'Free beer to all programmers';

const Task = () => {
    return (
        <div>
            <VotingSystem resolution={resolution}/>
        </div>
    );
};

export default Task;
