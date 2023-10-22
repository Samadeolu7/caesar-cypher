import './css/style.css';
import { encode,decode } from './js/cipher';

console.log(document.getElementById('welcome').innerHTML);

const body = document.getElementById('body');
// add 2 inputs to body one for text one for offset
body.innerHTML += '<input type="text" id="text" placeholder="text">';
body.innerHTML += '<input type="number" id="offset" placeholder="offset">';
// add 2 buttons to body one for encode one for decode
body.innerHTML += '<button id="encode">Encode</button>';
body.innerHTML += '<button id="decode">Decode</button>';
// add a div to body to display the result
body.innerHTML += '<div id="result"></div>';


// add event listeners to buttons
document.getElementById('encode').addEventListener('click', () => {
    // get in text and offset from inputs
    const text = document.getElementById('text').value;
    const offset = document.getElementById('offset').value;
    // encode text with offset
    const encodedText = encode(text, offset);
    // display encoded text
    document.getElementById('result').innerHTML = encodedText;
});

document.getElementById('decode').addEventListener('click', () => {
    // get in text and offset from inputs
    const text = document.getElementById('text').value;
    const offset = document.getElementById('offset').value;
    // decode text with offset;
    const decodedText = decode(text, offset);
    // display decoded text
    document.getElementById('result').innerHTML = decodedText;
});
