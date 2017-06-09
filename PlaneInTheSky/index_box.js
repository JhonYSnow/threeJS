function create_box(scene, mesh){
    var mesh;
    var material;
    var texture = new THREE.TextureLoader().load('stone.jpg');
    //texture.minFilter = THREE.LinearFilter;
    material = new THREE.MeshLambertMaterial({
        shininess: 2.00000,
        ambient: 0x1E90FF,
        //side: THREE.DoubleSide,
        specular: 0x000000,
        map: texture
    });
    mesh = new THREE.Mesh(new THREE.CubeGeometry(400,200,200), material);
    mesh.castShadow = true;
    mesh.position.x = 200;
    mesh.position.y = -290;
    mesh.position.z = -100;
    mesh.castShadow = true;
    //mesh.rotation.y = Math.PI/6;
    scene.add(mesh);
}