// const url = 'http://localhost:5000/api/'
const url = 'https://backend256-s5q2.onrender.com/api/'

function sendRequest(endPoint, method, data){
    let request = new XMLHttpRequest();
    request.open(method, url+endPoint);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(data ? JSON.stringify(data): data);
    return request
    }