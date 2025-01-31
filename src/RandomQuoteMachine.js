import React from "react";

class RandomQuoteMachine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        random: Math.floor(Math.random() * 3),
        quotes: [
          {
            quote: "quote 1",
            author: "me"
          },
          {
            quote: "quote 2",
            author: "you"
          },
          {
            quote: "quote 3",
            author: "them"
          },
        ]
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
      this.setState({
        random: Math.floor(Math.random() * 3)
      });
      console.log(this.state.random);
    };
    render() {  
      const text = this.state.quotes[this.state.random].quote;
      const author = this.state.quotes[this.state.random].author;
      return (
        <div id="quote-box">
          <div id="text">"{text}"</div>
          <div id="author">-{author}</div>
          <button id="new-quote" onClick={this.handleClick}>Fetch a new quote</button>
          <br />
          <a href={`https://twitter.com/intent/tweet?text="${text}" ${author}`} id="tweet-quote">tweet</a>
      </div>
      )
    }
  };

  export default RandomQuoteMachine;