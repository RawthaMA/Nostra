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

let carbtn2=document.getElementById('car-btn2')
let carbtn=document.getElementById('car-btn')

let img1=document.querySelector('.img1')
let img2=document.querySelector('.img2')
let img3=document.querySelector('.img3')


carbtn2.addEventListener("click" , function(){
    img1.classList.add('animate')
    img2.classList.add('animate1')
    carbtn.style.visibility='visible'
    let shopbtn=document.querySelector('.shop-btn')

    shopbtn.style.backgroundColor='#transparent'


    carbtn2.classList.add('next')
    let next = document.querySelector('.next')
    next.addEventListener("click" , function(){
        img2.classList.add('animate3')
        img3.classList.add('animate2')
        next.style.display='none'

        

    })

})

carbtn.addEventListener('click' , function(){
    img3.classList.add('animate4')

    
    // img2.classList.add('animate5')

    // img2.classList.add('animate6')

    
})
