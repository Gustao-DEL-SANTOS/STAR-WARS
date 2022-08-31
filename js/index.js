const persons = document.querySelector('#persons');
const starships = document.querySelector('#starships');
const planets = document.querySelector('#planets');

fillCounters();

function fillCounters(){
    Promise.all([
        getData('people/'),
        getData('starships/'),
        getData('planets/')
    ])
    .then(data => {
        persons.style.fontSize = '5em';
        starships.style.fontSize = '5em';
        planets.style.fontSize = '5em';

        persons.innerHTML = data[0].count;
        starships.innerHTML = data[1].count;
        planets.innerHTML = data[2].count;
    })
    .catch(err => console.log('Erro:', err))
}

function getData(param){
    return fetch(`https://swapi.dev/api/${param}`)
        .then(response => response.json())
}


function loadPhrase(){
    const btn = document.querySelector('#btn-phrases');
    const phrase = document.querySelector('#phrase');

    return fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
    .then(data => data.json())
    .then(json => {
        btn.innerHTML = 'Ver Mais uma frase!';
        // phrase.innerHTML = `"${json.content}"`;
        phrase.innerHTML = `Ola aminguinhos do universo`;

        phrase.animate([
            {transform: 'tranlateY(-70px)'},
            {transform: 'tralateY(0px)'}
        ],{
            duration: 500
        })

    })
    .catch(err => console.log('Erro:', err))
}
