<template>
<li class="project">
    <div class="project__img">
        <img :src="`src/assets/${props.img}@1x.webp`" alt="" :srcset="`src/assets/${props.img}@1x.webp 1x, src/assets/${props.img}@1x.webp 2x`">
    </div>
    <div class="project__content content m-space32">
        <h3 class="title title--big">{{ props.title }}</h3>
        <p>{{ props.description }}</p>
        <ul class="tags tags--left">
            <VTag v-for="tag of props.tags">{{ tag }}</VTag>
        </ul>

        <VGallery
            :imgList="props.imgList"
        />

        <ul class="m-space16">
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
</li>
</template>


<style lang="scss">
.project{
    background: linear-gradient(180deg, rgba(32, 43, 75, 0.00) 0%, #202B4B 20%, #202B4B 99.77%);
    padding-bottom: 64px;

    &__content{
        margin-top: -32px;
        position: relative;
    }

    &__img{
        overflow: hidden;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        img{
            border: 1px solid #ECD5A3;
            min-width: 120%;
            border-radius: 50%;
            border: 1px solid var(--c-gold);
        }

        &::after{
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 49.9%, #202B4B 99.9%, #202B4B 100%);
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
    imgList: {
        type: Array,
        required: true
    },
    tags: {
        type: Array,
        required: true
    }
})
</script>