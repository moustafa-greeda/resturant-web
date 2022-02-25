let icon = document.querySelector('.fa-bars');
let nav = document.querySelector('.navbar');

icon.onclick = () => {
    nav.classList.toggle("clip");
}
/************** button scroll to top ***************/
let ss = document.querySelector('.btn');

window.onscroll = function(){
    if(window.scrollY >= 500){
        ss.style.display = "block";
    }else{
        ss.style.display = "none";
    }
}

ss.onclick = ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

/*************** start slider *******************/
let slides = document.querySelector('#home').children;
let nextSlide = document.querySelector('#next');
let prevSlide = document.querySelector('#prev');
let totalSlider = slides.length;
let index = 0;

nextSlide.onclick = function(){
  next("next");
}
prevSlide.onclick = function(){
  next("prev");
}

function next(descreption){
  if(descreption == "next"){
    index++;
    if(index == totalSlider){
      index = 0;
    }
  }

  else{
    if(index == 0){
      index = totalSlider - 1; 
    }else{  index --;}
  }

  for(let i=0 ; i< slides.length ; i++){
    slides[i].classList.remove('activeSlide');
  }
  slides[index].classList.add('activeSlide');
}
setInterval(() => {
  nextSlide.click();

}, 3000);


