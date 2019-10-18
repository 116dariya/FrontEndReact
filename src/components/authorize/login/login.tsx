import React from "react";
import './import.css'
import { connect } from "react-redux";
import * as userActions from "../../../actions/userActions";


class Login extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = (event: { target: { name: any; value: any; }; }) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault()
        this.props.userLoginFetch(this.state)
    }
    
    render() {
        return (
            <div id="container">
                <form>
                    <label>Username:</label>
                    <input
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    className="form-control form-control-lg" id="login-username"
                    placeholder="Username" />
                    <label>Password:</label>
                        <input
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        className="form-control form-control-lg" id="login-password"
                        placeholder="Password" />
                    <div id="login" className="login">
                        <button className="button" style={{verticalAlign:"middle"}}>
                            <span>Login</span>
                        </button>
                    </div>
                    <div>
                                    <span>Don't Have an account? <Link to={'./registration'}><p href="#">Register</p></Link>
                                    </span>
                    </div>
                 </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userActions.userLoginFetch(userInfo))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);