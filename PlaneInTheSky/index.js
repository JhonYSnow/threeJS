function create_geometry_00(scene, obj){
    var material;
    var geometry;
    //mesh.position.x =0;
    //mesh.position.y =100;
    //mesh.position.z =-100;
    var material = new THREE.MeshLambertMaterial( { color: 0xffffff, wireframe: true } );
    var mesh1 = new THREE.Mesh(new THREE.IcosahedronGeometry(100,4), material);
    mesh1.name = "m1";
    obj.lod.addLevel(mesh1, 150); 
    var mesh2 = new THREE.Mesh(new THREE.IcosahedronGeometry(100,0), material);
    mesh2.name = "m2";
    obj.lod.addLevel(mesh2, 100); 
    //obj.mesh.rotation.y =Math.PI/2;
    obj.lod.updateMatrix();
	obj.lod.matrixAutoUpdate = false;
    scene.add(obj.lod);
    obj.lod.update(camera);
}