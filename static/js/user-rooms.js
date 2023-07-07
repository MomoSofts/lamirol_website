let image = document.querySelector(".image");
let name = document.querySelector(".name");
let price = document.querySelector(".price");
let priceTot = document.querySelector(".priceTot");
let description = document.querySelector(".description");
let quantite = document.querySelector(".quantite");

//function to fetch data from api

let fetchData = () => {
    let url = 'http://localhost:3000/posts';

        fetch(url).then((resp) => resp.json()).then((data) => {

                image.innerHTML=`<img src=${data.reservations[0].room.roomImage}>`
                name.textContent=`${data.reservations[0].room.roomName}`
                quantite.textContent=`${data.reservations[0].room.roomNbr}`
                price.textContent=`${data.reservations[0].room.roomPrice}`
                priceTot.textContent=`${data.reservations[0].room.roomPrice * data.reservations[0].room.roomNbr}`
        })
        //if error occurs
        .catch(() => {
            name.innerHTML = `<h3>Error Occured</h3>`
            roomNbr.innerHTML = `<h3>Error Occured</h3>`
            price.innerHTML = `<h3>Error Occured</h3>`
            quantite.innerHTML = `<h3>Error Occured</h3>`
        })
    }

window.addEventListener("load", fetchData)