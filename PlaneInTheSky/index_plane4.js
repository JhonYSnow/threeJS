function create_plane_4(scene){var mesh;var material;var geometry;var vertices = new Float32Array([-19.08633, -2.19520, 2.78386,-19.08633, 2.80480, 2.78386,-14.08633, 2.80480, 2.78386,-14.08633, 2.80480, 2.78386,-14.08633, -2.19520, 2.78386,-19.08633, -2.19520, 2.78386,-19.08633, -2.19520, 7.78386,-14.08633, -2.19520, 7.78386,-14.08633, 2.80480, 7.78386,-14.08633, 2.80480, 7.78386,-19.08633, 2.80480, 7.78386,-19.08633, -2.19520, 7.78386,-19.08633, -2.19520, 2.78386,-14.08633, -2.19520, 2.78386,-14.08633, -2.19520, 7.78386,-14.08633, -2.19520, 7.78386,-19.08633, -2.19520, 7.78386,-19.08633, -2.19520, 2.78386,-14.08633, -2.19520, 2.78386,-14.08633, 2.80480, 2.78386,-14.08633, 2.80480, 7.78386,-14.08633, 2.80480, 7.78386,-14.08633, -2.19520, 7.78386,-14.08633, -2.19520, 2.78386,-14.08633, 2.80480, 2.78386,-19.08633, 2.80480, 2.78386,-19.08633, 2.80480, 7.78386,-19.08633, 2.80480, 7.78386,-14.08633, 2.80480, 7.78386,-14.08633, 2.80480, 2.78386,-19.08633, 2.80480, 2.78386,-19.08633, -2.19520, 2.78386,-19.08633, -2.19520, 7.78386,-19.08633, -2.19520, 7.78386,-19.08633, 2.80480, 7.78386,-19.08633, 2.80480, 2.78386]);var normals = new Float32Array([0.00000, 0.00000, -1.00000,0.00000, 0.00000, -1.00000,0.00000, 0.00000, -1.00000,0.00000, 0.00000, -1.00000,0.00000, 0.00000, -1.00000,0.00000, 0.00000, -1.00000,0.00000, 0.00000, 1.00000,0.00000, 0.00000, 1.00000,0.00000, 0.00000, 1.00000,0.00000, 0.00000, 1.00000,0.00000, 0.00000, 1.00000,0.00000, 0.00000, 1.00000,0.00000, -1.00000, 0.00000,0.00000, -1.00000, 0.00000,0.00000, -1.00000, 0.00000,0.00000, -1.00000, 0.00000,0.00000, -1.00000, 0.00000,0.00000, -1.00000, 0.00000,1.00000, 0.00000, 0.00000,1.00000, 0.00000, 0.00000,1.00000, 0.00000, 0.00000,1.00000, 0.00000, 0.00000,1.00000, 0.00000, 0.00000,1.00000, 0.00000, 0.00000,0.00000, 1.00000, 0.00000,0.00000, 1.00000, 0.00000,0.00000, 1.00000, 0.00000,0.00000, 1.00000, 0.00000,0.00000, 1.00000, 0.00000,0.00000, 1.00000, 0.00000,-1.00000, 0.00000, 0.00000,-1.00000, 0.00000, 0.00000,-1.00000, 0.00000, 0.00000,-1.00000, 0.00000, 0.00000,-1.00000, 0.00000, 0.00000,-1.00000, 0.00000, 0.00000]);geometry = new THREE.BufferGeometry();geometry.addAttribute('position', new THREE.BufferAttribute(vertices, 3));geometry.addAttribute('normal', new THREE.BufferAttribute(normals, 3));material = new THREE.MeshPhongMaterial({color: 0xB2B2B2,shininess: 32.00000,ambient: 0xB2B2B2,side: THREE.FrontSide,specular: 0xB5B5B5});mesh = new THREE.Mesh(geometry, material);
return mesh;
}