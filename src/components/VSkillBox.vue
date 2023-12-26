<template>
    <li class="skill">
        <div class="skill__svg" :class="'skill__svg--' + props.svg"></div>
        <!-- <img :src="props.img" alt=""> -->
        <h3 class="title title--small">{{ title }}</h3>
        <p>{{ text }}</p>
    </li>
</template>

<style scoped lang="scss">
.skill{
    border-top-width: 1px;
    border-top-style: solid;
    border-image: linear-gradient(90deg, #ECD5A3, #ECD5A3 39%, #ECD5A300 40%, #ECD5A300 60%, #ECD5A3 61%, #ECD5A3) 30;
    background: linear-gradient(180deg, #202B4B 0%, rgba(32, 43, 75, 0.00) 100%);
    display: flex;
    padding: 64px 32px 32px 32px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    position: relative;

    &__svg{
        position: absolute;
        width: 64px;
        height: 64px;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        top: -16px;

        &--adobe{
            background-image: url(../assets/adobe.svg);
        }
        &--vue{
            background-image: url(../assets/vue.svg);
        }
        &--three{
            background-image: url(../assets/three.svg);
        }
        &--figma{
            background-image: url(../assets/figma.svg);
        }
    }
}
</style>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false
    },
    text: {
        type: String,
        required: false
    },
    svg: {
        type: String,
        required: false
    },
})
</script>