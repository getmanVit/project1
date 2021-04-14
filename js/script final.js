"Use strict";

let numberOfFilms;

function start () {
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

         while (numberOfFilms == "" || numberOfFilms == null || isNaN (numberOfFilms)) {
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
         }
}

start ();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?'),
              b = prompt('На сколько оцените его?');
        if (a != "" && b != "" && a != null && b != null && a.length < 50) {
            console.log("Done");
            personalMovieDB.movies[a] = b;
        }
        else {
            console.log("Error");
            i--;
        }
    }
}

rememberMyFilms ();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        alert ("Просмотрено довольно мало фильмов");
    }
        else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert ("Вы классический зритель");
    }
        else if (personalMovieDB.count > 30) {
        alert ("Вы киноман");
    }
        else {
            alert ("Ошибка");
        }
}

detectPersonalLevel ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB (personalMovieDB.privat);

// function whriteYourGenres () {
//     for (let i = 0; i < 3; i++) {
//         const = promt ("Ваш любимый жанр под номером")
// }