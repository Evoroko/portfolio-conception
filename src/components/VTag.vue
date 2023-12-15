<template>
    <li class="tag">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.65686 0.34314L5.77364 0.582584C6.93976 2.97365 8.89714 4.88769 11.3137 5.99999C8.89714 7.1123 6.93976 9.02634 5.77364 11.4174L5.65686 11.6568L5.61285 11.5606C4.48123 9.08557 2.4855 7.10843 6.19888e-06 5.99999C2.4855 4.89156 4.48123 2.91442 5.61285 0.439393L5.65686 0.34314Z" fill="#FDFDFD"/>
        </svg>
        <span><slot/></span>

    </li>
    

</template>

<style lang="scss">

.tag{
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    background-color: var(--c-blue-deep);
    width: max-content;
    padding: 4px 8px;
    text-transform: lowercase;
}

</style>

<script setup>

</script>