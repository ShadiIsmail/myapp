import React from 'react'

class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          inputvalue: '',
          hasError:false
      }

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({
          inputvalue: event.target.value
      })
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
      this.setState({
        hasError: !isParenthesisMatching(event.target.value)
      }, () => {
        console.log(this.state)
      })
  }

  render() {
    return (
      <div className="App">

          <form onSubmit={this.handleSubmit}>
              <textarea className="textarea" placeholder="Your Code Goes Here!" value={this.state.inputvalue} onChange={this.handleChange}/>
              <br/>
        <button
              onClick={this.props.handleChange}>{this.props.label}
              <span>{this.state.hasError ? 'Bro Check Your Code!' : "You Are Awesome! "}</span>
       </button>
          </form>

      </div>

    );
  }
}

export default Form
