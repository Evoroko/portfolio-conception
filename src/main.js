import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

createApp(App).mount('#app')

const bottomSection = document.querySelector('.bottomSection')
const topSection = document.querySelector('.topSection')
const galaxyCanvas = document.querySelector('.galaxycanvas')

setTimeout(() => {
    galaxyCanvas.classList.remove('galaxycanvas--hide');
}, 10)

document.addEventListener('scroll', () => {

    if(bottomSection.getBoundingClientRect().top > 1 && topSection.getBoundingClientRect().bottom < 0){
        galaxyCanvas.classList.add('galaxycanvas--hide');
    }else{
        galaxyCanvas.classList.remove('galaxycanvas--hide');
    }
})



let mousePos = {
    x: 0,
    y: 0
}

document.addEventListener('mousemove', (e) => {
    mouseMovementUpdate(e);
    movingTopSection();

    const pointerStyle = getComputedStyle(e.target).cursor;
    const pointerOutside = document.querySelector('.cursor__outer')
    

    gsap.to('.cursor__container', {
        x: (mousePos.x - 48/2),
        y: (mousePos.y - 48/2),
        scale: 1
    })
    gsap.to('.cursor__center', {
        x: (mousePos.x - 8/2),
        y: (mousePos.y - 8/2),
        duration: 0
    })

    if(pointerStyle == 'pointer' || pointerStyle == 'zoom-in'){
        pointerOutside.classList.add('cursor__outer--active');
    }else{
        pointerOutside.classList.remove('cursor__outer--active');
    }
})

const mouseMovementUpdate = (e) => {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
}


// Animations GSAP

gsap.from('.linkMenu__el', {
    duration: 0.3,
    x: -100,
    opacity: 0,
    stagger: 0.1,
    delay: 1.5
})

gsap.from('.topSection__logo', {
    duration: 0.3,
    y: -200,
    opacity: 0
})

gsap.from('.topSection__logo--anim img', {
    duration: 0.5,
    y: '120%',
    delay: 0.3
})

gsap.from('.topSection__text', {
    duration: 0.5,
    y: -50,
    opacity: 0,
    delay: 0.7
})

gsap.from('.topSection .tags > *', {
    duration: 0.3,
    x: -20,
    opacity: 0,
    stagger: 0.1,
    delay: 0.9
})
gsap.from('.topSection__scroll', {
    duration: 0.6,
    y: 50,
    opacity: 0,
    delay: 1.2
})

const movingTopSection = () => {
    gsap.to('.topSection', {
        duration: 0.05,
        y: (- mousePos.y / 80),
        x: (- mousePos.x / 80)
    })
}

gsap.from('.profile__img', {
    duration: 0.3,
    y: 50,
    opacity: 0,
    scrollTrigger: {
        trigger: '.profile__img',
        start: 'top 80%'
    }
})

gsap.from('.skill', {
    x: -40,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
    scrollTrigger: {
        trigger: '.skill',
        start: 'top 80%'
    }
})

gsap.from('.galleryMin--full .galleryMin__el', {
    y: 20,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.galleryMin--full',
        start: 'top 80%'
    }
})

const hugeTitles = document.querySelectorAll('.title--huge');

for(let hugeTitle of hugeTitles){
    gsap.from(hugeTitle, {
        y: '100%',
        duration: 0.5,
        stagger: 0.2,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: hugeTitle,
            start: 'top bottom'
        }
    })
}

gsap.from('.bottomSection .button', {
    y: 50,
    opacity: 0,
    delay: 0.2,
    scrollTrigger: {
        trigger: '.bottomSection',
        start: 'top middle'
    }
})

if(window.innerWidth > 992){

    gsap.from('.profile__txt', {
        duration: 0.5,
        y: -50,
        opacity: 0,
        delay: 0.2,
        scrollTrigger: {
            trigger: '.profile__txt',
            start: 'top 80%' // when the *trigger* reaches *viewport*
        }
    })
    gsap.from('.profile .title', {
        duration: 0.3,
        x: 50,
        opacity: 0,
        delay: 0.6,
        scrollTrigger: {
            trigger: '.profile__txt',
            start: 'top 80%'
        }
    })
    gsap.from('.profile__txt p', {
        duration: 0.3,
        x: -50,
        opacity: 0,
        delay: 0.7,
        scrollTrigger: {
            trigger: '.profile__txt',
            start: 'top 80%'
        }
    })

    // Projects

    const projects = document.querySelectorAll('.project');
    
    for(let project of projects){
        
        gsap.from(project.querySelector('.project__circle'), {
            duration: 1,
            scale: 0,
            opacity: 0,
            scrollTrigger: {
                trigger: project,
                start: 'top 80%'
            }
        })

        gsap.from(project.querySelectorAll('.project__content > *'), {
            duration: 0.6,
            x: -200,
            opacity: 0,
            stagger: 0.1,
            scrollTrigger: {
                trigger: project,
                start: 'top 80%'
            }
        })

        if(project.classList.contains('project--right')){
            gsap.from(project.querySelector('.project__img img'), {
                duration: 0.6,
                x: -700,
                opacity: 0,
                scrollTrigger: {
                    trigger: project,
                    start: 'top 80%'
                }
            })
        }else{
            gsap.from(project.querySelector('.project__img img'), {
                duration: 0.6,
                x: 700,
                opacity: 0,
                scrollTrigger: {
                    trigger: project,
                    start: 'top 80%'
                }
            })
        }
    }

}else{
    gsap.from('.profile__txt', {
        duration: 0.3,
        x: -50,
        opacity: 0,
        scrollTrigger: {
            trigger: '.profile__txt',
            start: 'top 80%'
        }
    })

    const contents = document.querySelectorAll('.content');

    // for(let content of contents){
    //     gsap.from(content, {
    //         x: -200,
    //         opacity: 0,
    //         scrollTrigger: {
    //             trigger: content,
    //             start: 'top 80%'
    //         }
    //     })
    // }
}
