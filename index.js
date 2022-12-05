let list=document.querySelectorAll('.navigation li');

function activeLink(){
    list.forEach(element => {
        element.classList.remove('hovered');
        this.classList.add('hovered');

    });
}


list.forEach((element)=>element.addEventListener('mouseover',activeLink));


// menu toggle
let togglee=document.querySelector('.toggle');
let main=document.querySelector('.main');
let navigation=document.querySelector('.navigation');


togglee.onclick=function(){
    navigation.classList.toggle('active');
    main.classList.toggle('active');
}

// *************************
// modal close when click wendow
window.onclick = function(event) {
    if (event.target == main) {
        navigation.classList.remove('active');
        main.classList.remove('active');
    }
  }








