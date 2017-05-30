function create_lod(scene, lod){
    var material;
    var geometry;
    var raduis = 40;
    //var lod = new THREE.LOD();
    
    material = new THREE.MeshPhongMaterial({
        color: 0x969696,shininess: 2.00000,ambient: 0x969696,side: THREE.FrontSide,specular: 0x000000, wireframe: true
    });
    var mesh6 = new THREE.Mesh(new THREE.IcosahedronGeometry(raduis,6), material);
    mesh6.name = "m6";
    lod.addLevel(mesh6, 0); 
    var mesh5 = new THREE.Mesh(new THREE.IcosahedronGeometry(raduis,5), material);
    mesh5.name = "m5";
    lod.addLevel(mesh5, 100); 
    var mesh4 = new THREE.Mesh(new THREE.IcosahedronGeometry(raduis,4), material);
    mesh4.name = "m4";
    lod.addLevel(mesh4, 200); 
    var mesh3 = new THREE.Mesh(new THREE.IcosahedronGeometry(raduis,3), material);
    mesh3.name = "m3";
    lod.addLevel(mesh3, 300); 
    var mesh2 = new THREE.Mesh(new THREE.IcosahedronGeometry(raduis,2), material);
    mesh2.name = "m2";
    lod.addLevel(mesh2, 400); 
    var mesh1 = new THREE.Mesh(new THREE.IcosahedronGeometry(raduis,1), material);
    mesh1.name = "m1";
    lod.addLevel(mesh1, 500); 
    var mesh0 = new THREE.Mesh(new THREE.IcosahedronGeometry(raduis,0), material);
    mesh0.name = "m0";
    lod.addLevel(mesh0, 600); 
    //obj.mesh.rotation.y =Math.PI/2;
    lod.updateMatrix();
	lod.matrixAutoUpdate = true;
    lod.visible = false;
    //lod.update(camera)

    scene.add(lod);
    lod.update(camera);

    //return lod;
}