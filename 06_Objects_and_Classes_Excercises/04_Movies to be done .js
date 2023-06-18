function Movies(input){
    let movies = {};
input.forEach(element => {
    let data = element.split(" ");
    let el1 = data[0];
    let el2 = data[1];
    if (el1 ==="addMovie"){
        let movie = {}
        movie["name"] = el2;
        movies[el2] = movie;
    }else if (el2 === "directedBy"){
        let el3 = data[2];
        movies[el1]["directed"] = el3;
    }else if (el2 === "onDate"){

    }
});
}
Movies(
    [
        'addMovie Fast and Furious',
        'addMovie Godfather',
        'Inception directedBy Christopher Nolan',
        'Godfather directedBy Francis Ford Coppola',
        'Godfather onDate 29.07.2018',
        'Fast and Furious onDate 30.07.2018',
        'Batman onDate 01.08.2018',
        'Fast and Furious directedBy Rob Cohen'
        ]
        
)