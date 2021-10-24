import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.log('Someting went wrong: ', error);
  }
}

export default fetchData;