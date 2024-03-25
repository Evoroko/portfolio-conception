<template>
    <Transition name="fade">
        <div class="gallery" v-if="displayedImg">
            <button class="gallery__close" @click="hideGallery()">✖</button>
            <button class="gallery__change gallery__change--next" @click="nextImage()">❯</button>
            <button class="gallery__change gallery__change--prev" @click="prevImage()">❮</button>
            
            
            <div v-for="(img, index) of props.imgList">
                <Transition :name="slideDirection">
                    <img
                        v-if="img.type !== 'video' && index === activeIndex"
                        :src="`./assets/${img.name}@1x.webp`"
                        :srcset="`./assets/${img.name}@1x.webp 1x, ./assets/${img.name}@2x.webp 2x`"
                        
                        class="gallery__img"
                        
                        :alt="img.alt"
                    >
                </Transition>
                
                <Transition :name="slideDirection">
                    <video
                        v-if="img.type == 'video'&& index === activeIndex"
                        class="gallery__img gallery__img--video"
                        :src="`./assets/${img.video}`"
                        controls
                    ></video>
                </Transition>
            </div>
            
            
            <ul class="space16 gallery__list">
                <li
                    v-for="(img, index) of props.imgList"
                    :class="{'galleryMin__video': img.type == 'video', 'galleryMin--active': index === activeIndex}"
                    @click="otherImage(index)"
                >
                    <img 
                        :src="`./assets/${img.name}@1x.webp`"
                        :srcset="`./assets/${img.name}@1x.webp 1x, ./assets/${img.name}@2x.webp 2x`"                    
                        :alt="img.alt">
                </li>

            </ul>
        </div>
    </Transition>

    <ul class="m-space16 galleryMin"  :class="{'galleryMin--full': props.fullGallery }, props.classSup">
        <li
            :class="{'galleryMin__video': img.type == 'video'}"
            class="galleryMin__el"
            v-for="(img, index) of props.imgList"
            @click="activeIndex = index; showImage($event);"
        >
            <img :src="`./assets/${img.name}@1x.webp`"
                :srcset="`./assets/${img.name}@1x.webp 1x, ./assets/${img.name}@2x.webp 2x`"  
                :alt="img.alt">
        </li>
    </ul>
    
</template>


<style lang="scss">

.gallery{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: #000000da;

    &__img{
        width: 100%;
        object-fit: contain;
        max-height: 80vh;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);

        &--enter-from-right{
            animation: enter-from-right-image .3s forwards ease;
        }

        &--video{
            height: 60vw;

            @media (min-width: 992px) {
                width: 80vw;
            }
        }
    }

    &__list{
        position: fixed;
        padding: 16px;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: 80px;
        box-sizing: border-box;
        gap: 8px;
        animation: slide-from-bottom 0.5s ease forwards;

        @media (min-width: 992px) {
            height: 100px;
        }

        & > * {
            border: 2px solid transparent;
            cursor: pointer;
        }

        img{
            height: 100%;
            object-fit: cover;
            object-position: center;
            max-height: 100%;
            width: 100%;
        }
    }

    &__close{
        position: fixed;
        top: 8px;
        right: 8px;
        background: none;
        color: var(--c-white);
        border: none;
        font-size: 25px;
        cursor: pointer;
        padding: 8px;
    }

    &__change{
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        z-index: 10;
        right: 8px;
        background: none;
        color: var(--c-white);
        border: none;
        font-size: 25px;
        cursor: pointer;
        padding: 8px;
        filter: drop-shadow(0px 0px 5px #0000009c);
        animation: slide-from-right-arrow 0.9s ease forwards;

        &--prev{
            right: auto;
            left: 8px;
            animation: slide-from-left-arrow 0.9s ease forwards;
        }

        @media (min-width: 992px) {
            right: 16px;

            &--prev{
                right: auto;
                left: 16px;
            }
        }
    }
}

.galleryMin{

    &__el{
        cursor: zoom-in;
        @media (min-width: 992px) {
            box-shadow: 0px 0px 17.9px 0px var(--c-blue-deep);
            overflow: hidden;

            img{

                transform: scale(1.1);
                transition: .2s;
            }
            
            &:hover{
                img{
                    transform: scale(1);
                }
            }
        }
    }
    

    @media (min-width: 500px) {
        flex-direction: row;
    }
    @media (min-width: 992px) {
        display: flex;
        gap: 12px;
    }

    img{
        width: 100%;
        height: auto;
        object-fit: cover;

        @media (min-width: 992px) {
            height: 100%;
        }
    }

    &--full{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
        grid-auto-flow: row dense;
        @media (min-width: 992px){
            gap: 8px;
        }

        .galleryMin__el:nth-of-type(2n+1){
            grid-column: span 2;
        }
        
        .galleryMin__el:last-of-type{
            grid-column: span 2;
        }

        .galleryMin__el{
            @media (min-width: 992px) {
                box-shadow: none;
                height: 240px;
            }
            
        }

        img{
            height: 100%;
            min-height: 240px;
            max-height: 320px;
            object-fit: cover;
            
        }

        @media (min-width: 600px) {
            grid-template-columns: 1fr 1fr 1fr;

            .galleryMin__video::after{
                background-size: 10%;
            }
            .galleryMin__el:last-of-type{
                grid-column: span 1;
            }
        }

        @media (min-width: 700px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            
            .galleryMin__el:last-of-type{
                grid-column: span 2;
            }
            
        }
        @media (min-width: 800px) {
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
            .galleryMin__el:last-of-type{
                grid-column: span 1;
            }
        }
        @media (min-width: 992px) {
            grid-template-columns: repeat(12, 1fr);
            grid-column-gap: 8px;

            .galleryMin__el:nth-of-type(2n+1){
                grid-column: span 3;
            }
            .galleryMin__el:nth-of-type(2n){
                grid-column: span 2;
            }
            .galleryMin__el:last-of-type{
                grid-column: span 1;
            }
        }
    }

    &__video{
        position: relative;

            &::after{
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background-color: #00000080;
                background-image: url(../assets/play-btn.svg);
                background-repeat: no-repeat;
                background-position: center;
                background-size: 20%;
            }
    }

    &--active{
        border: 2px solid white;
    }
}


// Transitions & Animations
.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-active .gallery__img{
    animation: slide-from-bottom-main .5s ease both;
}


.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

@keyframes slide-from-bottom-main {
    0% {
        opacity: 0;
        transform: translateY(0%) translateX(-50%);
    }
    100% {
        opacity: 1;
        transform: translateY(-50%) translateX(-50%);
    }
}

@keyframes slide-from-right-arrow {
    0% {
        transform: translateX(100%) translateY(-50%);
    }
    100% {
        transform: translateX(0%) translateY(-50%);
    }
}
@keyframes slide-from-left-arrow {
    0% {
        transform: translateX(-100%) translateY(-50%);
    }
    100% {
        transform: translateX(0%) translateY(-50%);
    }
}
@keyframes enter-from-left-image {
    0% {
        transform: translateX(-100%) translateY(-50%);
        opacity: 0;
    }
    100% {
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
    }
}
@keyframes enter-from-right-image {
    0% {
        transform: translateX(0%) translateY(-50%);
        opacity: 0;
    }
    100% {
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
    }
}

.slide-right-enter-active{
  animation: enter-from-right-image 0.5s forwards;
}
.slide-right-leave-active {
  animation: enter-from-left-image 0.2s reverse ease-in;
}

.slide-right-enter-from,
.slide-right-leave-to {
    opacity: 0;
}

.slide-left-enter-active{
  animation: enter-from-left-image 0.5s forwards;
}
.slide-left-leave-active {
  animation: enter-from-right-image 0.2s reverse ease-in;
}

.slide-left-enter-from,
.slide-left-leave-to {
    opacity: 0;
}

</style>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    imgList: {
        type: Array,
        required: true
    },
    fullGallery: {
        type: Boolean,
        required: false
    },
    classSup: {
        type: String,
        required: false
    }
})

const displayedImg = ref(false);
const activeIndex = ref(0);
const slideDirection = ref('slide-right');


const numOfPics = props.imgList.length;

const nextImage = () => {
    if(activeIndex.value < numOfPics - 1){
        activeIndex.value += 1;
    }else{
        activeIndex.value = 0;
    }
    slideDirection.value = "slide-right";
}
const prevImage = () => {
    if(activeIndex.value == 0){
        activeIndex.value = numOfPics - 1;
    }else{
        activeIndex.value -= 1;
    }
    slideDirection.value = "slide-left";
}
const otherImage = (index) => {
    if(index < activeIndex.value){
        slideDirection.value = "slide-left";
    }else{
        slideDirection.value = "slide-right";
    }
    activeIndex.value = index;
}

const changeImageKeydown = (e) => {
    if(e.key == 'ArrowRight'){
        nextImage();
    }else if(e.key == 'ArrowLeft'){
        prevImage();
    }else if (e.key == 'Escape'){
        hideGallery();
    }
}


const showImage = (e) => {
    displayedImg.value = true;
    document.addEventListener('keydown', changeImageKeydown);
}

const hideGallery = () => {
    displayedImg.value = false;
    document.removeEventListener('keydown', changeImageKeydown);
}

</script>