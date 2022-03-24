// window.onresize = function(){};

const menuanimate = () => {
    const root = document.querySelector(':root')
    const burger = document.querySelector('.viewbox-ico');

    burger.addEventListener('click',()=>{
        const nav = document.querySelector('.slide-menu'); 
        const line1 = document.querySelector('.line1');
        const line2 = document.querySelector('.line2');
        const line3 = document.querySelector('.line3');

        nav.classList.toggle('menu-active');
        line1.classList.toggle('cross')
        line2.classList.toggle('cross2')
        line3.classList.toggle('cross')
    })
   
};

menuanimate();
 // const line1 = document.querySelector('.line2');
 // console.log(line1.getTotalLength())



// -----------------------------------------------------------------------
