
window.addEventListener('keypress',function(event){ 
    let keyElement=document.querySelector("div[data-charcode='"+event.charCode.toString()+"']") ;
    let keyAudio=document.querySelector("audio[data-charcode='"+event.charCode.toString()+"']") ;
    if(keyElement){
        keyElement.classList.add('transition');
        keyAudio.play();
     }   
     const transition = document.querySelector('.transition');
    if(transition){
        transition.addEventListener('transitionend', () => {
            keyElement.classList.remove('transition');
        });
    }
});

    

