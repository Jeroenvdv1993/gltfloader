import express from 'express';
import { MeshLoader } from './src/meshloader';
global.XMLHttpRequest = require("xhr2").XMLHttpRequest;

const app = express();
const port = 3000;
app.get('/', (req, res) =>{
    res.send('<h1>GLTFLoader</h1>')
})

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

app.get('/cube.glb', (req, res) =>{
    res.sendFile(__dirname + '/cube.glb');
})

let meshloader = new MeshLoader(`http://localhost:${port}/cube.glb`, "cube");

