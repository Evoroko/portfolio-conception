<template>
    <div class="galaxycanvas__container">
        <canvas class="galaxycanvas galaxycanvas--hide"></canvas>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

class Circle{
    constructor(x, y, c){
        this.c = c;
        this.originalX = x;
        this.originalY = y;
        this.x = x;
        this.y = y;
        this.dx = (Math.random() - 0.5) / 50 + 0.01;
        this.dy = (Math.random() - 0.5) / 50 + 0.01;
        this.radius = Math.random() * 2 + 1;

        // this.radians = 0;
        this.radians = Math.random() * Math.PI * 2;
        this.radiusMove = Math.random() * (innerHeight + 100) + 50;

        this.generatePointPos();
    }

    draw(lastPoint){
        this.c.beginPath();
        this.c.strokeStyle = 'rgb(236, 213, 163, 0.5)';
        this.c.lineWidth = this.radius;
        this.c.moveTo(lastPoint.x, lastPoint.y);
        this.c.lineTo(this.x, this.y);
        this.c.stroke();
        this.c.closePath();
    }

    update(){
        const lastPoint = {
            x: this.x,
            y: this.y
        }
        this.radians += this.dx;
        this.generatePointPos();

        this.draw(lastPoint);
    }

    generatePointPos(){
        this.x = this.originalX + Math.cos(this.radians) * this.radiusMove;
        this.y = this.originalY + Math.sin(this.radians) * this.radiusMove;
    }
}





const generateCanvasContent = (c) => {
    let circleArray = [];

    for(let i = 0; i < 100; i++){
        let circle = new Circle(window.innerWidth / 2, window.innerHeight + 50, c);
        circleArray.push(circle);
    }

    let windowPreviousSize = {
        width: window.innerWidth,
        height: window.innerHeight
    }
    const animate = () => {
        requestAnimationFrame(animate)
        c.fillStyle = 'rgb(32, 43, 75, 0.05)';
        c.fillRect(0, 0, innerWidth, innerHeight);
        
        for(let circle of circleArray){
            circle.update();

            if(windowPreviousSize.width != window.innerWidth){
                circle.x = window.innerWidth / 2;
                circle.originalX = window.innerWidth / 2;
            }

            if(windowPreviousSize.width != window.innerWidth){
                circle.y = window.innerHeight + 50;
                circle.originalY = window.innerHeight + 50;
            }          
        }

        windowPreviousSize.width = window.innerWidth;
        windowPreviousSize.height = window.innerHeight;
    }

    animate();
}




onMounted(() => {
    let canvas = document.querySelector('.galaxycanvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let c = canvas.getContext('2d');

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setTimeout(() => {
            c.clearRect(0, 0, innerWidth, innerHeight);
        }, 100)
    })

    generateCanvasContent(c);

    
})

</script>


<style lang="scss">
.galaxycanvas{
    width: 100%;
    height: 100%;
    background-color: var(--c-blue-medium);
    z-index: -1;
    text-align: center;
    clip-path: circle(150% at 50% 100%); // canvas affiché
    transition: 1.5s;
    
    position: fixed;
    top: 0;
    left: 0;

    &__container{
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: -1;

        &::after{
            content: "";
            position: absolute;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            background: linear-gradient(180deg, rgb(48, 66, 102, 0.0) 50%, rgb(48, 66, 102) 100%);
        }
    }

    &--hide{
        transition: .5s;
        clip-path: circle(0% at 50% 100%); // canvas caché
    }
}
</style>