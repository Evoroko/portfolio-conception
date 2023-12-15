<template>
    <a class="button" :href="props.link">
        <span class="button__text">{{ text }}</span>
        <svg class="button__arrow" v-if="props.arrow == true" width="12" height="12" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L12.8699 1.37783C11.5706 5.1508 11.6166 9.25706 13 13M13 1L12.8512 1.05541C9.0258 2.4803 4.81194 2.4606 1 0.999999M13 1L1.75 12.3897"/>
        </svg>
        <div class="button__hover"></div>
    </a>
</template>

<style lang="scss">
.button{
  background-color: transparent;
  color: var(--c-white);
  border: solid 1px var(--c-white);
  border-radius: 50px;
  padding: 12px 24px;
  width: fit-content;
  position: relative;
  overflow: hidden;
  transition: .4s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  &__text{
    letter-spacing: 2.4px;
    text-transform: uppercase;
  }

  &__arrow path{
    stroke: var(--c-white);
    transition: .4s;
  }

  &__hover{
    width: 30px;
    height: 30px;
    background-color: var(--c-white);
    border-radius: 50%;
    position: absolute;
    bottom: -20px;
    left: -20px;
    transition: .3s;
    z-index: -1;
    transform-origin: center left;
  }

  &:hover{
    color: var(--c-blue-light);
    
    path{
        stroke: var(--c-blue-light);
    }

    .button__hover{
        transform: scale(13);
        transition: .5s;
    }
  }
}
</style>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: false
    },
    link: {
        type: String,
        required: false
    },
    arrow: {
        type: Boolean,
        required: false
    },
})
</script>