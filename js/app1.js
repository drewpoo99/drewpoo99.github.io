var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 20, window.innerWidth/window.innerHeight, 0.1, 1000 );
camera.position.set(350, 117.5, 0);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.rotateSpeed = 1.0;
controls.zoomSpeed = 1.2;
controls.panSpeed = 0.8;
scene.rotation.y = 9.5;

let sunRad = 10;
let earthRad = sunRad / 50.45;
let merRad = earthRad * 0.38;
let venusRad = earthRad * 0.95;
let marsRad = earthRad * 0.53;
let jupiterRad = earthRad * 11.2;
let saturnRad = earthRad * 9.45;
let uranusRad = earthRad * 4.0;
let neptuneRad = earthRad * 3.88;

let mercD = 5.7;
let venusD = 10.8;
let earthD = 14.9;
let marsD = 22.8;
let jupiterD = 78.0;
let saturnD = 143.7;
let uranusD = 287.1;
let neptuneD = 453.0;

let planets = [];

var sunGeometry = new THREE.SphereGeometry( 10, 32, 32 );
var sunMaterial = new THREE.MeshBasicMaterial( { color: 0xFFB200 } );
var sun = new THREE.Mesh( sunGeometry, sunMaterial );

var mercuryGeo = new THREE.SphereGeometry(merRad, 32, 32);
var mercuryMat = new THREE.MeshBasicMaterial({color: 0xffffff});
var mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
mercury.position.x = sun.position.x + 6 + 5.1;
mercury.orbitRadius = mercury.position.x + merRad;
mercury.orbitSpeed = 4.787 / 500;
mercury.orbit = Math.random() * Math.PI * 2;

planets.push(mercury);

var venusGeo = new THREE.SphereGeometry(venusRad, 32, 32);
var venusMat = new THREE.MeshBasicMaterial({color: 0xFFF680});
var venus = new THREE.Mesh(venusGeo, venusMat);
venus.position.x = sun.position.x + 12 + 5.1;
venus.orbitRadius = venus.position.x + venusRad;
venus.orbitSpeed = 3.502 / 500;
venus.orbit = Math.random() * Math.PI * 2;

planets.push(venus);

var earthGeometry = new THREE.SphereGeometry(earthRad, 32, 32  );
var earthMaterial = new THREE.MeshBasicMaterial( { color: 0x003580 } );
var earth = new THREE.Mesh( earthGeometry, earthMaterial );
earth.position.x = sun.position.x + 18 + 5.1;
earth.orbitRadius = earth.position.x + earthRad;
earth.orbitSpeed = 2.998  / 500;
earth.orbit = Math.random() * Math.PI * 2;

planets.push(earth);

var MarsGeometry = new THREE.SphereGeometry( marsRad, 32, 32  );
var MarsMaterial = new THREE.MeshBasicMaterial( { color: 0xFF4F00 } );
var Mars = new THREE.Mesh( MarsGeometry, MarsMaterial );
Mars.position.x = sun.position.x + 24 + 5.1;
Mars.orbitRadius = Mars.position.x + marsRad;
Mars.orbitSpeed = 2.4077 / 500;
Mars.orbit = Math.random() * Math.PI * 2;

planets.push(Mars);

var jupiterGeometry = new THREE.SphereGeometry( jupiterRad, 32, 32  );
var jupiterMaterial = new THREE.MeshBasicMaterial( { color: 0xFF4F00 } );
var jupiter = new THREE.Mesh( jupiterGeometry, jupiterMaterial );
jupiter.position.x = sun.position.x + 30 + 5.1;
jupiter.orbitRadius = jupiter.position.x + jupiterRad;
jupiter.orbitSpeed = (1.307) / 500;
jupiter.orbit = Math.random() * Math.PI * 2;

planets.push(jupiter);

var saturnGeometry = new THREE.SphereGeometry( saturnRad, 32, 32  );
var saturnMaterial = new THREE.MeshBasicMaterial( { color: 0xFFA455 } );
var saturn = new THREE.Mesh( saturnGeometry, saturnMaterial );
saturn.position.x = sun.position.x + 36 + 5.1;
saturn.orbitRadius = saturn.position.x + saturnRad;
saturn.orbitSpeed = 0.969 / 500;
saturn.orbit = Math.random() * Math.PI * 2;

var ringGeometry = new THREE.RingGeometry( saturnRad + 0.5, saturnRad + 0.75, 32 );
var ringMaterial = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide } );
var ring = new THREE.Mesh( ringGeometry, ringMaterial );
ring.position.x = saturn.position.x;
ring.rotation.x = -0.5;
ring.orbitRadius = saturn.orbitRadius;
ring.orbitSpeed = saturn.orbitSpeed;
ring.orbit = saturn.orbit;
planets.push(saturn);
planets.push(ring);

var uranusGeometry = new THREE.SphereGeometry( uranusRad, 32, 32  );
var uranusMaterial = new THREE.MeshBasicMaterial( { color: 0xBFFBFF } );
var uranus = new THREE.Mesh( uranusGeometry, uranusMaterial );
uranus.position.x = sun.position.x + 42 + 5.1;
uranus.orbitRadius = uranus.position.x + uranusRad;
uranus.orbitSpeed = 0.681 / 500;
uranus.orbit = Math.random() * Math.PI * 2;

planets.push(uranus);

var neptuneGeometry = new THREE.SphereGeometry( neptuneRad, 32, 32  );
var neptuneMaterial = new THREE.MeshBasicMaterial( { color: 0x409FD5 } );
var neptune = new THREE.Mesh( neptuneGeometry, neptuneMaterial );
neptune.position.x = sun.position.x + 48 + 5.1;
neptune.orbitRadius = neptune.position.x + neptuneRad;
neptune.orbitSpeed = 0.543 / 500;
neptune.orbit = Math.random() * Math.PI * 2;

planets.push(neptune);

for(let p in planets){
    var orbit = new THREE.Line(
    new THREE.CircleGeometry(planets[p].orbitRadius, 90),
    new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: .05,
        side: THREE.BackSide
        })
);
orbit.geometry.vertices.shift();
orbit.rotation.x = THREE.Math.degToRad(90);
scene.add(orbit);
scene.add(planets[p]);
scene.add(sun);
}

var animate = function () {
    requestAnimationFrame( animate );

    for(let p in planets){
        let planet = planets[p];
        planet.orbit += planet.orbitSpeed;
        planet.position.set(Math.cos(planet.orbit) * planet.orbitRadius, 0, -Math.sin(planet.orbit) * planet.orbitRadius);
    }
   
    renderer.render( scene, camera );
};

animate();
