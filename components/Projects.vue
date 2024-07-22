<template>
  <section class="project-section">
    <h1>Projects / Designs <span class="text-primary">.</span></h1>
    <div class="projects-container">
      <div class="project-card" v-for="(project, index) in projects" :key="index">
        <img
          class="project-image"
          :src="project.image"
          alt="Project Image"
          @click="handleImageClick(project.srcList, index)"
        />
        <div class="project-info">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
    <el-image-viewer
      v-if="imageViewerVisible"
      :url-list="currentImageList"
      :initial-index="currentIndex"
      :z-index="9999"
      :zoom-rate="0"
      @close="imageViewerVisible = false"
    />
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ElImageViewer } from 'element-plus';
import k1 from '@/assets/icons/kasaba.jpg';
import k2 from '@/assets/icons/lesson.jpg';
import m1 from '@/assets/icons/misician1.jpg';
import m2 from '@/assets/icons/misician2.jpg';
import m3 from '@/assets/icons/misician3.jpg';
import m4 from '@/assets/icons/misician4.jpg';
import m5 from '@/assets/icons/misician5.jpg';
import m6 from '@/assets/icons/misician6.jpg';
import m7 from '@/assets/icons/misician7.jpg';
import m8 from '@/assets/icons/misician8.jpg';

const projects = ref([
  {
    name: 'KASABA',
    description: 'Maranao Language Crash Course',
    image: k1,
    srcList: [k1,k2],
  },
  {
    name: 'Misician',
    description: 'Marketplace for Digital Music and Audio Services',
    image: m1,
    srcList: [m1,m2, m3, m4, m5, m6, m7, m8],
  },
]);

const imageViewerVisible = ref(false);
const currentImageList = ref<string[]>([]);
const currentIndex = ref(0);

const handleImageClick = (srcList: string[], index: number) => {
  currentImageList.value = srcList;
  currentIndex.value = 0;
  imageViewerVisible.value = true;
};
</script>

<style scoped>
.project-section {
  padding: 20px;
  color: #fff;
}

.project-section h1 {
  font-weight: 700;
  font-size: 2.5em;
  margin-bottom: 30px;
}

.projects-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem; 
}

.project-card {
  background: #1e1e1e;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  transition: transform 0.3s;
}

.project-card:hover {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: cover; 
}

.project-info {
  padding: 20px;
}

.project-info h3 {
  margin: 0;
  font-size: 1.2em;
}

.project-info p {
  font-size: 0.9em;
  color: #aaa;
}


@media (max-width: 1200px) {
  .project-section h1 {
    font-size: 2.2em;
  }

  .project-card {
    width: 280px;
  }
}

@media (max-width: 992px) {
  .project-section h1 {
    font-size: 2em;
  }

  .project-card {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .project-section h1 {
    font-size: 1.8em;
  }

  .project-card {
    width: 220px;
  }
}

@media (max-width: 576px) {
  .project-section h1 {
    font-size: 1.6em;
  }

  .project-card {
    width: 100%; 
  }

  .projects-container {
    gap: 1rem; 
  }
}


.el-image-viewer__wrapper {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 9999 !important;
  background-color: rgba(0, 0, 0, 0.85) !important;
}
</style>
