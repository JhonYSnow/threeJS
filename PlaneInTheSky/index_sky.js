function create_sky(scene){
    var mesh;
    var material;
    var texture = new THREE.TextureLoader().load('sky-big.jpg');
    //texture.minFilter = THREE.LinearFilter;
    material = new THREE.MeshBasicMaterial({
        shininess: 2.00000,
        ambient: 0x1E90FF,
        side: THREE.DoubleSide,
        specular: 0x000000,
        map: texture
    });
    mesh = new THREE.Mesh(new THREE.SphereGeometry(650,100,100), material);
    return mesh;
}