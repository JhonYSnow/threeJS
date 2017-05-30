var scene,
    camera, fieldOfView, aspectRatio, nearPlane, farPlane,
    renderer, container;
                
var stats = new Stats();  
stats.domElement.style.position = 'absolute';  
stats.domElement.style.top = '0px';

function createScene() {

    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;

    scene = new THREE.Scene();
    aspectRatio = WIDTH / HEIGHT;
    fieldOfView = 60;
    nearPlane = 1;
    farPlane = 10000;
    camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
      );

    //雾
    scene.fog = new THREE.Fog(0xffffff, 100, 700);

    camera.position.x = 0;
    camera.position.z = 200;
    camera.position.y = 100;

    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    container = document.getElementById('world');
    container.appendChild(renderer.domElement);

    window.addEventListener('resize', handleWindowResize, false);
}

// HANDLE SCREEN EVENTS

function handleWindowResize() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
}

// LIGHTS

var ambientLight, hemisphereLight, shadowLight;

function createLights() {
    hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, .9);
    
    shadowLight = new THREE.DirectionalLight(0xffffff, .9);
    shadowLight.position.set(150, 350, 350);
    shadowLight.castShadow = true;

    shadowLight.shadow.camera.left = -500;
    shadowLight.shadow.camera.right = 500;
    shadowLight.shadow.camera.top = 500;
    shadowLight.shadow.camera.bottom = -500;
    shadowLight.shadow.camera.near = 1;
    shadowLight.shadow.camera.far = 1000;
    shadowLight.shadowBias = 1000;
    shadowLight.shadowMapWidth = 4096;
    shadowLight.shadowMapHeight = 4096;
    shadowLight.shadowCameraVisible = true;
    shadowLight.shadowDarkness = 1;

    scene.add(hemisphereLight);
    scene.add(shadowLight);
}

Obj = function(){
    this.lod = new THREE.LOD();
    this.box = new THREE.Object3D();
}

Plane = function(){
    this.mesh0 = new THREE.Object3D();
    this.mesh1 = new THREE.Object3D();
    this.mesh2 = new THREE.Object3D();
    this.mesh3 = new THREE.Object3D();
    this.mesh4 = new THREE.Object3D();
    this.mesh5 = new THREE.Object3D();
    this.mesh6 = new THREE.Object3D();

    this.positionx = 0;
    this.positiony = 0;
    this.positionz = 0;
    this.rotationx = 0;
    this.rotationy = 0;
    this.rotationz = 0;
} 

Hills = function(){
    this.mesh0 = new THREE.Object3D();
    this.mesh1 = new THREE.Object3D();
    this.mesh2 = new THREE.Object3D();
    this.mesh3 = new THREE.Object3D();
}

Sky = function(){
    this.mesh = new THREE.Object3D();
}

function createObj(obj){
    obj = new Obj();
}

function createPlane(plane){
    plane = new Plane();
    plane.mesh0 = create_plane_0(scene);
    plane.mesh1 = create_plane_1(scene);
    plane.mesh2 = create_plane_2(scene);
    plane.mesh3 = create_plane_3(scene);
    plane.mesh4 = create_plane_4(scene);
    plane.mesh5 = create_plane_5(scene);
    plane.mesh6 = create_plane_6(scene);

    planePosition(plane.mesh0);
    planePosition(plane.mesh1);
    planePosition(plane.mesh2);
    planePosition(plane.mesh3);
    planePosition(plane.mesh4);
    planePosition(plane.mesh5);
    planePosition(plane.mesh6);
}

function planePosition(mesh){
    mesh.position.y = 100;
    mesh.position.z = -200;
    mesh.rotation.x = -Math.PI/2+Math.PI/20;

    plane.positionx = mesh.position.x;
    plane.positiony = mesh.position.y;
    plane.positionz = mesh.position.z;
    plane.rotationx = mesh.rotation.x;
    plane.rotationy = mesh.rotation.y;
    plane.rotationz = mesh.rotation.z;

    scene.add(mesh);
    //plane.mesh0.update(camera);
}

function hillsPosition(mesh){
    mesh.position.x =0;
    mesh.position.y =50;
    mesh.position.z =0;
    mesh.rotation.z = Math.PI/2.5;
    mesh.rotation.x = -Math.PI/2;
}

function createHills(hills){
    hills = new Hills();
    hills.mesh0 = create_hills_0(scene);
    hills.mesh1 = create_hills_1(scene);
    hills.mesh2 = create_hills_2(scene);
    hills.mesh3 = create_hills_3(scene);

    hillsPosition(hills.mesh0);
    hillsPosition(hills.mesh1);
    hillsPosition(hills.mesh2);
    hillsPosition(hills.mesh3);

    scene.add(hills.mesh0);
    scene.add(hills.mesh1);
    scene.add(hills.mesh2);
    scene.add(hills.mesh3);
}

function createSky(sky){
    sky = new Sky();
    sky.mesh = create_sky(scene);
    sky.mesh.position.x = 0;
    sky.mesh.position.y = 0;
    sky.mesh.position.z = 0;

    scene.add(sky.mesh);
}

function loop(){
    updatePlane();
    updateLod();
    stats.update();
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
}

function planePositionChange(mesh){
    mesh.position.x = plane.positionx;
    mesh.position.y = plane.positiony;
    mesh.position.z = plane.positionz;
    mesh.rotation.x = plane.rotationx;
    mesh.rotation.y = plane.rotationy;
    mesh.rotation.z = plane.rotationz;
}

function updatePlane(){
    for(var i=2; i<=8; i++){
        planePositionChange(scene.children[i]);
    }
}

function updateLod(){
    scene.children[14].position.x = plane.positionx;
    scene.children[14].position.y = plane.positiony;
    scene.children[14].position.z = plane.positionz;
    scene.children[14].rotation.x = plane.rotationx;
    scene.children[14].rotation.y = plane.rotationy;
    scene.children[14].rotation.z = plane.rotationz;

    scene.children[14].update(camera);
}

var obj = new Obj();
var plane = new Plane();
var hills = new Hills();
var sky = new Sky();

function init(event){
    createScene();
    createLights();
    createPlane(plane);
    createHills(hills);
    createSky(sky);
    create_lod(scene, obj.lod);
    create_box(scene, obj.box);
    //create_geometry_0(scene, obj);
    loop();
}

function keyDown(e) {
    var keycode = e.which;
    var realkey = String.fromCharCode(e.which);
    //alert(keycode + realkey);
    if(keycode == 38){
        //up
        plane.rotationy-=Math.PI/6;
    }else if(keycode == 40){
        //down
        plane.rotationy+=Math.PI/6;  
    }else if(keycode == 39){
        //right
        plane.rotationz+=Math.PI/6;
    }else if(keycode == 37){
        //left
        plane.rotationz-=Math.PI/6;
    }else if(keycode == 87){
        //w
        plane.positionz-=1;    
    }else if(keycode == 83){
        //s
        plane.positionz+=1;  
    }else if(keycode == 65){
        //a
        plane.positionx-=1;  
    }else if(keycode == 68){
        //d
        plane.positionx+=1;  
    }else if(keycode == 81){
        //q
        plane.positiony+=1; 
    }else if(keycode == 69){
        //e
        plane.positiony-=1; 
    }else if(keycode == 82){
        //r
        if(scene.children[14].visible == false){
            scene.children[14].visible = true;
        }else{
            scene.children[14].visible = false;
        }
    }else if(keycode == 49){
        //1
        camera.position.x+=1;
    }else if(keycode == 50){
        //2
        camera.position.x-=1;
    }else if(keycode == 51){    
        //3
        camera.position.z+=1;
    }else if(keycode == 52){
        //4
        camera.position.z-=1;
    }else if(keycode == 53){
        //5
        camera.position.y+=1;
    }else if(keycode == 54){
        //6
        camera.position.y-=1;
    }else if(keycode == 55){
        //7
        camera.rotation.z+=Math.PI/6;
    }else if(keycode == 56){
        //8
        camera.rotation.z-=Math.PI/6;
    }else if(keycode == 57){
        //9
        camera.rotation.y+=Math.PI/6;
    }else if(keycode == 48){
        //0
        camera.rotation.y-=Math.PI/6;
    }else if(keycode == 76){
        //l
        shadowLight.shadowCameraVisible = true;
    }else if(keycode == 70){
        //f
        if(scene.fog != null){
            scene.fog = null;
        }else{
            scene.fog = new THREE.Fog(0xffffff, 100, 700);
        }
    }else if(keycode == 71){
        if(stats.domElement.style.display == 'none'){
            stats.domElement.style.display = 'block';
        }else
            stats.domElement.style.display = 'none';
    }

}
document.onkeydown = keyDown;

window.onload = function(){
    document.body.appendChild( stats.domElement );
}

window.addEventListener('load', init, false);
