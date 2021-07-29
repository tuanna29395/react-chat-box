import React from "react";
import AuthService from '../services/auth.service';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.handleRegister = this.handleRegister.bind(this)
        this.onChangeUsername = this.onChangeUsername.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePassword = this.onChangePassword.bind(this)
        this.state = {
            username: "",
            email: "",
            password: "",
            success: false,
            message: ""
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleRegister(e) {
        e.preventDefault()
        this.setState({
            message: "",
            successful: false
        });
        AuthService.register(
            this.state.username,
            this.state.email,
            this.state.password
        ).then(res => {
                this.setState(
                    {
                        message: res.data.message,
                        success: true,
                        username: "",
                        email: "",
                        password: ""
                    }
                );
            }, error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    successful: false,
                    message: resMessage,
                    username: "",
                    email: "",
                    password: ""
                });
            }
        );
    }

    render() {
        return (
            <div className="wrapper">
                <div className="d-flex align-items-center justify-content-center my-5 my-lg-0">
                    <div className="container">
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
                            <div className="col mx-auto">
                                <div className="my-4 text-center">
                                    <img src={process.env.PUBLIC_URL + '/assets/images/logo-img.png'} width={180}
                                         alt=""/>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="border p-4 rounded">
                                            <div className="text-center">
                                                <h3 className>Sign Up</h3>
                                                <p>Already have an account? <a href="authentication-signin.html">Sign in
                                                    here</a>
                                                </p>
                                            </div>
                                            <div className="d-grid">
                                                <a className="btn my-4 shadow-sm btn-light" href="javascript:;"> <span
                                                    className="d-flex justify-content-center align-items-center">
                            <img className="me-2" src={process.env.PUBLIC_URL + '/assets/images/icons/search.svg'}
                                 width={16} alt="Image Description"/>
                            <span>Sign Up with Google</span>
                          </span>
                                                </a> <a href="javascript:;" className="btn btn-light"><i
                                                className="bx bxl-facebook"/>Sign Up with Facebook</a>
                                            </div>
                                            <div className="login-separater text-center mb-4"><span>OR SIGN UP WITH EMAIL</span>
                                                <hr/>
                                            </div>
                                            <div className="form-body">
                                                <form className="row g-3">
                                                    <div className="col-12">
                                                        <label htmlFor="inputFirstName" className="form-label">User
                                                            Name</label>
                                                        <input onChange={this.onChangeUsername}
                                                               value={this.state.username}
                                                               type="text"
                                                               className="form-control" id="inputFirstName"
                                                               placeholder="Jhon"/>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="inputEmailAddress" className="form-label">Email
                                                            Address</label>
                                                        <input onChange={this.onChangeEmail}
                                                               value={this.state.email}
                                                               type="email"
                                                               className="form-control"
                                                               id="inputEmailAddress" placeholder="example@user.com"/>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="inputChoosePassword"
                                                               className="form-label">Password</label>
                                                        <div className="input-group" id="show_hide_password">
                                                            <input onChange={this.onChangePassword} type="password"
                                                                   value={this.state.password}
                                                                   className="form-control border-end-0"
                                                                   id="inputChoosePassword"
                                                                   placeholder="Enter Password"/> <a href="javascript:;"
                                                                                                     className="input-group-text bg-transparent"><i
                                                            className="bx bx-hide"/></a>
                                                        </div>
                                                    </div>
                                                    {/*<div className="col-12">*/}
                                                    {/*    <label htmlFor="inputSelectCountry"*/}
                                                    {/*           className="form-label">Country</label>*/}
                                                    {/*    <select className="form-select" id="inputSelectCountry"*/}
                                                    {/*            aria-label="Default select example">*/}
                                                    {/*        <option selected>India</option>*/}
                                                    {/*        <option value={1}>United Kingdom</option>*/}
                                                    {/*        <option value={2}>America</option>*/}
                                                    {/*        <option value={3}>Dubai</option>*/}
                                                    {/*    </select>*/}
                                                    {/*</div>*/}
                                                    {/*<div className="col-12">*/}
                                                    {/*    <div className="form-check form-switch">*/}
                                                    {/*        <input className="form-check-input" type="checkbox"*/}
                                                    {/*               id="flexSwitchCheckChecked"/>*/}
                                                    {/*        <label className="form-check-label"*/}
                                                    {/*               htmlFor="flexSwitchCheckChecked">I read and agree to*/}
                                                    {/*            Terms &amp; Conditions</label>*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    {this.state.message && this.state.success === true && (
                                                        <div
                                                            className="alert border-0 alert-dismissible fade show py-2">
                                                            <div className="d-flex align-items-center">
                                                                <div className="font-35 text-white"><i
                                                                    className=' bx bxs-check-circle'/>
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h6 className="mb-0 text-white">Success Alerts</h6>
                                                                    <div className="text-white">{this.state.message}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn-close"
                                                                    data-bs-dismiss="alert" aria-label="Close"/>
                                                        </div>
                                                    )
                                                    }

                                                    {this.state.success === false && this.state.message && (
                                                        <div
                                                            className="alert border-0 alert-dismissible fade show py-2">
                                                            <div className="d-flex align-items-center">
                                                                <div className="font-35 text-white"><i
                                                                    className=' bx bxs-check-circle'/>
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h6 className="mb-0 text-white">Error Alerts</h6>
                                                                    <div className="text-white">{this.state.message}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button type="button" className="btn-close"
                                                                    data-bs-dismiss="alert" aria-label="Close"/>
                                                        </div>
                                                    )
                                                    }

                                                    <div className="col-12">
                                                        <div className="d-grid">
                                                            <button onClick={this.handleRegister} type="submit"
                                                                    className="btn btn-light"><i
                                                                className="bx bx-user"/>Sign up
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*end row*/}
                    </div>
                </div>
            </div>
        );
    }
}