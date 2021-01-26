import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import * as actions from '../actions'

import CustomInput from './CustomInput'

class SignUp extends Component{

    constructor(props) {
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }
    async onSubmit(formData) {
        console.log('hello')
        console.log(formData)
        await this.props.signUp(formData)
    }
    render() {
        const { handleSubmit } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <form onSubmit={handleSubmit(this.onSubmit)}>
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
                            <button type="submit" className="btn btn-primary my-2">Sign Up</button>
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

export default compose(connect(null, actions), reduxForm({ form: 'signup' }))(SignUp)