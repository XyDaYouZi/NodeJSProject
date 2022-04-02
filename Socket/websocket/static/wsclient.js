const ws = new WebSocket(`ws://localhost:8081/`);
ws.onopen = () => {}
ws.onmessage = (msg) => {
    const content = document.querySelector('#content');
    content.innerHTML += msg.data + '<br/>';
}

ws.onerror = (err) => {
    console.log(err);
}