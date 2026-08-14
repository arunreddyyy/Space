const planets = {

    Mercury: {
        description:
        "The smallest planet and the closest planet to the sun." ,

        temperature:
            "167°C",

            population:
                "0",

            distance:
                "57.9 Million km",

            moons:
                0,

            orbit:
                "88 Days",

            gravity:
                "3.70 m/s²",
            

            facts: [
                "Mercury is the smallest planet.",
                "A year on Mercury lasts only 88 Earth days.",
                "Mercury has almost no atmosphere.",
                "It explerience extreme temperature change."

            ]
        

    },

    Venus: {

        description:
            "A hot world covered by thick clouds and a powerful greenhouse effect.",

        temperature:
            "464°C",

        population:
            "0",

        distance:
            "108.2 Millions km",
        
        moons:
            0,

        orbit:
            "225 Days",

        gravity:
            "8.87 m/s²",

        facts: [
            "Venus is the hottest planet.",
            "Its atmosphere is mostly carbon dioxide.",
            "Venus rotates in the opposite diretion to most planets.",
            "A Venusian day is longer than its year."

        ]

    },

    Earth: {
        temperature: "15°C",
        population: "8.3 billion",
        distance: "149.6 million km",
        moons: 1,
        orbit:"365.25 days",
        gravity:"9.81 m/s²",
        facts: [
            "Earth is the only known planet with life.",
            "About 71% of Earth's surface is covered by water.",
            "Earth has a protective magnetic field."
        ]
    },

    Mars:{
        temperature: "-63°C",
        population: "0",
        distance: "227.9 million km",
        moons: 2,
        orbit: "687days",
        gravity: "3.71 m/s²",
        facts: [
            "Mars is known as the Red Planet.",
            "Mars has two small moons.",
            "Mars has the largest volcano in solar system.",
            "Scientists search Mars for evidence of ancient life."
            
        ]
    },

    Jupiter: {
        temperature: "-110°C",
        population: "0",
        distance: " 778.5 million km",
        moons: 146,
        orbit: "11.86 years",
        gravity: "24.79 m/s²",
        facts: [
            "Jupiter is the largest planet.",
            "It has a famous Great Red Spot.",
            "Jupiter is a gas gaint.",
            "It has many  moons.", 

        ]

    },

    Saturn:{
        temperature: "-140°C",
        population: "0",
        distance: "1.43 billion km",
        moons: 293,
        orbit: "29.45 years",
        gravity: "10.44m/s²",
        facts: [
            "Saturn is famous for its spectacular rings.",
            "Saturn is a gas giant.",
            "It is less dense than water.",
            "Its rings are made mostly of ice and rock."
        ]
    },

    Uranus: {
        temperature: "-195°C",
        population: "0",
        distance: "2.87 billion km" ,
        moons: 28,
        orbit: "84 years",
        gravity: "8.69 m/s²",
        facts:[
            "Uranus rotates on its side.",
            "It has a blue-green appearance",
            "Uranus has faint rings.",
            "It is an ice gaint."
        ]
    },

    Neptune: {
        temperature: "-280°C",
        population: "0",
        distance: "4.50 billion km",
        moons: 16,
        orbit: "164.8 years",
        gravity: "11.15 m/s²",
        facts:[
            "Neptune is the farthest major planet from the Sun.",
            "It has extremely strong winds.",
            "Neptune is an ice giant.",
            "It apperas blue because of methane in its atmosphere."
        ]
    }
    
};

function showPlanet(planetName)
{
    const planet = planets[planetName];

    if(!planet){
        return;
    }

    document.getElementById("planet-name")
        .textContent = planetName;

    document.getElementById("planet-description")
        .textContent = planet.description;

    document.getElementById("temperature")
        .textContent = planet.temperature;

    document.getElementById("population")
        .textContent = planet.population;

    document.getElementById("distance")
        .textContent = planet.distance;

    document.getElementById("moons")
        .textContent = planet.moons;

    document.getElementById("orbit-period")
        .textContent = planet.orbit;

    document.getElementById("gravity")
        .textContent = planet.gravity;

       const factsList = 
            document.getElementById("facts");

        factsList.innerHTML = "";

        planet.facts.forEach(function(fact){
            const li =
                document.createElement("li");

            li.textContent = fact;

            factsList.appendChild(li);
        });

    document.querySelector(".information")
    .scrollIntoView
    ({
        behavior : "smooth"
    });
}


    function scrollToPlanets(){

        document.getElementById("planets")
            .scrollIntoView({
                behavior: "smooth"
            });
    }

    function scrollToHome(){

        document.getElementById("home")
                .scrollIntoView({
                    behavior: "smooth"
                });
    }

    const table = 
        document.getElementById("planet-table");

        Object.keys(planets).forEach(function(name){

            const planet = planets[name];

            const row = 
                document.createElement("tr");

                row.innerHTML = `

                <td>${name}</td>

                <td>${planet.temperature}</td>

                <td>${planet.population}</td>

                <td>${planet.distance}</td>

                <td>${planet.moons}</td>

                `;

                table.appendChild(row);

        });

    
