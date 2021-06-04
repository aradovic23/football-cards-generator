// players

var players = [{
        name: 'Rui Silva',
        position: 'Goalkeeper',
        number: '1',
        image: './img/rui.jpg',
        country: 'https://www.countryflags.io/pt/flat/32.png'
    },
    {
        name: 'Foulquier',
        position: 'Defender',
        number: '2',
        image: './img/foulquier.jpg',
        country: 'https://www.countryflags.io/fr/flat/32.png'
    },
    {
        name: 'German',
        position: 'Defender',
        number: '6',
        image: './img/german.jpg',
        country: 'https://www.countryflags.io/es/flat/32.png'
    },
    {
        name: 'Carlos Neva',
        position: 'Defender',
        number: '15',
        image: './img/neva.jpg',
        country: 'https://www.countryflags.io/es/flat/32.png'
    },
    {
        name: 'Quini',
        position: 'Defender',
        number: '17',
        image: './img/quini.jpg',
        country: 'https://www.countryflags.io/es/flat/32.png'
    },
    {
        name: 'Jesus Vallejo',
        position: 'Defender',
        number: '20',
        image: './img/vallejo.jpg',
        country: 'https://www.countryflags.io/es/flat/32.png'
    },
    {
        name: 'Domingos Duarte',
        position: 'Defender',
        number: '22',
        image: './img/domingos.jpg',
        country: 'https://www.countryflags.io/pt/flat/32.png'
    },
    {
        name: 'Gonalons',
        position: 'Midfielder',
        number: '4',
        image: './img/gonalons.jpg',
        country: 'https://www.countryflags.io/fr/flat/32.png'
    },
    {
        name: 'Yan Eteki',
        position: 'Midfielder',
        number: '8',
        image: './img/eteki.jpg',
        country: 'https://www.countryflags.io/cm/flat/32.png'
    },
    {
        name: 'Herrera',
        position: 'Midfielder',
        number: '21',
        image: './img/herrera.jpg',
        country: 'https://www.countryflags.io/ve/flat/32.png'
    },
    {
        name: 'Luis Suarez',
        position: 'Forward',
        number: '7',
        image: './img/luis.jpg',
        country: 'https://www.countryflags.io/co/flat/32.png'
    },
    {
        name: 'Soldado',
        position: 'Forward',
        number: '9',
        image: './img/soldado.jpg',
        country: 'https://www.countryflags.io/es/flat/32.png'
    },
    {
        name: 'Puertas',
        position: 'Forward',
        number: '10',
        image: './img/puertas.jpg',
        country: 'https://www.countryflags.io/es/flat/32.png'
    },
    {
        name: 'Machis',
        position: 'Forward',
        number: '11',
        image: './img/machis.jpg',
        country: 'https://www.countryflags.io/ve/flat/32.png'
    },
    {
        name: 'Fede Vico',
        position: 'Forward',
        number: '14',
        image: './img/fedevico.jpg',
        country: 'https://www.countryflags.io/es/flat/32.png'
    }
]


// randomize the array:

function randomArray(array) {
    array.sort(() => Math.random() - 0.5);
}

// import players from the array: 

var firstTeam = document.querySelector('.first-team');
var secondTeam = document.querySelector('.second-team');

function importPlayers(array) {


    for (var i = 0; i < array.length; i++) {
        var playerCard = document.createElement('div')
        playerCard.setAttribute('class', 'player col-lg-2 col-md-4 col-sm-12')
        var image = document.createElement('img')
        image.src = array[i].image
        var name = document.createElement('h3')
        name.textContent = array[i].name
        var position = document.createElement('p')
        position.textContent = array[i].position
        var number = document.createElement('p')
        number.textContent = array[i].number
        number.setAttribute('class', 'number')
        var country = document.createElement('img')
        country.setAttribute('class', 'flag rounded mx-auto d-block')
        country.src = array[i].country

        if (i < 11) {
            firstTeam.appendChild(playerCard)
            playerCard.appendChild(image)
            playerCard.appendChild(name)
            playerCard.appendChild(number)
            playerCard.appendChild(position)
            playerCard.appendChild(country)
        } else {
            secondTeam.appendChild(playerCard)
            playerCard.appendChild(image)
            playerCard.appendChild(name)
            playerCard.appendChild(number)
            playerCard.appendChild(position)
            playerCard.appendChild(country)
        }
    }
}

// swap players 

function swapPlayers() {
    var $firstTeam = document.querySelectorAll(".first-team div");
    var $player = Math.floor(Math.random() * $firstTeam.length);
    var el1 = $firstTeam[$player]

    var $secondTeam = document.querySelectorAll(".second-team div");
    var $player2 = Math.floor(Math.random() * $secondTeam.length);
    var el2 = $secondTeam[$player2]

    firstTeam.appendChild(el2)
    secondTeam.appendChild(el1)
}

// setInterval

setInterval(swapPlayers, 3000)

randomArray(players)
importPlayers(players)