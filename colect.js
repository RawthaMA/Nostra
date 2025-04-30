let close = document.getElementById('close')
let message =document.querySelector('.message')
close.addEventListener("click", function(){
message.style.display='none'
})

let menuIcon = document.querySelector('.menuIcon')
let sidenav =document.querySelector('.side-nav')
menuIcon.addEventListener("click",function(){
    sidenav.style.left='0'
    sidenav.style.transition='1s'
})

let side_close = document.querySelector('.side-close')
side_close.addEventListener("click" , function(){
    sidenav.style.left='-80%'
})

let women =document.getElementById('women')
let men =document.getElementById('men')
let kids =document.getElementById('kids')
let kitems =document.querySelector('.kids-items')
let witems =document.querySelector('.womens-items')
let mitems =document.querySelector('.mens-items')
let sideCon =document.querySelector('.side-container')


    women.addEventListener("click" , function(){
        witems.style.display='block'
   
       
    })


    


men.addEventListener("click" , function(){

    mitems.style.display='block'

})
kids.addEventListener("click" , function(){

    kitems.style.display='block'

})
// let closeSide=document.createElement('a')
//     closeSide.textContent='x'
//     closeSide.classList.add='closebtn'
//     sideCon.append(closeSide)