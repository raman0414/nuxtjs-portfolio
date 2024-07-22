<template>
  <section class="about" id="about">
      <h2>About Me
          <span class="text-primary">.</span>
      </h2>
      <p>
          <span class="text-primary">Welcome </span>
          to my portfolio! I am a passionate 
          <span class="text-primary">front-end developer</span> with 
          <span class="text-primary">intermediate</span>
          skills in HTML, CSS, and JavaScript. My focus is on 
          <span class="text-primary">creating user-friendly </span>
          and 
          <span class="text-primary">visually appealing websites. </span>
          I thrive on turning ideas into interactive digital experiences. Explore my work and see what 
          I can 
          <span class="text-primary">create for you!</span>
      </p>
  </section>
</template>

<style scoped>
.about h2 {
  font-weight: 700;
  font-size: 2.5em; 
}
.about p {
  text-align: justify;
  padding: 20px; 
  font-size: 1.1em; 
  line-height: 30px; 
}


@media (max-width: 1200px) {
  .about h2 {
    font-size: 2.2em; 
  }
  .about p {
    padding: 18px; 
    font-size: 1em; 
    line-height: 28px; 
  }
}

@media (max-width: 992px) {
  .about h2 {
    font-size: 2em;
  }
  .about p {
    padding: 16px;
    font-size: 0.9em;
    line-height: 26px;
  }
}

@media (max-width: 768px) {
  .about h2 {
    font-size: 1.8em;
  }
  .about p {
    padding: 14px;
    font-size: 0.85em;
    line-height: 24px;
  }
}

@media (max-width: 576px) {
  .about h2 {
    font-size: 1.6em;
  }
  .about p {
    padding: 12px;
    font-size: 0.8em;
    line-height: 22px;
  }
}
</style>
