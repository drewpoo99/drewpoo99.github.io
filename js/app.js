    /*
    * This is the active app for the animation.
    * 
    */
    //Set up the scene and camera
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 90, window.innerWidth/window.innerHeight, 0.1, 1000 );
    camera.position.set(350, 117.5, 0);

    //set up the renderer
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight - 50 );
    document.body.appendChild( renderer.domElement );

    //user interaction controls
    var controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.rotateSpeed = 1.0;
    controls.zoomSpeed = 1.2;
    controls.panSpeed = 0.8;

    var gui = new dat.GUI();

    var planetsGUIOptions = {
        mercury : false,
        venus : false,
        earth : false,
        mars : false,
        jupiter : false,
        saturn : false,
        uranus : false,
        neptune : false,
    };

    let focus = {
        mercury : false,
        venus : false,
        earth : false,
        mars : false,
        jupiter : false,
        saturn : false,
        uranus : false,
        neptune : false
    };
    var planetsGUI = gui.addFolder("Learn About The Planets");
    planetsGUI.add(planetsGUIOptions, 'mercury');
    planetsGUI.add(planetsGUIOptions, 'venus');
    planetsGUI.add(planetsGUIOptions, 'earth');
    planetsGUI.add(planetsGUIOptions, 'mars');
    planetsGUI.add(planetsGUIOptions, 'jupiter');
    planetsGUI.add(planetsGUIOptions, 'saturn');
    planetsGUI.add(planetsGUIOptions, 'uranus');
    planetsGUI.add(planetsGUIOptions, 'neptune');
    
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
    var saturnMaterial = new THREE.MeshBasicMaterial( { color: 0xA46502 } );
    var saturn = new THREE.Mesh( saturnGeometry, saturnMaterial );
    saturn.position.x = saturnD;
    saturn.orbitRadius = saturn.position.x + saturnRad;
    saturn.orbitSpeed = saturnOrbitSpeed / 500;
    saturn.orbit = Math.random() * Math.PI * 2;
    var ring1Geometry = new THREE.RingGeometry( saturnRad + 0.5, saturnRad + 0.75, 32 );
    var ring1Material = new THREE.MeshBasicMaterial( { color: 0xCA984A, side: THREE.DoubleSide } );
    var ring1 = new THREE.Mesh( ring1Geometry, ring1Material );
    ring1.position.x = saturn.position.x;
    ring1.rotation.x = -0.5;
    ring1.orbitRadius = saturn.orbitRadius;
    ring1.orbitSpeed = saturn.orbitSpeed;
    ring1.orbit = saturn.orbit;
    var ring2Geometry = new THREE.RingGeometry( saturnRad + 0.8, saturnRad + 1, 32 );
    var ring2Material = new THREE.MeshBasicMaterial( { color: 0xCA984A, side: THREE.DoubleSide } );
    var ring2 = new THREE.Mesh( ring2Geometry, ring2Material );
    ring2.position.x = saturn.position.x;
    ring2.rotation.x = -0.5;
    ring2.orbitRadius = saturn.orbitRadius;
    ring2.orbitSpeed = saturn.orbitSpeed;
    ring2.orbit = saturn.orbit;
    planets.push(saturn);
    planets.push(ring1);
    planets.push(ring2);

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
    var neptuneMaterial = new THREE.MeshBasicMaterial( { color: 0x0068BC } );
    var neptune = new THREE.Mesh( neptuneGeometry, neptuneMaterial );
    neptune.position.x = neptuneD;
    neptune.orbitRadius = neptune.position.x + neptuneRad;
    neptune.orbitSpeed = neptuneOrbitSpeed / 500;
    neptune.orbit = Math.random() * Math.PI * 2;
    planets.push(neptune);

    //draw the lines following the planet orbit then add everything to the scene
    /*
    *   Borrowed from the codepen (view the bottom of the page for the link)
    */
    for(let p in planets){
        var orbit = new THREE.Line(
        new THREE.CircleGeometry(planets[p].orbitRadius, 90),
        new THREE.MeshBasicMaterial({
            color: 0xffffff,
            transparent: true,
            opacity: 0.1,
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
        /*
        *   Borrowed from the codepen (view the bottom of the page for the link)
        */
        for(let p in planets){
            let planet = planets[p];
            planet.orbit += planet.orbitSpeed;
            planet.position.set(Math.cos(planet.orbit) * planet.orbitRadius, 0, -Math.sin(planet.orbit) * planet.orbitRadius);
        }

        if(planetsGUIOptions.mercury){
            camera.position.y = 5;
            camera.position.x = mercury.position.x;
            camera.position.z = mercury.position.z;
            camera.lookAt(mercury.position);
            if(!focus.mercury){
                document.getElementById("planetInfo").innerHTML = 
                "<h3>About Mercury</h3>" + 
                "<ul> <li> Mercury is the smallest planet in the solar system </li>" +
                "<li> It is the closest planet to the Sun at a distance of about 36 million miles (58 million kilometers) or 0.39 AU. </li>" +
                '<li> 1 day-night on Mercury takes 175 Earth days, while a "year" on Mercury only takes 88 Earth days. </li>' +
                "<li> Mercury is known as a terrestial planet, meaning it is rough and rocky much like Earths moon. </li>" +
                '<li> <a href="https://solarsystem.nasa.gov/planets/mercury/overview/" target="_blank">Learn More Here.</a></li></ul>';
                focus.mercury = true;
            }
        }
        else if(planetsGUIOptions.venus){
            camera.position.y = 10;
            camera.position.x = venus.position.x;
            camera.position.z = venus.position.z;
            camera.lookAt(venus.position);
            if(!focus.venus){
                document.getElementById("planetInfo").innerHTML = 
                "<h3>About Venus<h3>" + 
                "<ul> <li> Venus and Earth are relatively similar in size. </li>" +
                "<li> Venus is the second closest planet to the sun at a distance of about 67 million miles (108 million km). </li>" +
                "<li> One day on Venus lasts 243 Earth days because Venus spins backwards, with its sun rising in the west and setting in the east. </li>" +
                "<li> The planet’s surface temperature is about 900 degrees Fahrenheit (465 degrees Celsius)—hot enough to melt lead. </li>" +
                "<li> Many scientists believe water once existed on the surface. Future Venus explorers will search for evidence of an ancient ocean. </li>" +
                '<li> <a href="https://solarsystem.nasa.gov/planets/venus/overview/" target="_blank">Learn More Here</a></li></ul>';
                focus.venus = true;
            }
        }
        else if(planetsGUIOptions.earth){
            camera.position.y = 10;
            camera.position.x = earth.position.x;
            camera.position.z = earth.position.z;
            camera.lookAt(earth.position);
            if(!focus.earth){
                document.getElementById("planetInfo").innerHTML = 
                "<h3>About Earth</h3>" + 
                "<ul> <li> If the Sun were as tall as a typical front door, Earth would be the size of a nickel. </li>" +
                "<li> Earth orbits our Sun, a star. Earth is the third planet from the Sun at a distance of about 93 million miles (150 million km). </li>" +
                "<li> Earth's atmosphere is 78 percent nitrogen, 21 percent oxygen and 1 percent other ingredients—the perfect balance to breathe and live. </li>" +
                "<li> Our atmosphere protects us from incoming meteoroids, most of which break up in our atmosphere before they can strike the surface. </li>" +
                '<li> <a href="https://solarsystem.nasa.gov/planets/earth/overview/" target="_blank">Learn More Here. </a></li></ul>';
                focus.earth = true;
            }
        }
        else if(planetsGUIOptions.mars){
            camera.position.y = 10;
            camera.position.x = Mars.position.x;
            camera.position.z = Mars.position.z;
            camera.lookAt(Mars.position);
            if(!focus.mars){
                document.getElementById("planetInfo").innerHTML = 
                "<h3> About Mars <h3>" +
                "<ul> <li> If the Sun were as tall as a typical front door, Earth would be the size of a dime, and Mars would be about as big as an aspirin tablet. </li>" + 
                "<li> Mars orbits our Sun, a star. Mars is the fourth planet from the Sun at an average distance of about 228 million km (142 million miles) or 1.52 AU. </li>" +
                "<li> Mars has a thin atmosphere made up mostly of carbon dioxide (CO2), argon (Ar), nitrogen (N2), and a small amount of oxygen and water vapor. </li>" +
                "<li> Several missions have visited this planet, from flybys and orbiters to rovers on the surface.The first true Mars mission success was the Mariner 4 flyby in 1965. </li>"+
                '<li> <a href="https://solarsystem.nasa.gov/planets/mars/overview/" target="_blank">Learn More Here. </a></li></ul>';
                focus.mars = true;
            }
        }
        else if(planetsGUIOptions.jupiter){
            camera.position.y = 10;
            camera.position.x = jupiter.position.x;
            camera.position.z = jupiter.position.z;
            camera.lookAt(jupiter.position);
            if(!focus.jupiter){
                document.getElementById("planetInfo").innerHTML = 
                "<h3> About Juptier </h3>" +
                "<ul><li> Eleven Earths could fit across Jupiter’s equator. If Earth were the size of a grape, Jupiter would be the size of a basketball. </li>" +
                "<li> Jupiter orbits about 484 million miles (778 million kilometers) or 5.2 Astronomical Units (AU) from our Sun (Earth is one AU from the Sun). </li>" +
                "<li> Jupiter is a gas giant and so lacks an Earth-like surface. If it has a solid inner core at all, it’s likely only about the size of Earth. </li>" + 
                "<li> Jupiter cannot support life as we know it. But some of Jupiter's moons have oceans beneath their crusts that might support life. </li>" +
                '<li> <a href="https://solarsystem.nasa.gov/planets/jupiter/overview/" target="_blank">Learn More Here</a></li></ul>';
                focus.jupiter = true;
            }
        }
        else if(planetsGUIOptions.saturn){
            camera.position.y = 10;
            camera.position.x = saturn.position.x;
            camera.position.z = saturn.position.z;
            camera.lookAt(saturn.position);
            if(!focus.saturn){
                document.getElementById("planetInfo").innerHTML = 
                "<h3> About Saturn </h3>" +
                "<ul><li> Nine Earths side by side would almost span Saturn’s diameter. That doesn’t include Saturn’s rings. </li>" +
                "<li> Saturn is the sixth planet from our Sun (a star) and orbits at a distance of about 886 million miles (1.4 billion kilometers) from the Sun. </li>" +
                "<li> Saturn has 53 known moons with an additional 29 moons awaiting confirmation of their discovery—that is a total of 82 moons. </li>" +
                "<li> Saturn takes about 10.7 hours (no one knows precisely) to rotate on its axis once—a Saturn “day”—and 29 Earth years to orbit the sun. </li>" +
                "<li> About two tons of Saturn’s mass came from Earth—the Cassini spacecraft was intentionally vaporized in Saturn’s atmosphere in 2017. </li>" +
                '<li><a href="https://solarsystem.nasa.gov/planets/saturn/overview/" target="_blank">Learn More Here. </a></li></ul>';
                focus.saturn = true;
            }
        }
        else if(planetsGUIOptions.uranus){
            camera.position.y = 10;
            camera.position.x = uranus.position.x;
            camera.position.z = uranus.position.z;
            camera.lookAt(uranus.position);
            if(!focus.uranus){
                document.getElementById("planetInfo").innerHTML = 
                "<h3> About Uranus </h3>" +
                "<ul><li> Uranus is about four times wider than Earth. If Earth were a large apple, Uranus would be the size of a basketball. </li>" +
                "<li> Uranus orbits our Sun, a star, and is the seventh planet from the Sun at a distance of about 1.8 billion miles (2.9 billion kilometers). </li>" +
                "<li> Voyager 2 is the only spacecraft to fly by Uranus. No spacecraft has orbited this distant planet to study it at length and up close. </li>" +
                "<li> Uranus has 13 known rings. The inner rings are narrow and dark and the outer rings are brightly colored. </li>" +
                "<li> The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. </li>" +
                '<li><a href="https://solarsystem.nasa.gov/planets/uranus/overview/" target="_blank">Learn More Here. </a></li></ul>';
                focus.uranus = true;
            }
        }
        else if(planetsGUIOptions.neptune){
            camera.position.y = 10;
            camera.position.x = neptune.position.x;
            camera.position.z = neptune.position.z;
            camera.lookAt(neptune.position);
            if(!focus.neptune){
                document.getElementById("planetInfo").innerHTML = 
                "<h3> About Uranus </h3>" +
                "<ul><li> Neptune is relatively the same size as Uranus </li>" +
                "<li> Neptune orbits our Sun, a star, and is the eighth planet from the Sun at a distance of about 2.8 billion miles (4.5 billion kilometers). </li>" +
                "<li> Neptune takes about 16 hours to rotate once (a Neptunian day), and about 165 Earth years to orbit the sun (a Neptunian year). </li>" +
                "<li> Neptune has at least five main rings and four more ring arcs, which are clumps of dust and debris likely formed by the gravity of a nearby moon. </li>" +
                "<li> Neptune has 14 known moons which are named after sea gods and nymphs in Greek mythology. </li>" +
                '<li><a href="https://solarsystem.nasa.gov/planets/neptune/overview/" target="_blank">Learn More Here. </a></li></ul>';
                focus.neptune = true;
            }
        }else{
            document.getElementById("planetInfo").innerHTML = "Choose a planet on the right to learn more";
            focus.mercury = false;
            focus.venus = false;
            focus.earth = false;
            focus.mars = false;
            focus.jupiter = false,
            focus.saturn = false,
            focus.uranus = false,
            focus.neptune = false;
        }
        renderer.render( scene, camera );

    };
    animate();


  