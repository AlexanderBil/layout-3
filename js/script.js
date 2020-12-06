$(document).ready (function(){    // инициализация jquary
    $('.box-1-slider').slick({    // включаем слайдер
        fade:true,                // для отображения 1-й картинки(плавно заменяются)
        arrows:false,             // стрелки      
        dots:false,               // точки
        adaptiveHeight:true,      // подстраивает высоту слайда под картинку (slick-track - нужн одобавить свойство align-items:flex-start)
        slidesToShow: 1,          // количество показуемых слайдов
        slidesToScroll: 1,        // количество прокручиваемых слайдов
        speed: 1000,              // скорость пролистывания слайдов
        easing: 'easeOutBack',    // тип анимации прокрутки
        infinite:true,            // определение бесконечной прокрутки
        initialSlide: 0,          // номер стартового слайда
        autoplay: true,           // автоматическая прокрутка слайдов
        autoplaySpeed:2000,       // скорость автоматического пролистывания
        pauseOnFocus:true,        // остановить слайдер при нажатии мыши
        pauseOnHover:false,       // остановить слайдер при наведении мыши
        pauseOnDotsHover:false,   // остановить слайдер при наведении на точки
        draggable:true,           // запрещает слайдить мышкой
        swipe:true,               // запрещает свайпать на тач скрине
        touchTreshold:5,          // расстояния просвайпивания пальцем для переключения
        touchMove:true,           // позволяет/запрещает плавно перелистывать при зажатой картинке       
        waitForAnimate:false,     // перелистываем слайдер не дожидаясь окончания анимации
        centerMode:false,         // центральный слайд становиться по центру екрана
        variableWidth: false,               
    });
})

//---------------Форма--------------------

document.querySelector('.button-a').onclick = valid;

function valid(form){
    form = document.getElementById('formstart');
let fail = false;
let name = form.name.value;
let email = form.email.value
let regMail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

if(name == '' || name == ' ')
fail = 'Вы не ввели имя';

else if (regMail.test(email) == false)
fail = 'Вы ввели Email неправильно';

if(fail){
    alert(fail)
}
else
    window.location = "http://google.com"; 

}

//---------------Меню бургер------------------

document.querySelector('.button-mob-menu').onclick = togle;

function togle(){
    document.querySelector('.button-mob-menu-polosa').classList.toggle('active-menu'); // анимация крестика
    document.querySelector('.mob-menu').classList.toggle('active'); // выдвижение меню
}

document.querySelector('.mob-menu').onclick = togle2; // для задвижения меню по клику на него и анимация крестика

function togle2(){
   let menu =  document.querySelector('.mob-menu');
    if(menu.classList.contains('active')){
       menu.classList.remove('active')
    }
    document.querySelector('.button-mob-menu-polosa').classList.toggle('active-menu');
}


