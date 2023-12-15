<script setup>
import VButton from './components/VButton.vue'
import VTag from './components/VTag.vue'
import VGalaxyCanvas from './components/VGalaxyCanvas.vue'
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

    <section>
      <h2>Who am I?</h2>
      <p>I’m Evo, also known as Nell Maissin, a 21 year old graduate in Web Design. I enjoy experimenting with code in order to make visually interesting experiences, as well as writing stories and creating universes which reflect upon spiritual and psychological questions. My strength lies in my adaptability, my ability to quickly handle tasks by myself and my attention to detail.</p>
      <ul class="skills">
        <li class="skill">
          <img src="" alt="">
          <h3>Vue.js</h3>
          <p>I learnt Vue.js 3 Composition mostly by myself by integrating it into personal projects.</p>
        </li>
        <li class="skill">
          <img src="" alt="">
          <h3>Three.js</h3>
          <p>I followed Bruno Simon’s “Three.js Journey” and used what I had learnt in generative design experiments and in web games.</p>
        </li>
        <li class="skill">
          <img src="" alt="">
          <h3>Adobe suite</h3>
          <p>I enjoy working with After Effects and I’m comfortable with Photoshop, Illustrator and Premiere Pro. </p>
        </li>
        <li class="skill">
          <img src="" alt="">
          <h3>Figma</h3>
          <p>I have been using Figma for 2+ years and earned some professional experience by working with it in a design team during my 3 months internship at Neopixl.</p>
        </li>
      </ul>
    </section>

    <section>
      <h2>Projects</h2>
      <div class="project">
        <h3>BOSTROM</h3>
        <p>Graduation work. The point & click visual novel in which YOU have the power to change the story.</p>
        <ul class="tagList">
          <li class="tag">vue.js</li>
          <li class="tag">three.js</li>
          <li class="tag">illustrations</li>
          <li class="tag">narrative design</li>
        </ul>
        <ul class="links">
          <li>
            <VButton
              :text="'Visit'"
              :link="'http://nell-maissin.be/projets/tfe'"
              :arrow="true"
            />
          </li>
          <li>
            <VButton
              :text="'Case Study'"
              :link="'http://nell-maissin.be/projets/tfe'"
              :arrow="true"
            />
          </li>
        </ul>
      </div>
      <div class="project">
        <h3>The Pixel Museum</h3>
        <p>A project made by a team of six. The goal was to make an interactive museum in which people would draw on parts of the frames in order to make artworks together.</p>
        <ul>
          <li>php</li>
          <li>pixel art (background)</li>
          <li>html canvas</li>
          <li>js</li>
        </ul>
      </div>
      <div class="project">
        <h3>CommiMe</h3>
        <p>Discover the prototype of a brand new platform for digital art commissions.</p>
        <ul class="tagList">
          <li class="tag">greensock</li>
          <li class="tag">ux</li>
          <li class="tag">ui</li>
          <li class="tag">figma</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Gallery</h2>
    </section>

    <section>
      <h2>Let's work together!</h2>
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
