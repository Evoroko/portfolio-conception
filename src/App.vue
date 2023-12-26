<script setup>
import VButton from './components/VButton.vue'
import VTag from './components/VTag.vue'
import VSkillBox from './components/VSkillBox.vue'
import VGalaxyCanvas from './components/VGalaxyCanvas.vue'
import VProject from './components/VProject.vue'
import VGallery from './components/VGallery.vue'
</script>

<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->

  <header>
    <ul>
      <li><a href="#">Linkedin</a></li>
      <li><a href="mailto:nellmaissin@gmail.com">Email</a></li>
    </ul>
  </header>

  <main>
    <section class="topSection">
      <h1>Evo</h1>
      <VGalaxyCanvas/>
      <div class="topSection__logo">
        <img src="./assets/logo.svg" alt="logo Evo">
      </div>
      <p>Hi! I’m Evo, a <span class="txt--highlight">Transmedia Web Design</span> graduate currently pursuing a Master’s degree in <span class="txt--highlight">Transmedia Architecture</span> at the Haute École Albert Jacquard.</p>
      <ul class="tags">
        <VTag>ux / ui design</VTag>
        <VTag>web dev</VTag>
        <VTag>narrative writing</VTag>
        <VTag>illustrations</VTag>
        <VTag>motion design</VTag>
        <VTag>crafting</VTag>
      </ul>
      <p class="topSection__scroll">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.45703 17.4853L9.28187 17.1261C7.53268 13.5395 4.59661 10.6685 0.971751 9M9.45703 17.4853L9.52304 17.3409C11.2205 13.6284 14.2141 10.6626 17.9423 9M9.45703 17.4853L9.35824 1.47659" stroke="#FDFDFD"/>
        </svg>
        <span>scroll</span>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.45703 17.4853L9.28187 17.1261C7.53268 13.5395 4.59661 10.6685 0.971751 9M9.45703 17.4853L9.52304 17.3409C11.2205 13.6284 14.2141 10.6626 17.9423 9M9.45703 17.4853L9.35824 1.47659" stroke="#FDFDFD"/>
        </svg>
      </p>
    </section>

    <section class="section">
      <div class="content m-space64">
        <div class="profile m-space32">
          <div class="profile__img">
            <img src="./assets/profile-pic@1x.webp" alt="" srcset="./assets/profile-pic@1x.webp 1x, ./assets/profile-pic@2x.webp 2x">
          </div>
          <h2 class="title title--big title--who">Who am I?</h2>
          <p>I’m Evo, also known as Nell Maissin, a 21 year old graduate in Web Design. I enjoy experimenting with code in order to make <span class="txt--highlight">visually interesting experiences</span>, as well as writing stories and creating universes which reflect upon spiritual and psychological questions. My strength lies in my <span class="txt--highlight">adaptability</span>, my ability to quickly <span class="txt--highlight">handle tasks by myself</span> and my attention to <span class="txt--highlight">detail</span>.</p>
        </div>
        <ul class="skills m-space32">
          <VSkillBox
            :title="'Vue.js'"
            :text="'I learnt Vue.js 3 Composition mostly by myself by integrating it into personal projects.'"
            :svg="'vue'"
          />
          <VSkillBox
            :title="'Three.js'"
            :text="'I followed Bruno Simon’s “Three.js Journey” and used what I had learnt in generative design experiments and in web games.'"
            :svg="'three'"
          />
          <VSkillBox
            :title="'Adobe suite'"
            :text="'I enjoy working with After Effects and I’m comfortable with Photoshop, Illustrator and Premiere Pro.'"
            :svg="'adobe'"
          />
          <VSkillBox
            :title="'Figma'"
            :text="'I have been using Figma for 2+ years and earned some professional experience by working with it in a design team during my 3 months internship at Neopixl.'"
            :svg="'figma'"
          />
        </ul>
      </div>
    </section>

    <section class="section">
      <h2 class="title title--huge">Projects</h2>
      <ul class="m-space128">
        <VProject
          :title="'BOSTROM'"
          :description="'Graduation work. The point & click visual novel in which YOU have the power to change the story.'"
          :link="'http://nell-maissin.be/projets/tfe'"
          :linkCS="'#'"
          :img="'project-bostrom'"
          :imgList="[
              {
                  name: 'project-img-bostrom-1',
                  type: 'video',
                  video: 'project-video-bostrom.mp4'
              },
              {
                  name: 'project-img-bostrom-2',
                  type: 'image'
              },
              {
                  name: 'project-img-bostrom-3',
                  type: 'image'
              }
          ]"
          :tags="[
            'vue.js',
            'three.js',
            'illustrations',
            'narrative design'
          ]"
        />
        <VProject
          :title="'The Pixel Museum'"
          :description="'A project made by a team of six. The goal was to make an interactive museum in which people would draw on parts of the frames in order to make artworks together.'"
          :link="'https://melvyn-ulens.be/projets/ilab/'"
          :linkCS="'#'"
          :img="'project-ilab'"
          :imgList="[
              {
                  name: 'project-img-ilab-1',
                  type: 'video',
                  video: 'project-video-ilab.mp4'
              },
              {
                  name: 'project-img-ilab-2',
                  type: 'image'
              },
              {
                  name: 'project-img-ilab-3',
                  type: 'image'
              }
          ]"
          :tags="[
            'php',
            'pixel art (background)',
            'html canvas',
            'js'
          ]"
        />
        <VProject
          :title="'CommiMe'"
          :description="'Discover the prototype of a brand new platform for digital art commissions.'"
          :link="'http://nell-maissin.be/projets/tfa'"
          :linkCS="'http://nell-maissin.be/projets/tfa/case-study.html'"
          :img="'project-tfa'"
          :imgList="[
              {
                  name: 'project-img-tfa-1',
                  type: 'image',
              },
              {
                  name: 'project-img-tfa-2',
                  type: 'image'
              },
              {
                  name: 'project-img-tfa-3',
                  type: 'image'
              }
          ]"
          :tags="[
            'greensock',
            'ux',
            'ui',
            'figma'
          ]"
        />
      </ul>
    </section>

    <section class="section">
      <h2 class="title title--huge">Gallery</h2>
      <div class="content">
        <VGallery
          :imgList="[
            {
              name: 'gallery/commi-helio',
              type: 'image'
            },
            {
              name: 'gallery/commi-nime',
              type: 'image'
            },
            {
              name: 'gallery/commi-py',
              type: 'image'
            },
            {
              name: 'gallery/cover',
              type: 'video',
              video: 'gallery/cover-speedpaint.mp4'
            },
            {
              name: 'gallery/elyoflowers',
              type: 'image'
            },
            {
              name: 'gallery/illu-nova',
              type: 'image'
            },
            {
              name: 'gallery/mnemosyne',
              type: 'video',
              video: 'gallery/mnemosyne-video.mp4'
            },
          ]"
          :fullGallery="true"
        />
      </div>
    </section>

    <section>
      <h2 class="title title--huge">Let's work together!</h2>
      <VButton
        :text="'nellmaissin@gmail.com'"
        :link="'mailto:nellmaissin@gmail.be'"
        :arrow="false"
      />
    </section>
  </main>
  
</template>

<style scoped>
</style>
