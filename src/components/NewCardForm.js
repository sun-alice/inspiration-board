import React, { Component } from "react";
import PropTypes from "prop-types";
import emoji from "emoji-dictionary";
import "./NewCardForm.css";

const EMOJI_LIST = [
  "",
  "heart_eyes",
  "beer",
  "clap",
  "sparkling_heart",
  "heart_eyes_cat",
  "dog"
];

class NewCardForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      emoji: ""
    };
  }

  onInputChange = event => {
    const updatedState = {};

    const field = event.target.name;
    const value = event.target.value;

    updatedState[field] = value;
    this.setState(updatedState);
  };

  onSubmitHandler = event => {
    event.preventDefault();

    if (this.state.text) {
      this.props.addCardCallback({
        text: this.state.text,
        emoji: this.state.emoji
      });

      this.setState({
        text: "",
        emoji: ""
      });
    }
  };

  render() {
    const emojiOptions = EMOJI_LIST.map((option, i) => {
      return (
        <option key={i} value={option}>
          {emoji.getUnicode(option)}
        </option>
      );
    });

    return (
      <div>
        <form className="new-card-form" onSubmit={this.onSubmitHandler}>
          <h3 className="new-card-form__header">Add a Card</h3>
          <div>
            <label className="new-card-form__form-label" htmlFor="text">
              Text:
            </label>
            <input
              className="new-card-form__form-textarea"
              name="text"
              id="text"
              onChange={this.onInputChange}
              value={this.state.text}
            />
          </div>
          <div>
            <label className="new-card-form__form-label" htmlFor="emoji">
              Emoji:
            </label>
            <select
              name="emoji"
              id="emoji"
              onChange={this.onInputChange}
              value={this.state.emoji}
            >
              {emojiOptions}
            </select>
          </div>
          <button className="new-card-form__form-button">Add a Card</button>
        </form>
      </div>
    );
  }
}

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired
};

export default NewCardForm;
