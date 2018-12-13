import React from 'react'

function CheckBalance(props) {

let isParenthesisMatching = (str) => {
    let stack = [];

    let open = {
        '{': '}',
        '[': ']',
        '(': ')'
    };

    let closed = {
        '}': true,
        ']': true,
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}
}


class Form extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
          inputvalue: ''
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
      this.setState({
          inputvalue: event.target.value
      })
  }

  handleSubmit (event) {
      console.log('Form value: ' + this.state.inputvalue);
      event.preventDefault();
  }


  render() {
    return (
      <div className="App">
      
          <form onSubmit={this.handleSubmit}>
              <textarea className="textarea" placeholder="Your Code Goes Here Bro!" value={this.state.inputvalue} onChange={this.handleChange}/> <br/>
              <button className="btn btn-default"
       onClick={this.props.handleClick}>{this.props.label} Click Me If you Dare!</button>
          </form>
      </div>
    
    );
  }
}


export default Form