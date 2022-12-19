import React from "react";
import "./sigin.style.scss"
import FormInput from "../form-input/form-input.component";
import CustomeButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class Signin extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email :"",
            password: "",
        }
    }
    handleSubmit = event =>{
        event.preventDefault();
        this.setState({email: "", password: ""})
    }
    handleChange = event => {
        const{value, name}=event.target;
        this.setState({[name]: value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>Already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name="email"
                      type="email"
                       value={this.state.email}
                       handleChange={this.handleChange} 
                       placeholder="email"
                       required />
                    <FormInput 
                    name="password" 
                    type="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    placeholder="password"
                     required />
                     <div className="button">
                    <CustomeButton type="submit" >SIGN IN</CustomeButton>
                    <CustomeButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomeButton>
                    </div>
                </form>

            </div>
        )
    }
}
export default Signin;