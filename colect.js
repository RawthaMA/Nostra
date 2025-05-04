let close = document.getElementById('close')
let message = document.querySelector('.message')
close.addEventListener("click", function () {
    message.style.display = 'none'
})

let menuIcon = document.querySelector('.menuIcon')
let sidenav = document.querySelector('.side-nav')
menuIcon.addEventListener("click", function () {
    sidenav.style.left = '0'
    sidenav.style.transition = '1s'
})

let side_close = document.querySelector('.side-close')
side_close.addEventListener("click", function () {
    sidenav.style.left = '-80%'
})

// filterr sectionn ---> 1

let women = document.getElementById('women')
let men = document.getElementById('men')
let kids = document.getElementById('kids')
let all = document.getElementById('all')
let con22 = document.querySelector('.container22')


men.addEventListener("click" , function(){
    wsection.style.display="none"
    ksection.style.display="none"
    msection.style.display="block"

})
women.addEventListener("click" , function(){
    msection.style.display="none"
    ksection.style.display="none"
    wsection.style.display="block"

})
kids.addEventListener("click" , function(){
    msection.style.display="none"
    wsection.style.display="none"
    ksection.style.display="block"

})
all.addEventListener("click" , function(){
    wsection.style.display="block"
    ksection.style.display="block"
    msection.style.display="block"

    
})

// let kitems = document.querySelector('.kids-items')
// let witems = document.querySelector('.womens-items')
// let mitems = document.querySelector('.mens-items')
// let sideCon = document.querySelector('.side-container')
// men.addEventListener("click", function () {
//     mitems.classList.toggle('open');

// })


// women.addEventListener('click', function () {
//     witems.classList.toggle('open');

// });

// kids.addEventListener('click', function () {
//     kitems.classList.toggle('open');

// });



// let btn2 = document.getElementById('filter1')
// btn2.addEventListener("click", function () {
//     mitems.classList.toggle('open');
// })

// search filter js starts here


let search = document.querySelector('.searcher');
let allImgFrames = document.querySelectorAll('.arrival1 .img-frame');
let container = document.querySelector('.container')

search.addEventListener('input', function () {
    let searchTerm = search.value.toUpperCase();

    allImgFrames.forEach(function (item) {
        let h4 = item.querySelector('h4');
        if (h4 && h4.textContent.toUpperCase().includes(searchTerm)) {

            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});



let btn11 = document.getElementById('filter1')
let btn22= document.getElementById('filter2')
let btn3 = document.getElementById('filter3')
let btn4 = document.getElementById('filter4')
let msection =document.querySelector('.males_dress')
let ksection =document.querySelector('.kids_dress')
let wsection =document.querySelector('.womens_dress')

btn11.addEventListener("click" , function(){
    wsection.style.display="none"
    ksection.style.display="none"
    msection.style.display="block"

})
btn22.addEventListener("click" , function(){
    msection.style.display="none"
    ksection.style.display="none"
    wsection.style.display="block"

})
btn3.addEventListener("click" , function(){
    msection.style.display="none"
    wsection.style.display="none"
    ksection.style.display="block"

})
btn4.addEventListener("click" , function(){
    wsection.style.display="block"
    ksection.style.display="block"
    msection.style.display="block"
})
