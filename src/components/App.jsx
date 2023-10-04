import React, { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = event => {
    console.log(event.target.name);
    this.setState(prevState => ({
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <div className={css.buttonWrap}>
          <button
            onClick={event => this.handleIncrement(event)}
            name="good"
            type="button"
          >
            Good{' '}
          </button>
          <button
            onClick={event => this.handleIncrement(event)}
            name="neutral"
            type="button"
          >
            Neutral{' '}
          </button>
          <button
            onClick={event => this.handleIncrement(event)}
            name="bad"
            type="button"
          >
            Bad{' '}
          </button>
        </div>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
