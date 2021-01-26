import axios from 'axios'
export const signUp = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post('http://localhost:5000/api/register', data)
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }
}