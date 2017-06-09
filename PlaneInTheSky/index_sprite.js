function create_sprite(){

    // let canvas = document.createElement("canvas");
    // let ctx = canvas.getContext("2d");
    // ctx.fillStyle = "#800000";
    // ctx.font = "Bold 50px Arial";
    // ctx.lineWidth = 4;
    // ctx.fillText("BillBoard",4,104);
    // let texture = new THREE.Texture(canvas);
    var texture = new THREE.TextureLoader().load('flag.png');
    texture.needsUpdate = true;

    let material = new THREE.SpriteMaterial({map:texture});
    let textObj = new THREE.Sprite(material);
    textObj.scale.set(0.5 * 100, 0.25 * 100, 0.75 * 100);
    textObj.position.set(100,-160,0);
    textObj.visible = false;

    scene.add( textObj );
}