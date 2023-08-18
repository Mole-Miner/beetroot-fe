import '@scss/styles.scss'

const API = 'https://jsonplaceholder.typicode.com/users';

/*
const xhr = new XMLHttpRequest();
xhr.responseType = 'json';
xhr.onload = () => {
    console.log(xhr.status, xhr.response);
}
xhr.onerror = () => {
    console.log('Some error');
}
xhr.onprogress = (e) => {
    console.log(e.loaded, e.total);
}
xhr.open('GET', API);
xhr.send();
*/

/*$.ajax({
    method: 'GET',
    url: API,
    contentType: 'application/json'
})
    .done((response) => {
        console.log(response);
    })
    .fail((err) => {
        console.log(err);
    })
    .always(() => {
        console.log('Finalize');
    });*/

/*fetch(API)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => {
        console.log('Finalize');
    });*/


/*async function getUsers() {
    const response = await fetch(API);
    const users = await response.json();
    console.log(users);
}

getUsers();*/
