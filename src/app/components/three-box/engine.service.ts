import { ElementRef, Injectable, NgZone, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Vector3 } from 'three';


@Injectable({ providedIn: 'root' })
export class EngineService implements OnDestroy {
    private canvas!: HTMLCanvasElement | null;
    private renderer!: THREE.WebGLRenderer | null;
    private camera!: THREE.PerspectiveCamera;
    private scene!: THREE.Scene;
    private light!: THREE.AmbientLight;
    private controls!: OrbitControls

    private cube!: THREE.Mesh;

    private frameId: number | null = null;

    width = window.innerWidth / 4;
    height = window.innerHeight / 3;

    private loader: OBJLoader = new OBJLoader();
    // private loader: GLTFLoader = new GLTFLoader();

    public constructor(private ngZone: NgZone) {
    }

    public ngOnDestroy(): void {
        if (this.frameId != null) {
            cancelAnimationFrame(this.frameId);
        }
        if (this.renderer != null) {
            this.renderer.dispose();
            this.renderer = null;
            this.canvas = null;
        }
    }

    public createScene(canvas: ElementRef<HTMLCanvasElement>): void {
        // The first step is to get the reference of the canvas element from our HTML document
        // width = 400, height = 400;
        this.canvas = canvas.nativeElement;

        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            alpha: true,    // transparent background
            antialias: true // smooth edges
        });
        this.renderer.setSize(this.width, this.height);
        // this.renderer.setSize(window.innerWidth, window.innerHeight);

        // create the scene
        this.scene = new THREE.Scene();

        this.camera = new THREE.PerspectiveCamera(
            75, this.width / this.height, 0.1, 1000
        );
        this.controls = new OrbitControls( this.camera, this.renderer.domElement )

        this.camera.position.z = 2;
        this.camera.position.y = 2;
        this.camera.position.x = 8;
        this.scene.add(this.camera);

        this.controls.keys = {
            LEFT: 'ArrowLeft', //left arrow
            UP: 'ArrowUp', // up arrow
            RIGHT: 'ArrowRight', // right arrow
            BOTTOM: 'ArrowDown' // down arrow
        }
        this.controls.enableZoom = true;
        this.controls.enableRotate = true;
        this.controls.update();


        // soft white light
        this.light = new THREE.AmbientLight(0x404040);
        this.light.position.z = 5;
        this.scene.add(this.light);

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);

    }

    public animate(): void {
        // We have to run this outside angular zones,
        // because it could trigger heavy changeDetection cycles.
        this.ngZone.runOutsideAngular(() => {
            if (document.readyState !== 'loading') {
                this.render();
            } else {
                window.addEventListener('DOMContentLoaded', () => {
                    this.render();
                });
            }
            window.addEventListener('resize', () => {
                this.resize();
            });
        });
    }

    public render(): void {
        this.frameId = requestAnimationFrame(() => {
            this.controls.update();
            this.render();
        });

        // this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.renderer!.render(this.scene, this.camera);
    }

    public resize(): void {
        const width = this.width//window.innerWidth;
        const height = this.height//window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer!.setSize(width, height);
    }

    public loadModel(path: string): void {
        this.loader.load(
            path, // resource URL
            (object) => { // load success
                this.scene.clear()
                setTimeout(() => {
                    // object.children[0].scale.copy(new Vector3(1, 1, 1));
                    object.children[0].position.set(0,0,0);
                    let objId = object.children[0].id;
                    console.warn(objId);
                    this.scene.add(object?.children[0]);
                    // this.scene.getObjectById(objId)
                    console.warn(this.scene.getObjectById(objId));
                    this.camera.position.set(-5,1,1)
                    this.camera.lookAt(new Vector3(this.scene.getObjectById(objId)?.position.x, this.scene.getObjectById(objId)?.position.y, this.scene.getObjectById(objId)?.position.z))

                    // glTF conf:
                    // object.scene.children[0].scale.copy(new Vector3(8, 8, 8));
                    // this.scene.add(object?.scene.children[0]);
                })
            },
            (xhr) => { // progresses
                // EMIT and show progress float
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            (error) => { // error
                console.log('An error happened', error);
            }
        );
    }
}