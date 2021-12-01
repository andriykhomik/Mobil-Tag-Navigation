const images = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

listItems.forEach((li, idx) => {

    li.addEventListener('click', ()=> {
        removeClass();
        addClasses(li, idx);
    })
})


function removeClass() {

    images.forEach((image, i)=> {
        image.classList.remove('show');
        listItems[i].classList.remove ('active');
    })
}


function addClasses(li, idx){

    listItems[idx].classList.add('active');
    images[idx].classList.add('show');
}
