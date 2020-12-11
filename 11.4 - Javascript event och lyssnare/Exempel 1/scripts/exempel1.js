document.body.addEventListener('click', (event) => {
    console.log('Body-listener, ' + event.target.id + ' was clicked');
    event.target.style.backgroundColor = 'blue';
});

document.getElementById('div-b1-b2').addEventListener('click', (event) => {
    console.log('Div-listener, ' + event.target.id + ' was clicked');
    event.target.style.backgroundColor = 'green';
});

document
    .getElementById('button-2')
    .addEventListener('click', (event) => {
        console.log('Button-2 listener, ' + event.target.id + ' was clicked');
        event.target.style.backgroundColor = 'yellow';
    });
