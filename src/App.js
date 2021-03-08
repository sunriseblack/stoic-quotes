import './App.css';
import React from 'react'
window.React = React

class StoicQuote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      author: ''
    };
    this.submitQuote = this.submitQuote.bind(this);
  }

  submitQuote() {
    fetch('https://stoic-server.herokuapp.com/random')
        .then(response => response.json())
        .then(data => this.setState({text: data[0].body, author: data[0].author}))
  }

  componentDidMount() {
    this.submitQuote()
  }

  render() {
    return (
        <div className='wrapper'>
          <div id='quote-box'>
            <div id='text'><span id='quote-mark'>"</span>{this.state.text}</div>
            <div id='author'>– {this.state.author}</div>
            <a id='tweet-quote'></a><button id='new-quote' onClick={this.submitQuote}>New Quote</button>
          </div>
        </div>

    )
  }
}

export default StoicQuote