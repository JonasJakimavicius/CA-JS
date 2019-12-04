function invited(name) {
    fetch('https://academy-year-2019.herokuapp.com/week-3/party')
        .then(response => response.json())
        .then(result => {
            if (result) {
                return console.log(result.filter(person => person.name === name).some(person => person.vip === true))
            }
            return (Error('Error'))
        });
}

invited('Dominykas Brazauskas');


async function weddingPlusOne() {
    let response = await fetch(`https://academy-year-2019.herokuapp.com/week-3/wedding`);
    let data = await response.json()
    return console.log(data.filter(person => person.attending === true).every(person => person.plusOne === true));
}

weddingPlusOne();


function atleastOneAttending(resolve, reject) {
    fetch('https://academy-year-2019.herokuapp.com/week-3/wedding')
        .then(response => response.json())
        .then(result => {
            if (result) {
                resolve(result)
            } else {
                reject(result)
            }
        })
        .catch(err => console.log(err))
}

function success(data) {
    return console.log(data.some(person => person.attending === true))
}

function fail(err) {
    console.log('Nepavyko atsiųsti duoemnų')
}

atleastOneAttending(success,fail);