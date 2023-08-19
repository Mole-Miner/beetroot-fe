const API = 'https://jsonplaceholder.typicode.com/users';

export async function getCopywriters() {
    try {
        const response = await fetch(API);
        return response.json();
    } catch (err) {
        console.log(err);
        return [];
    }
}

export async function getCopywriter(copywriterId) {
    try {
        const response = await fetch(`${API}/${copywriterId}`);
        return response.json();
    } catch (err) {
        console.log(err);
        return {};
    }
}

export async function getCopywriterPosts(copywriterId) {
    try {
        const response = await fetch(`${API}/${copywriterId}/posts`);
        return response.json();
    } catch (err) {
        console.log(err);
        return [];
    }
}

