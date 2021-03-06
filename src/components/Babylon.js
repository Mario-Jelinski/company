import React from 'react';
import {
    Engine
} from "@babylonjs/core/Engines/engine";
import {
    Scene
} from "@babylonjs/core/scene";
import {
    Vector3
} from "@babylonjs/core/Maths/math";
import {
    FreeCamera
} from "@babylonjs/core/Cameras/freeCamera";
import {
    HemisphericLight
} from "@babylonjs/core/Lights/hemisphericLight";
import {
    Mesh
} from "@babylonjs/core/Meshes/mesh";

import * as BABYLON from '@babylonjs/core/Legacy/legacy';

import {
    GridMaterial
} from "@babylonjs/materials/grid";

// Required side effects to populate the Create methods on the mesh class. Without this, the bundle would be smaller but the createXXX methods from mesh would not be accessible.
import "@babylonjs/core/Meshes/meshBuilder";

class Babylon {
	constructor(height, width) {
		const canvas = document.getElementById("renderCanvas");
		const engine = new Engine(canvas);
		var scene = new Scene(engine);
		scene.clearColor = new BABYLON.Color4(0,0,0,0);
		var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);
		camera.setTarget(Vector3.Zero());
		camera.attachControl(canvas, true);
		var light = new HemisphericLight("light1", new Vector3(0, 1, 0), scene);
		light.intensity = 0.7;
		var material = new GridMaterial("grid", scene);
		var sphere = Mesh.CreateSphere("sphere1", 16, 2, scene);
		sphere.position.y = 2;
		sphere.material = material;
		var ground = Mesh.CreateGround("ground1", 6, 6, 2, scene);
		ground.material = material;
		engine.runRenderLoop(() => {
    			scene.render();
		});
  	}

}


export default Babylon;


