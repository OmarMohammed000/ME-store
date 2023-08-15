const Himg = document.querySelectorAll('.img-hover  img ')
const cimg= document.querySelector('.img-continer');
window.addEventListener('DOMContentLoaded', ()=>{
 Himg[0].parentElement.classList.add('active');
})
Himg.forEach((image) =>{
    image.addEventListener('click',()=>{
        cimg.querySelector('img').src=image.src
      
        restActiveimg();
        image.classList.add('active');
    })
})
function restActiveimg(){
    Himg.forEach((img)=>{
        img.classList.remove('active')
    })
}