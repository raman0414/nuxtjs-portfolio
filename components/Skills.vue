<template>
    <section class="skill-section" id="skills">
        <h1>Skills
            <span class="text-primary">.</span>
        </h1>
        <div class="skill-container">
            <article class="skill-column">
                <a>Technologies and Tools</a>
                <ul class="skill-list hard">
                    <li class="ttitems" v-for="(tech, index) in technologies" :key="index">
                        <img :src="tech.icon" height="auto" width="45%" loading="lazy" class="icon">
                        <span class="tech-name">{{ tech.name }}</span>
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>

<script>
import javascriptIcon from '@/assets/icons/javascript.svg';
import htmlIcon from '@/assets/icons/html.svg';
import cssIcon from '@/assets/icons/css.svg';
import mysqlIcon from '@/assets/icons/mysql.svg';
import gitIcon from '@/assets/icons/git.svg';
import githubIcon from '@/assets/icons/github.svg';
import nodeIcon from '@/assets/icons/node.svg';
import vscodeIcon from '@/assets/icons/vscode.svg';
import figmaIcon from '@/assets/icons/figma.svg';
import linuxIcon from '@/assets/icons/linux.svg';
import arduinoIcon from '@/assets/icons/arduino.svg';
import pythonIcon from '@/assets/icons/python.svg';
import photoshopIcon from '@/assets/icons/photoshop.svg';
import viteIcon from '@/assets/icons/vite.svg';
import netlifyIcon from '@/assets/icons/netlify.svg';
import npmIcon from '@/assets/icons/npm.svg';
import vueIcon from '@/assets/icons/vue.svg';
import nuxtIcon from '@/assets/icons/nuxt.svg';

export default {
    data() {
        return {
            technologies: [
                { name: 'JavaScript', icon: javascriptIcon },
                { name: 'HTML', icon: htmlIcon },
                { name: 'CSS', icon: cssIcon },
                { name: 'MySQL', icon: mysqlIcon },
                { name: 'Git', icon: gitIcon },
                { name: 'GitHub', icon: githubIcon },
                { name: 'Node.js', icon: nodeIcon },
                { name: 'VSCode', icon: vscodeIcon },
                { name: 'Figma', icon: figmaIcon },
                { name: 'Linux', icon: linuxIcon },
                { name: 'Arduino', icon: arduinoIcon },
                { name: 'Python', icon: pythonIcon },
                { name: 'Photoshop', icon: photoshopIcon },
                { name: 'Vite', icon: viteIcon },
                { name: 'Netlify', icon: netlifyIcon },
                { name: 'npm', icon: npmIcon },
                { name: 'Vue', icon: vueIcon },
                { name: 'Nuxt', icon: nuxtIcon }
            ]
        };
    }
};
</script>

<style scoped>
.skill-section h1 {
  font-weight: 700;
  font-size: 2.5em; /* Default font size for large screens */
}

.skill-container {
  padding: 20px;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  flex-wrap: wrap; /* Allows wrapping on smaller screens */
}

.skill-column {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
}

.skill-list li {
  display: flex;
  gap: .5rem;
  flex-direction: column;
}

.ttitems {
  position: relative;
  height: 5.5rem;
  width: 5.5rem;
  background-color: #1d1e1f;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin: 0.5rem;
  overflow: hidden;
  transition: background-color 0.3s, scale 0.2s;
}

.ttitems:hover {
  scale: 120%;
  background-color: #333;
}

.icon {
  position: absolute;
  transition: opacity 0.3s;
}

.tech-name {
  font-size: 14px;
  position: absolute;
  opacity: 0;
  transition: opacity 0.3s;
  color: white;
  font-weight: 500;
  text-align: center;
}

.ttitems:hover .icon {
  opacity: 0;
}

.ttitems:hover .tech-name {
  opacity: 1;
}



@media (max-width: 1200px) {
  .skill-section h1 {
    font-size: 2.2em; 
  }
  .skill-container {
    padding: 18px;
    gap: 3rem; 
  }
  .ttitems {
    height: 5rem;
    width: 5rem;
  }
}

@media (max-width: 992px) {
  .skill-section h1 {
    font-size: 2em;
  }
  .skill-container {
    padding: 16px;
    gap: 2rem; 
  }
  .ttitems {
    height: 4.5rem;
    width: 4.5rem;
  }
}

@media (max-width: 768px) {
  .skill-section h1 {
    font-size: 1.8em;
  }
  .skill-container {
    padding: 14px;
    gap: 1.5rem;
    flex-direction: column; 
    align-items: center; 
  }
  .ttitems {
    height: 4rem;
    width: 4rem;
  }
}

@media (max-width: 576px) {
  .skill-section h1 {
    font-size: 1.6em; 
  }
  .skill-container {
    padding: 12px;
    gap: 1rem; 
  }
  .ttitems {
    height: 3.5rem;
    width: 3.5rem;
  }
  .tech-name {
    font-size: 12px; 
  }
}
</style>
