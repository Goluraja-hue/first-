let img = document.querySelector("img");
let filmName = document.querySelector(".filmName");
let filmContent = document.querySelector(".filmContent");
let filmDescription = document.querySelector(".filmDescription");




function movie(){
    const url = "https://imdb.iamidiotareyoutoo.com/search?tt=tt2250912"

    fetch(url)
    .then ((data) => {
        return data.json();
    })
    .then ((res) => {
        console.log(res);
        // console.log(res.short.image);
        for (let i = 0 ; i <= 10 ; i++){
        img.src = res.short.image;
        filmName.textContent = res.short.name;
        filmContent.textContent = res.short.keywords;
        filmDescription.textContent = res.short.description;
        }
    })
    .catch ((error) => {
        console.log(error);
    })
}

movie();