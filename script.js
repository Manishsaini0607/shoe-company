const menu=document.querySelector('#menu')
const back=document.querySelector('#back')
const nav=document.querySelector('nav')

menu.addEventListener('click',(e)=>{
    e.stopPropagation()

    nav.style.right="16px"
    menu.style.display='none'
   
    
})

back.addEventListener('click',()=>{
    nav.style.right="-100%"
    menu.style.display='block'
})
 
nav.addEventListener("click",(e)=>{
    e.stopPropagation()
 })

window.addEventListener("click",()=>{
   nav.style.right="-100%"
    menu.style.display='block'
})