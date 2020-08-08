'use strict';

window.addEventListener('load', () => {

    Start();
});

const Start = () => {
    let text = document.querySelector('#nome').innerText;
    window.addEventListener('keyup', text);
    console.log(text);
}

const Users = () => {
    const User = resultado.results.map(person => {
        const age = person.dob.age;
        const photo = person.picture.thumbnail;
        const name = `${person.name.first} ${person.name.last}`;
        const gender = person.gender;
        return { name, photo, age, gender };
    });
    return User;
}

const Filters = (text) => {
    return Users().filter(person => (person.name.toLowerCase().includes(text.toLowerCase())));
}

const Statistics = (text) => {
    const Women = Filters(text).filter(person => {
        return person.gender === 'female';
    });
    const Men = Filters(text).filter(person => {
        return person.gender === 'male';
    });
    let arrayAge = [...Women.map(person => {
        return person.age;
    }), ...Men.map(person => {
        return person.age;
    })];
    const numberMen = Men.length;
    const numberWomen = Women.length;
    const sumAge = sumAges(...arrayAge);
    const mean = sumAge / (numberMen + numberWomen);
    return { numberMen, numberWomen, sumAge, mean };
}

const sumAges = (...numbers) => {
    return numbers.reduce((acc, sum) => acc + sum, 0);
}