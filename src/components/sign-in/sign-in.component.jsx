import React  from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

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
          <FormInput 
            name="email" 
            type="email" 
            value={this.state.email} 
            handleChange={this.handleChange} 
            label="email"
            required
          />
          <FormInput 
            name="password" 
            type="password"
            value={this.state.password} 
            handleChange={this.handleChange}
            label="password"
            required
          />
            <CustomButton type="submit" > Sign In </CustomButton>
            <CustomButton onClick={signInWithGoogle}> Sign In With Google </CustomButton>
        </form>
      </div>
    )
  }
}

export default SignIn;