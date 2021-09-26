import React from "react"
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import Button from "../custom-button/custom-button.component"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js"

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault()
        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: "",
                password: ""
            })
        }
        catch (error) {
            console.log(Error)
        }

        this.setState({ email: "", password: "" })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label="email"
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label="password"
                        required />
                    <div className="buttons">
                        <Button type="submit" >Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn