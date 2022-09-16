// https://www.superheroapi.com/api.php/603317338162896/243/
var url = 'https://www.superheroapi.com/api.php/603317338162896';

var getSuperHero = (id) => {
    fetch(`${url}/${id}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            console.log(json.image.url)
            // document.getElementById('hi').innerHTML = `<img src="${json.image.url}" height=400px; width:200px/>`
            // document.getElementById('container2').innerHTML = `<p>${json.name}</p>`
            // document.getElementById('container3').innerHTML += `<p>Intelligence: ${json.powerstats.intelligence}</p>`
            // document.getElementById('container3').innerHTML += `<p>combat: ${json.powerstats.combat}</p>`
            const stats = getstatsHtml(json)
            const name = `<h2>${json.name}</h2>`
            hi.innerHTML = `<img src="${json.image.url}" height=400 width=400/><p>${name}</p>${stats}`;
        });
}
const getstatsHtml = (character) => {
    const stats = Object.keys(character.powerstats).map(stat => {
        return `<p>${stat.toUpperCase()}:${character.powerstats[stat]}<p>`
    })
    console.log(stats.join(''))
    return stats.join('');
}
var btnsearch = document.getElementById('btn1')
var btnhero = document.getElementById('btn2');

btnhero.onclick = () => {
    var random = Math.floor(Math.random() * 731);
    console.log('button is clicked')
    console.log('the random value is ', random)
    getSuperHero(random);
    console.log("button clicked")

}

const name1 = document.getElementById('input1');

var getSuperHero2 = (name1) => {
    fetch(`${url}/search/${name1}`)
        .then(response => response.json()).then(json => {
            console.log(`${url}/search/${name1}`)
            console.log(json)
            console.log('the value inside of textbox: ', name1)
            const hero = json.results[0];
            console.log(hero);
            const stats2 = getstatsHtml(hero)
            // document.getElementById('hi').innerHTML = `<img src="${hero.image.url}" height=400px; width:200px/>`
            // document.getElementById('container2').innerHTML = `<p>${hero.biography.aliases[2]}</p>`
            hi.innerHTML = `<img src="${hero.image.url}" height=400 width=400/>${stats2}`;

        });
}
btnsearch.onclick = () => {
    getSuperHero2(name1.value);

}
