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
        .catch((error) => {
          console.error('Error:', error);
        });
  }

  componentDidMount() {
    this.submitQuote()
  }

  render() {
    return (
        <div className='wrapper'>
          <div id='quote-box'>
            <div id='text'>”{this.state.text}”</div>
            <div id='author'>– {this.state.author}</div>
            <div id='button-container'><a id='tweet-quote' href="twitter.com/intent/tweet"></a><button id='new-quote' onClick={this.submitQuote}>New Quote</button></div>
          </div>
        </div>
    )
  }
}

export default StoicQuote

let vh = window.innerHeight * 0.01;

document.documentElement.style.setProperty('--vh', `${vh}px`);