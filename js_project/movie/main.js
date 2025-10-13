let img = document.querySelector("img");
let filmName = document.querySelector(".filmName");
let filmContent = document.querySelector(".filmContent");
let filmDescription = document.querySelector(".filmDescription");




function movie(){
    const url = "https://dummyjson.com/products"

    fetch(url)
    .then ((data) => {
        return data.json();
    })
    .then ((res) => {
        console.log(res);
        console.log(res.products[0]);
    
        img.src = res.products[0].images;
        filmName.textContent = res.products[0].title;
        filmContent.textContent = res.products[0].description;
        filmDescription.textContent = res.products[0].price;
    
    })
    .catch ((error) => {
        console.log(error);
    })
}

movie();