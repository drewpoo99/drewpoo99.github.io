    
    //Set up the scene and camera
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(350, 117.5, 0);

    //set up the renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight - 50);
    document.body.appendChild( renderer.domElement );

    //user interaction controls
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;
    scene.rotation.y = 9.5;

    //declare planet radii. Read more about this below the animation
    const sunRad = 10;
    const earthRad = sunRad / 54.5;
    const merRad = earthRad * 0.38;
    const venusRad = earthRad * 0.95;
    const marsRad = earthRad * 0.53;
    const jupiterRad = earthRad * 11.2;
    const saturnRad = earthRad * 9.45;
    const uranusRad = earthRad * 4.0;
    const neptuneRad = earthRad * 3.88;

    //planet distances from the sun. Read more about this below the animation. Add 5.1 so it draws from the edge of the sun instead of the center
    const sunP = 0
    const D = 5.1;
    const mercD = sunP + 5.7 + D;
    const venusD = sunP + 10.8 + D;
    const earthD = sunP + 14.9 + D;
    const marsD = sunP + 22.8 + D;
    const jupiterD = sunP + 78.0 + D;
    const saturnD = sunP + 143.7 + D;
    const uranusD = sunP + 287.1 + D;
    const neptuneD = sunP + 453.0 + D;

    //planet orbit speeds. Read more about this below the animation
    const mercOrbitSpeed = 4.787;
    const venusOrbitSpeed = 3.502;
    const earthOrbitSpeed = 2.948;
    const marsOrbitSpeed = 2.4077;
    const jupiterOrbitSpeed = 1.307;
    const saturnOrbitSpeed = 0.969;
    const uranusOrbitSpeed = 0.681;
    const neptuneOrbitSpeed = 0.543;

    //planets array
    let planets = [];

    //create the sun
    var sunGeometry = new THREE.SphereGeometry( 10, 32, 32 );
    var sunMaterial = new THREE.MeshBasicMaterial( { color: 0xFFB200 } );
    var sun = new THREE.Mesh( sunGeometry, sunMaterial );

    //create mercury
    var mercuryGeo = new THREE.SphereGeometry(merRad, 32, 32);
    var mercuryMat = new THREE.MeshBasicMaterial({color: 0xffffff});
    var mercury = new THREE.Mesh(mercuryGeo, mercuryMat);
    mercury.position.x = mercD;
    mercury.orbitRadius = mercury.position.x + merRad;
    mercury.orbitSpeed = mercOrbitSpeed / 500;
    mercury.orbit = Math.random() * Math.PI * 2;
    planets.push(mercury);

    //create venus
    var venusGeo = new THREE.SphereGeometry(venusRad, 32, 32);
    var venusMat = new THREE.MeshBasicMaterial({color: 0xFFF680});
    var venus = new THREE.Mesh(venusGeo, venusMat);
    venus.position.x = venusD;
    venus.orbitRadius = venus.position.x + venusRad;
    venus.orbitSpeed = venusOrbitSpeed / 500;
    venus.orbit = Math.random() * Math.PI * 2;
    planets.push(venus);

    //create earth
    var earthGeometry = new THREE.SphereGeometry(earthRad, 32, 32  );
    var earthMaterial = new THREE.MeshBasicMaterial( { color: 0x003580 } );
    var earth = new THREE.Mesh( earthGeometry, earthMaterial );
    earth.position.x = earthD;
    earth.orbitRadius = earth.position.x + earthRad;
    earth.orbitSpeed = earthOrbitSpeed  / 500;
    earth.orbit = Math.random() * Math.PI * 2;
    planets.push(earth);

    //create mars
    var MarsGeometry = new THREE.SphereGeometry( marsRad, 32, 32  );
    var MarsMaterial = new THREE.MeshBasicMaterial( { color: 0xFF4F00 } );
    var Mars = new THREE.Mesh( MarsGeometry, MarsMaterial );
    Mars.position.x = marsD;
    Mars.orbitRadius = Mars.position.x + marsRad;
    Mars.orbitSpeed = marsOrbitSpeed / 500;
    Mars.orbit = Math.random() * Math.PI * 2;
    planets.push(Mars);

    //create jupiter
    var jupiterGeometry = new THREE.SphereGeometry( jupiterRad, 32, 32  );
    var jupiterMaterial = new THREE.MeshBasicMaterial( { color: 0xFF4F00 } );
    var jupiter = new THREE.Mesh( jupiterGeometry, jupiterMaterial );
    jupiter.position.x = jupiterD;
    jupiter.orbitRadius = jupiter.position.x + jupiterRad;
    jupiter.orbitSpeed = jupiterOrbitSpeed / 500;
    jupiter.orbit = Math.random() * Math.PI * 2;
    planets.push(jupiter);

    //create saturn and the ring together
    var saturnGeometry = new THREE.SphereGeometry( saturnRad, 32, 32  );
    var saturnMaterial = new THREE.MeshBasicMaterial( { color: 0xFFA455 } );
    var saturn = new THREE.Mesh( saturnGeometry, saturnMaterial );
    saturn.position.x = saturnD;
    saturn.orbitRadius = saturn.position.x + saturnRad;
    saturn.orbitSpeed = saturnOrbitSpeed / 500;
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

    //create uranus
    var uranusGeometry = new THREE.SphereGeometry( uranusRad, 32, 32  );
    var uranusMaterial = new THREE.MeshBasicMaterial( { color: 0xBFFBFF } );
    var uranus = new THREE.Mesh( uranusGeometry, uranusMaterial );
    uranus.position.x = uranusD;
    uranus.orbitRadius = uranus.position.x + uranusRad;
    uranus.orbitSpeed = uranusOrbitSpeed / 500;
    uranus.orbit = Math.random() * Math.PI * 2;
    planets.push(uranus);

    //create neptune
    var neptuneGeometry = new THREE.SphereGeometry( neptuneRad, 32, 32  );
    var neptuneMaterial = new THREE.MeshBasicMaterial( { color: 0x409FD5 } );
    var neptune = new THREE.Mesh( neptuneGeometry, neptuneMaterial );
    neptune.position.x = neptuneD;
    neptune.orbitRadius = neptune.position.x + neptuneRad;
    neptune.orbitSpeed = neptuneOrbitSpeed / 500;
    neptune.orbit = Math.random() * Math.PI * 2;
    planets.push(neptune);

    //draw the lines following the planet orbit then add everything to the scene
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

    //animate it all!
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