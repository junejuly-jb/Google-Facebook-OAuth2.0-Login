import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import CustomInput from './CustomInput'

class SignUp extends Component{
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form>
                            <fieldset>
                                <Field 
                                    name="email"
                                    type="text"
                                    id="email"
                                    label="enter email"
                                    placeholder="example@gmail.com"
                                    component={CustomInput} />
                            </fieldset>
                            <fieldset>
                                <Field 
                                    name="password"
                                    type="password"
                                    id="password"
                                    label="enter password"
                                    placeholder="********"
                                    component={CustomInput}/>
                            </fieldset>
                            <button type="submit" className="btn btn-primary">Sign Up</button>
                        </form>
                    </div>
                    <div className="col">
                        <div className="text-center">
                            <div className="alert alert-primary">
                                or signup with 3rd party services
                            </div>
                            <button className="btn">Facebook</button>
                            <button className="btn">Google</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({ form: 'signup' })(SignUp)