const modal = document.querySelector(".modal");
const btn=document.querySelector('.share');
const close=document.querySelector('.close')

btn.addEventListener('click',openModal)
close.addEventListener('click',closeModal)

function openModal(){
    modal.classList.add("active");
}
function closeModal(){
    modal.classList.remove("active")
}
// const openModal=() =>{
//     console.log("Modal is open");
//     modal.classList.add("active");/*add css class in an element */
//     // overlay.classList.add("overlayactive");
// };

// modal close function
// const closeModal=() =>{
//     console.log("Modal is close");
//     modal.classList.remove("active");
//     // overlay.classList.remove("overlayactive");
// };