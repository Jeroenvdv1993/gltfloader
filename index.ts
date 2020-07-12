import express from 'express';
import { Foo } from './src/foo';
const app = express();
const port = 3000;
app.get('/', (req, res) =>{
    res.send('<h1>GLTFLoader</h1>')
})

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );

let foo = new Foo();

