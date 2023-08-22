console.log(document.cookie);
// document.cookie = "mykey=mydata; max-age=5";

const data = document.cookie.split(';');
console.log(data);
