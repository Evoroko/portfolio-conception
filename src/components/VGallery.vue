<template>
    <div class="gallery" v-if="displayedImg">
        <button class="gallery__close" @click="displayedImg = false">Close</button>
        
        <img
            :src="`src/assets/${img.name}@1x.webp`"
            v-for="(img, index) of props.imgList"
            class="gallery__img"
            :class="{ 'gallery__img--shown': index === activeIndex && img.type != 'video' }"
        >

        <video
            v-for="(img, index) of props.imgList"
            class="gallery__img gallery__img--video"
            :class="{ 'gallery__img--shown': index === activeIndex && img.type == 'video' }"
            :src="`src/assets/${img.video}`"
            controls
        >

        </video>
        
        <ul class="space16 gallery__list">
            <li
                v-for="(img, index) of props.imgList"
                :class="{'galleryMin__video': img.type == 'video', 'galleryMin--active': index === activeIndex}"
                @click="activeIndex = index"
            >
                <img :src="`src/assets/${img.name}@1x.webp`" alt="">
            </li>

        </ul>
    </div>

    <ul class="m-space16 galleryMin"  :class="{'galleryMin--full': props.fullGallery }">
        <li
            :class="{'galleryMin__video': img.type == 'video'}"
            v-for="(img, index) of props.imgList"
            @click="activeIndex = index; showImage($event);"
        >
            <img :src="`src/assets/${img.name}@1x.webp`" alt="">
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
        display: none;
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);


        &--shown{
            display: block;
        }

        &--video{
            height: 60vw;
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
        height: 100px;
        box-sizing: border-box;
        gap: 8px;

        & > * {
            border: 2px solid transparent;
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
        top: 16px;
        right: 16px;
    }
}

.galleryMin{

    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    &--full{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;

        img{
            height: 100%;
            object-fit: cover;
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

</style>


<script setup>
import { ref } from 'vue';

const props = defineProps({
    imgList: {
        type: Array,
        required: true
    },
    fullGallery: {
        type: Boolean,
        required: false
    }
})

const displayedImg = ref(false);
const activeIndex = ref(0);

const showImage = (e) => {
    displayedImg.value = true;
}

</script>