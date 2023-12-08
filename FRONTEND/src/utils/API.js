import axios from 'axios'

const baseURL = 'http://localhost:3001/api/v1/user/'

export function getToken(email, password) {
  try {
    axios
      .post(baseURL + 'login', {
        email,
        password,
      })
      .then((response) => {
        localStorage.setItem('token', response.data.body.token)
        console.log('test')
        return response.data.body.token
      })
  } catch (err) {
    console.log(err)
  }
}


export function getUser(token) {
  try {
    axios
      .post(baseURL + 'profile', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response)
        return response
      })
  } catch (erreur) {
    console.log(erreur)
  }
}

export function editUser(firstName, lastName, token) {
  try {
    axios
      .put(
        baseURL + 'profile',
        {
          headers: { Authorization: `Bearer ${token}` },
        },
        {
          firstName,
          lastName,
        }
      )
      .then((response) => {
        console.log(response)
        return response
      })
  } catch (erreur) {
    console.log(erreur)
  }
}