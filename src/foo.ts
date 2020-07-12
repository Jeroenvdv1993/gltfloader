
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class Foo{

    private gltfLoader: GLTFLoader;
    constructor(){
        this.gltfLoader = new GLTFLoader();
    }
}