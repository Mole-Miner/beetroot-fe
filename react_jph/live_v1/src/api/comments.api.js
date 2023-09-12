import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/comments';

export async function getComments() {
  try {
    const response = await axios.get(url);
    return response.data ?? [];
  } catch (e) {
    console.log(e);
    return [];
  }
}

export async function getCommentById(commentId) {
  try {
    const response = await axios.get(`${url}/${commentId}`);
    return response.data;
  } catch (e) {
    console.log(e);
    return null;
  }
}
