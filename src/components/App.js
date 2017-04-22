import React, { Component } from 'react';
import ChatApp from './ChatApp';

require('../styles/App.css');
require('../styles/Login.css');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};

    this.usernameChangeHandler = this.usernameChangeHandler.bind(this);
    this.usernameSubmitHandler = this.usernameSubmitHandler.bind(this);
  }
  
  usernameChangeHandler(e) {
    this.setState({username: e.target.value});
  }

  usernameSubmitHandler(e) {
    e.preventDefault();
    this.setState({submitted: true, username: this.state.username});
  }

  render() {
    if (this.state.submitted) {
      return (
        <ChatApp username={this.state.username} />
      );
    }

    return (
      <form className="username-container" onSubmit={this.usernameSubmitHandler}>
        <h1>React Chat</h1>
        <div>
          <input 
            type="text"
            onChange={this.usernameChangeHandler}
            placeholder="Enter a username..."
            required
          />
        </div>
          <input 
            type="submit"
            value="Submit"
          />
      </form>
    );
  }
}

export default App;
