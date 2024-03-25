<script setup>
import VButton from './components/VButton.vue'
import VTag from './components/VTag.vue'
import VSkillBox from './components/VSkillBox.vue'
import VGalaxyCanvas from './components/VGalaxyCanvas.vue'
import VProject from './components/VProject.vue'
import VGallery from './components/VGallery.vue'
</script>

<template>
  <div class="cursor">
    <div class="cursor__container">
      <div class="cursor__outer"></div>
    </div>
    <div class="cursor__center"></div>
  </div>

  <header>
    <ul class="linkMenu">
      <li><a href="https://www.linkedin.com/in/nell-maissin-13ba33243/" target="_blank" class="linkMenu__el linkMenu__el--linkedin"><span class="linkMenu__txt">LinkedIn</span></a></li>
      <li><a href="mailto:nellmaissin@gmail.com" class="linkMenu__el linkMenu__el--mail"><span class="linkMenu__txt">nellmaissin@gmail.com</span></a></li>
    </ul>
  </header>

  <main>
    <section>
      <VGalaxyCanvas/>
      
      <div class="topSection__container">
        <div class="topSection grid-start-04 grid-end-10">
          <h1>Evo</h1>
          <div class="topSection__logo">
            <div class="topSection__logo--anim">
              <img src="./assets/logo.svg" alt="logo Evo">
            </div>
          </div>
          <p class="topSection__text">Hi! I’m Evo, a <span class="txt--highlight">Transmedia Web Design</span> graduate currently pursuing a Master’s degree in <span class="txt--highlight">Transmedia Architecture</span> at the Haute École Albert Jacquard.</p>
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
        </div>
        </div>
      
    </section>

    <div class="middleSection">
      <section class="section">
        <div class="content content--first m-space64 d-space96">
          <div class="profile m-space32 grid-start-01 grid-end grid d-space32">
            <div class="profile__img grid-start-05 grid-end-09">
              <img 
                src="./assets/profile-pic@1x.webp"
                srcset="./assets/profile-pic@1x.webp 1x, ./assets/profile-pic@2x.webp 2x"
                alt="Profile picture of Nell Maissin."
              >
            </div>
            <div class="grid-start-01 grid-end m-space32 profile__txt grid">
              <h2 class="title title--big title--who grid-start-02 grid-end-07">Who am&nbsp;I?</h2>
              <div class="profile__txtcontent grid-start-07 grid-end-12">
                <p>I’m Evo, also known as Nell Maissin, a 21 year old graduate in Web Design. I enjoy experimenting with code in order to make <span class="txt--highlight">visually interesting experiences</span>, as well as writing stories and creating universes which reflect upon spiritual and psychological questions. My strength lies in my <span class="txt--highlight">adaptability</span>, my ability to quickly <span class="txt--highlight">handle tasks by myself</span> and my attention to <span class="txt--highlight">detail</span>.</p>
              </div>
            </div>
          </div>
          <ul class="skills m-space32 grid-start-02 grid-end-12">
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
        <h2 class="title title--huge title--left">Projects</h2>
        
        <ul class="m-space128 d-space192">
          <VProject
            :title="'BOSTROM'"
            :description="'Graduation work. The point & click visual novel in which YOU have the power to change the story.'"
            :link="'http://nell-maissin.be/projets/tfe'"
            :linkCS="'https://medium.com/@nellmaissin/bostrom-case-studies-782f58f8a83a'"
            :img="'project-bostrom'"
            :imgAlt="'Main image of project BOSTROM.'"
            :imgList="[
                {
                    name: 'project-img-bostrom-1',
                    type: 'video',
                    video: 'project-video-bostrom.mp4',
                    alt: 'Miniature of the trailer for BOSTROM.'
                },
                {
                    name: 'project-img-bostrom-2',
                    type: 'image',
                    alt: 'Screenshot of the visual novel interface of BOSTROM.'
                },
                {
                    name: 'project-img-bostrom-3',
                    type: 'image',
                    alt: 'Screenshot of BOSTROM\'s environment.'
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
            :linkCS="'https://medium.com/@nellmaissin/the-pixel-museum-case-studies-72353e4a8868'"
            :img="'project-ilab'"
            :imgAlt="'Main image of The Pixel Museum.'"
            :imgList="[
                {
                    name: 'project-img-ilab-1',
                    type: 'video',
                    video: 'project-video-ilab.mp4',
                    alt: 'Miniature of the case study video of the project.'
                },
                {
                    name: 'project-img-ilab-2',
                    type: 'image',
                    alt: 'Screenshot of the drawing app.'
                },
                {
                    name: 'project-img-ilab-3',
                    type: 'image',
                    alt: 'Screenshot of the gallery and its frames.'
                }
            ]"
            :tags="[
              'php',
              'pixel art (background)',
              'html canvas',
              'js'
            ]"
            :rightSide="true"
          />
          <VProject
            :title="'CommiMe'"
            :description="'Discover the prototype of a brand new platform for digital art commissions.'"
            :link="'http://nell-maissin.be/projets/tfa'"
            :linkCS="'http://nell-maissin.be/projets/tfa/case-study.html'"
            :img="'project-tfa'"
            :imgAlt="'Main image for my second year project.'"
            :imgList="[
                {
                    name: 'project-img-tfa-1',
                    type: 'image',
                    alt: 'Screenshot of the landing page of CommiMe.'
                },
                {
                    name: 'project-img-tfa-2',
                    type: 'image',
                    alt: 'Demonstration of the new artists put forward.'
                },
                {
                    name: 'project-img-tfa-3',
                    type: 'image',
                    alt: 'Screenshots of the user interface of the app.'
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
        <h2 class="title title--huge title--right">Gallery</h2>
        <div class="content content--gallery">
          <VGallery
            :imgList="[
              {
                name: 'gallery/commi-helio',
                type: 'image',
                alt: 'Commission made for a friend. @odentologie (twitter)'
              },
              {
                name: 'gallery/ui-challenge-1',
                type: 'image',
                alt: 'User interface made for the daily UI n°1.'
              },
              {
                name: 'gallery/commi-nime',
                type: 'image',
                alt: 'Commission made for a friend. @nime_rone (twitter)'
              },
              {
                name: 'gallery/commi-py',
                type: 'image',
                alt: 'Commission made for a friend. @PYrroko (twitter)'
              },
              {
                name: 'gallery/cover',
                type: 'video',
                video: 'gallery/cover-speedpaint.mp4',
                alt: 'Speedpaint of a fan album cover (some kind of peace by Ólafur Arnalds).'
              },
              {
                name: 'gallery/ui-challenge-2',
                type: 'image',
                alt: 'User interface made for the daily UI n°2.'
              },
              {
                name: 'gallery/elyoflowers',
                type: 'image',
                alt: 'Drawing of my character Elyo behind flowers.'
              },
              {
                name: 'gallery/illu-nova',
                type: 'image',
                alt: 'Drawing of my character Nova for a light study.'
              },
              {
                name: 'gallery/mnemosyne',
                type: 'video',
                video: 'gallery/mnemosyne-video.mp4',
                alt: 'Video made for a one week project around a fictional game.'
              },
              {
                name: 'gallery/owen-sprite',
                type: 'image',
                alt: 'Screenshot of a visual novel I am currently making.'
              },
            ]"
            :fullGallery="true"
          />
        </div>
      </section>
    </div>

    <section class="bottomSection m-space24 d-space24">
      <h2 class="title title--huge title--nomargin"><span class="title title--huge title--nomargin">Let's work</span> <span class="title title--huge title--nomargin">together!</span></h2>
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
