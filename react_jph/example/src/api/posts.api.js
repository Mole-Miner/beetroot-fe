import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts';

export async function getPosts() {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
}
