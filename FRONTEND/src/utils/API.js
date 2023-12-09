import axios from 'axios'

const baseURL = 'http://localhost:3001/api/v1/user/'

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