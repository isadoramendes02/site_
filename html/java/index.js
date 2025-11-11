var menuIcon = document.querySelector('.menu-ícon');
var ul= document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{

    if (ul.classList.contains('ativo')) {
        ul.classList.remove('ativo');
        document.querySelector('.menu-ícon img').src = 'img//menubranco.png';
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-ícon img').src = 'img//x.png';
    }

})