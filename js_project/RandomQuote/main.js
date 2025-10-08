const api = 'https://dummyjson.com/quotes/random';

let quote = document.querySelector('.quote');
let author = document.querySelector('.author');
let btn = document.querySelector('button');
btn.addEventListener("click",getquote)


function getquote() {fetch(api)
.then((data) => {
    return data.json();
})
.then((res) => {
    console.log(res);
quote.textContent = ` “ ${res.quote} ”`;
author.textContent = ` — ${res.author}`;
})
.catch((error) => {
    console.log(error);
});
}

