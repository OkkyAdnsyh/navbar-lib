// nav1 script
const navbar1 = document.querySelectorAll('#nav1 .nav-link');


navbar1.forEach(nav => {
    nav.addEventListener('click', function(){
        for(let i = 0 ; i < navbar1.length ; i++){

            navbar1[i].classList.remove('active')

        }

        this.classList.add('active')
    })
});
