<template>
<li class="project" :class="{ 'project--right': props.rightSide == true }">
    <div class="project__circle"></div>
    <div class="project__img">
        <img :src="`./assets/${props.img}@1x.webp`" :alt="props.imgAlt" :srcset="`./assets/${props.img}@1x.webp 1x, ./assets/${props.img}@2x.webp 2x`">
    </div>
    <div class="content">
        <div class="project__content m-space32 d-space16 grid-start-01 grid-end-06">
            <h3 class="title title--big">{{ props.title }}</h3>
            <p>{{ props.description }}</p>
            <ul class="tags tags--left">
                <VTag v-for="tag of props.tags">{{ tag }}</VTag>
            </ul>
    
            <VGallery
                :imgList="props.imgList"
                :classSup="'project__min'"
            />
    
            <ul class="m-space16 project__links">
                <li>
                    <VButton
                        :text="'Visit'"
                        :link="props.link"
                        :arrow="true"
                        :wide="true"
                    />
                </li>
                <li>
                    <VButton
                        :text="'Case Study'"
                        :link="props.linkCS"
                        :arrow="true"
                        :wide="true"
                    />
                </li>
            </ul>
        </div>
    </div>
</li>
</template>


<style lang="scss">
.project{
    background: linear-gradient(180deg, rgba(32, 43, 75, 0.00) 0%, #202B4B 20%, #202B4B 99.77%);
    padding-bottom: 64px;


    @media (min-width: 992px){
        position: relative;
        border-top-width: 1px;
        border-top-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        padding-bottom: 0;
        border-image: linear-gradient(90deg, #ECD5A3, #ECD5A3 30%, #ECD5A300 50%) 30;
        background: linear-gradient(269deg, rgba(32, 43, 75, 0.00) 30%, #202B4B 52.46%, #202B4B 100%);
        
        &__circle{
            position: absolute;
            width: 100%;
            left: 50%;
            height: 950px;
            top: 50%;
            transform: translateY(-50%) translateX(-50%);
            overflow: hidden;
            
            &::after{
                content: "";
                position: absolute;
                top: 50%;
                transform: translateY(-50%) translateX(212px);
                border-radius: 50%;
                border: 1px solid var(--c-gold);
                width: 850px;
                height: 850px;
                box-sizing: border-box;
                right: calc(60vw - 600px);

                @media (min-width: 1200px){
                    right: calc(50vw - 600px);
                }
            }
        }
    }


    &__content{
        margin-top: -32px;
        position: relative;

        @media (min-width: 992px){
            margin-top: 0;
            padding: 128px 0;
            justify-content: center;
            // min-height: 480px; // maybe à retirer si le contenu devient assez haut
        }
    }

    &__links{
        @media (min-width: 992px){
            display: flex;
            flex-direction: row;
            gap: 16px;

            margin-top: 32px;
        }
    }

    @media (min-width: 992px){
        .tags{
            margin-top: 16px;
        }
    }



    &__img{
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        @media (min-width: 992px){
            justify-content: left;
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: calc(50% - 12px);
            height: 120%;
        }
        @media (min-width: 1200px){
            width: calc(50% - 112px);
        }

        img{
            border: 1px solid #ECD5A3;
            min-width: 120%;
            border-radius: 50%;
            border: 1px solid var(--c-gold);
            

            @media (min-width: 450px){
                min-width: 0;
                max-width: 500px;
            }

            @media (min-width: 992px){
                max-width: none;
                min-width: 700px;
                max-height: 650px;
                height: 100%;
                object-fit: cover;
                box-sizing: border-box;
            }
        }

        &::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49.9%, #202B4B 99.9%, #202B4B 100%);

            @media (min-width: 992px){
                background: none;
            }
        }
    }


    &__min{
        @media (min-width: 992px) {
            position: absolute;
            bottom: -96px;
            z-index: 15;
            right: calc(((-100vw + 13*16px) / 12) * 7 - (16px * 7));
            max-width: calc(((100vw - 14*16px) / 12) * 7 + (16px * 7));
        }
        @media (min-width: 1200px) {
            bottom: -32px;
            max-width: 795px;
            right: calc(((-1200px + 11*16px) / 12) * 7 - (16px * 7));
        }
    }
}

.project--right{
    @media (min-width: 992px) {
        border-image: linear-gradient(90deg, #ECD5A300 50%, #ECD5A3 80%) 30;
        background: linear-gradient(269deg, #202B4B 0%, #202B4B 40%, rgba(32, 43, 75, 0.00) 60%);
        text-align: right;

        .project__links{
            justify-content: flex-end;
        }

        .title--big{
            text-align: right;
        }

        .project__content{
            grid-column-start: 8;
            grid-column-end: -1;
        }

        .project__img{
            justify-content: right;
            left: 0;
        }

        .project__circle::after{
            transform: translateY(-50%) translateX(-212px);
            right: auto;
            left: calc(60vw - 600px);

            @media (min-width: 1200px){
                left: calc(50vw - 600px);
            }
        }

        .project__min{
            right: auto;
            left: calc(((-100vw + 13*16px) / 12) * 7 - (16px * 7));
            // max-width: calc(((100vw - 14*16px) / 12) * 7 + (16px * 7));

            @media (min-width: 1200px) {
                // max-width: 795px;
                left: calc(((-1200px + 11*16px) / 12) * 7 - (16px * 7));
            }
        }

        .tags{
            justify-content: end;
        }

    }
}
</style>


<script setup>
import VButton from './VButton.vue';
import VTag from './VTag.vue';
import VGallery from './VGallery.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    linkCS: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true
    },
    imgAlt: {
        type: String,
        required: true
    },
    imgList: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    rightSide: {
        type: Boolean,
        required: false
    }
})
</script>