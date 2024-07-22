<template>
  <section class="education-section" id="education-section">
    <h1>Education
      <span class="text-primary">.</span>
    </h1>
    <div class="education">
      <div class="education-item">
        <img src="@/assets/icons/MSU-OFFICIAL-LOGO-Original-2MB.png" alt="MSU Logo">
        <p class="degree">Degree: Bachelor of Science in Computer Science</p>
        <p>2020 - Present</p>
        <p>Mindanao State University - Main Campus (Marawi City)</p>
      </div>
      <div class="education-item">
        <img src="@/assets/icons/DC.png" alt="DC Logo">
        <p class="strand">Strand: Science, Technology, Engineering, and Mathematics</p>
        <p>2018 - 2020</p>
        <p>Dansalan College Foundation Annex (Iligan City)</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}

.education-section h1 {
  font-weight: 700;
  font-size: 2.5em;
  margin-bottom: 30px;
}

.education-item {
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}

.education-item img {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

.education-item p {
  margin: 10px 0;
}

.education-item .degree,
.education-item .strand {
  font-weight: bold;
}


@media (max-width: 1200px) {
  .education-section h1 {
    font-size: 2.2em;
  }

  .education-item {
    width: 280px;
  }

  .education {
    gap: 30px;
  }
}

@media (max-width: 992px) {
  .education-section h1 {
    font-size: 2em;
  }

  .education-item {
    width: 250px;
  }

  .education {
    gap: 20px; 
  }
}

@media (max-width: 768px) {
  .education-section h1 {
    font-size: 1.8em; 
  }

  .education-item {
    width: 220px; 
  }

  .education {
    gap: 15px; 
  }
}

@media (max-width: 576px) {
  .education-section h1 {
    font-size: 1.6em; 
  }

  .education-item {
    width: 100%;
  }

  .education {
    gap: 10px;
  }
}
</style>
