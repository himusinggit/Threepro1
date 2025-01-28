const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const canvas = document.querySelector('.canva');
const renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true});
renderer.setSize( window.innerWidth, window.innerHeight );
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: "red"} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
let clock=new THREE.Clock();
function animate() {
    requestAnimationFrame( animate );
    cube.rotation.x=clock.getElapsedTime();
    cube.rotation.y=clock.getElapsedTime();
	renderer.render( scene, camera );
}
animate();