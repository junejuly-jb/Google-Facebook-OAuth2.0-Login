import axios from 'axios'
import { AUTH_SIGN_UP } from './types'
import { AUTH_ERROR } from './types'

export const signUp = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/api/register', data)
            console.log(response)

            dispatch({
                type: AUTH_SIGN_UP,
                payload: response.data.token
            })

            localStorage.setItem('token', response.data.token)

        } catch (error) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'email is in use'
            })
            console.log(error)
        }
    }
}