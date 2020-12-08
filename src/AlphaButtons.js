import React, { Component } from 'react'

class AlphaButtons extends Component {
    static defaultProps = {
        letters: "abcdefghijklmnopqrstuvwxyz",
        guessed: "apple"
    }
    render() {
        return this.props.letters.split("").map(ltr => (
            <button
              value={ltr}
              onClick={this.props.onClick}
              disabled={this.props.guessed.has(ltr)}
              key={ltr}
            >
              {ltr}
            </button>
          ));
    }
}

export default AlphaButtons;