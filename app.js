let burger = document.querySelector('.liste-nav .burger')
let liste_items = document.querySelector('.liste-items')
let first_section = document.querySelector('.first-section')

let slider = document.querySelectorAll('.slide')
let slider_btn = document.querySelectorAll('.select-button')


let index = 0

burger.addEventListener('click',()=>{
    if (burger.getAttribute('src')==="./images/icon-hamburger.svg")
    {
        burger.setAttribute('src','./images/icon-close.svg')
        liste_items.classList.add('active')
    }
    else
    {
        burger.setAttribute('src','./images/icon-hamburger.svg')
        liste_items.classList.remove('active')
    }
})

slider_btn.forEach(el=>{
    el.addEventListener('click',()=>{
        if (el.classList.contains('actived-btn')){
            return;
        }
        else
        {
            el.classList.add('actived-btn');
        }

        index = el.getAttribute('data-count')
        // console.log(parseInt(index))
        slider[parseInt(index)-1].classList.add('actived')

        for(i=0;i<slider_btn.length;i++)
        {
            if (slider_btn[i].getAttribute('data-count')!==index){
                slider_btn[i].classList.remove('actived-btn')
                slider[i].classList.remove('actived')
            }

        }

    })
    
})

