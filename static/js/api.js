let email = document.querySelector(".email");
let roomNbr = document.querySelector(".roomNbr");
let roomNbrAdult = document.querySelector(".roomNbrAdult");
let roomNbrChild = document.querySelector(".roomNbrChild");
let dateIn = document.querySelector(".dateIn");
let roomId = document.querySelector(".roomId");
let image = document.querySelector(".image");
let name = document.querySelector(".name");
let price = document.querySelector(".price");
let description = document.querySelector(".description");

//function to fetch data from api

let fetchData = () => {
    let url = 'http://localhost:3000/posts';

        fetch(url).then((resp) => resp.json()).then((data) => {

                email.value=data.reservations[0].user.email
                roomNbr.value=data.reservations[0].room.roomNbr
                roomNbrAdult.value=data.reservations[0].roomNbrAdult
                roomNbrChild.value=data.reservations[0].roomNbrChild
                dateIn.value=data.reservations[0].dateIn
                roomId.value=data.reservations[0].room.roomId
                image.innerHTML=`<img src=${data.reservations[0].room.roomImage}>`
                name.textContent=`${data.reservations[0].room.roomName}`
                price.textContent=`${data.reservations[0].room.roomPrice}`
                description.textContent=`${data.reservations[0].room.roomDescription}`

                    // formHidden.innerHTML = `${data.reservations.map((reservation) => {
                    //     return `<form method="post" style="width: 400px; margin: 0 15px;">
                    //     <input type="hidden" value=${reservation.user.email}>
                    //     <input type="hidden" value=${reservation.room.roomNbr}>
                    //     <input type="hidden" value=${reservation.roomNbrAdult}>
                    //     <input type="hidden" value=${reservation.roomNbrChild}>
                    //     <input type="hidden" value=${reservation.dateIn}>
                    //     <input type="hidden" value=${reservation.room.roomId}>
                    //     <div class="room-item">
                    //         <div >
                    //             <img src=${reservation.room.roomImage}>
                    //         </div>
                    //         <div class="ri-text">
                    //             <h3 style="color:rgb(95, 75, 12); text-transform: uppercase; text-overflow: ellipsis; overflow: hidden; width: 300px; white-space: nowrap;">${reservation.room.roomName}</h3>
                    //             <h4> ${reservation.room.roomPrice} FCFA <span> Nuitee</span></h4>
                    //             <table >
                    //                 <tbody>
                    //                 <tr>
                    //                     <td><i class="fa fa-bath" style="color:darkgoldenrod !important;"></i> Espacieux</a> </td>
                    //                     <td><i class="fa fa-group" style="color:darkgoldenrod !important;"></i> 3 personnes </td>
                    //                 </tr>
                    //                 <tr>
                    //                     <td><i class="fa fa-bed" style="color:darkgoldenrod !important;"></i> King Bed </td>
                    //                     <td><i class="fa fa-television" style="color:darkgoldenrod !important;"></i> TV et Split </td>
                    //                 </tr>
                    //                 <tr>
                    //                     <td><i class="fa fa-wifi" style="color:darkgoldenrod !important;"></i>  Wifi Gratuit</td>
                    //                     <td><i class="fa fa-cc-diners-club" style="color:darkgoldenrod !important;"></i> Room Service </td>
                    //                 </tr>
                    //                 </tbody>
                    //             </table>
    
                    //             <textarea readonly style="display: block; font-size: 15px; resize: none; border:0px; width:100%; height: 70px; text-align: justify;">${reservation.room.roomDescription}</textarea>
                    //             <div class="mt-1">
                    //                 <button type="submit"  class="btn btn-back" style="width: 100%"><i class="fa fa-bell"></i> RESERVER</button>
                    //             </div>
                    //         </div>
                    //     </div>
                    // </form>`;
                    // })}`
        })
        //if error occurs
        .catch(() => {
            formHidden.innerHTML = `<h3>Error Occured</h3>`
        })
    }

window.addEventListener("load", fetchData)