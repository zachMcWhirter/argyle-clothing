import React  from "react";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  handleSubmit = (e) => {
    e.prevent.default();

      // Clear the fields by setting email and password back to empty strings
    this.setState({email: "", password: ""})
  }

  handleChange = e => {
    const { value, name } = e.target;

      // This allows us to dynamically set the state, so 
      // [name] is set to the value of the name property of 
      // the input field being changed by the user. And the value
      // becomes the actual text input by the user
    this.setState({ [name]: value })
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input 
            name="email" 
            type="email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required
          />
          <label>Email</label>
          <input 
            name="password" 
            type="password"
            value={this.state.password} 
            onChange={this.handleChange}
            required
          />
          <label>Password</label>
          <input
            type="submit"
            value="Submit Form" 
          />
        </form>
      </div>
    )
  }
}

export default SignIn;