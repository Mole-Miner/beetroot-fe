import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/users';

export async function getUsers() {
  try {
    const response = await axios.get(url);
    return response.data ?? [];
  } catch (e) {
    console.log(e);
    return [];
  }
}
