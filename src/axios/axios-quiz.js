import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-d4871-default-rtdb.firebaseio.com/'
})