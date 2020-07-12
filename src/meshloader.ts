// Packages
import * as THREE from 'three';
import { GLTFLoader, GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

export class MeshLoader{
    // Properties
    private mesh: THREE.Mesh;
    private gltfLoader: GLTFLoader;
    private gltfName: string;

    // Constructor
    constructor(gltfFile: string, gltfName: string){
        this.gltfLoader = new GLTFLoader();
        this.mesh = new THREE.Mesh();
        this.gltfName = gltfName;
        this.gltfLoader.load(gltfFile, this.OnLoad.bind(this), this.OnProgress.bind(this), this.OnError.bind(this));
    }

    // Functions
    private OnLoad(gltf: GLTF){
        if(gltf.scene){
            if(gltf.scene.getObjectByName(this.gltfName)){
                console.log("GLTF object loaded.");
                this.mesh = <THREE.Mesh>gltf.scene.getObjectByName(this.gltfName);

                // Check if file is loaded correctly
                let bufferGeometry: THREE.BufferGeometry = <THREE.BufferGeometry>this.mesh.geometry;
                let geometry: THREE.Geometry = new THREE.Geometry().fromBufferGeometry(bufferGeometry);
                console.log("----------");
                console.log(" VERTICES ");
                console.log("----------");
                for(let index: number = 0; index < geometry.vertices.length; index++){
                    console.log(`Vertex(${index}): ${geometry.vertices[index].x}; ${geometry.vertices[index].y}; ${geometry.vertices[index].z};`);
                }
                console.log("-------");
                console.log(" FACES ");
                console.log("-------");
                for(let index: number = 0; index < geometry.faces.length; index++){
                    console.log(`Face(${index}): ${geometry.faces[index].a} ${geometry.faces[index].b} ${geometry.faces[index].c};`);
                }
            }
            else{
                console.error(`Foo - GLB object ${this.gltfName} not found in GLB file.`);
            }
        }
        else{
            console.error(`Foo - Scene not found in GLB file.`);
        }
    }
    private OnProgress(event: ProgressEvent<EventTarget>){
        console.log((event.loaded / event.total * 100) + '% loaded');
    }
    private OnError(event: ErrorEvent){
        console.log('An error happened');
    }
}