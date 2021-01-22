import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import CustomInput from './CustomInput'

class SignUp extends Component{
    render() {
        return (
            <div>
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
        )
    }
}

export default reduxForm({ form: 'signup' })(SignUp)