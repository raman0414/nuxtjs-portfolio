<template>
    <section class="experience" id="experience">
        <h1>
            Experience
            <span class="text-primary">.</span>
        </h1>
        <section class="timeline">
        <el-timeline style="max-width: 900px">
            <el-timeline-item center timestamp="2024" placement="top" size="large" color="#faa916">
                <el-card>
                    <div class="experience-item">
                        <div class="experience-content">
                            <img src="@/assets/icons/ccci-logo-white.svg"  height="auto" width="25%" loading="lazy" class="company">
                            <span class="h22">Student Intern</span> <h2>CCCI (Centralized Cloud Computing International. INC)</h2>
                            <div class="demo-collapse">
                                <el-collapse v-model="activeNames" @Onchange="handleChange">
                                    <el-collapse-item title="Overview:" name="1">
                                        <p>July 2024 - August 2024</p>
                                        <p class="pb">
                                        </p>
                                    </el-collapse-item>
                                    <el-collapse-item title="Skill Used:" name="2">
                                        <div class="skill-container">
                                            <article class="skill-column">
                                                <ul class="skill-list hard">
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/javascript.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/html.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/css.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/git.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/github.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/node.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/vscode.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/nuxt.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/vue.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-timeline-item>
            <el-timeline-item center timestamp="2023" placement="top" size="large" color="#faa916">
                <el-card>
                    <div class="experience-item">
                        <div class="experience-content">
                            <img src="@/assets/icons/kasaba1.svg"  height="auto" width="15%" loading="lazy" class="company">
                            <span class="h22">Front-End Developer</span> <h2>kasaba.msumain.edu.ph</h2>
                            <div class="demo-collapse">
                                <el-collapse v-model="activeNames" @Onchange="handleChange">
                                    <el-collapse-item title="Overview:" name="3">
                                        <p>September 2023 - December 2023</p>
                                        <p class="pb">I contributed to the website design using Figma, enhancing my skills in
                                        HTML, CSS, and Git.
                                        </p>
                                    </el-collapse-item>
                                    <el-collapse-item title="Skill Used:" name="4">
                                        <div class="skill-container">
                                            <article class="skill-column">
                                                <ul class="skill-list hard">
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/javascript.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/html.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/css.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/git.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/github.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/node.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/vscode.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/figma.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/photoshop.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                </ul>
                                            </article>
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-timeline-item>
            <el-timeline-item center timestamp="2021" placement="top" size="large" color="#faa916">
                <el-card>
                    <div class="experience-item">
                        <div class="experience-content">
                            <img src="@/assets/icons/starbooks.svg"  height="auto" width="40%" loading="lazy" class="company">
                            <span class="h22">IT Specialist</span><h2>DOST - STII (STABBOOKS)</h2>
                            <div class="demo-collapse">
                                <el-collapse v-model="activeNames" @Onchange="handleChange">
                                    <el-collapse-item title="Overview:" name="5">
                                        <p>September 2021 - October 2021</p>
                                        <p class="pb">I contributed to the deployment of the DOST-STII STARBOOKS in Lanao Del Sur,
                                            managing installation, configuration, and troubleshooting to ensure efficient operation.
                                        </p>
                                    </el-collapse-item>
                                    <el-collapse-item title="Skill Used:" name="6">
                                        <div class="skill-container">
                                            <article class="skill-column">
                                                <ul class="skill-list hard">
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/mysql.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/php.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>
                                                    <li class="ttitems">
                                                        <img src="@/assets/icons/jquery.svg"  height="auto" width="45%" loading="lazy">
                                                    </li>

                                                </ul>
                                            </article>
                                        </div>
                                    </el-collapse-item>
                                </el-collapse>
                            </div>
                        </div>
                    </div>
                </el-card>
            </el-timeline-item>
        </el-timeline>
    </section>
    </section>
</template>
<script lang="ts" setup>
    import { ref } from 'vue'

    const activeNames = ref(['1'])
    const handleChange = (val: string[]) => {
    console.log(val)
}
</script>

<style>
.skill-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.skill-column {
  display: flex;
  flex-direction: column;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
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

.item{
    background-color: #011627;
}
.company{
    margin-bottom: 30px;
}

.experience-item{   
    padding: 20px;
}
.experience h1 {
    font-size: 2.5em;
    margin-bottom: 30px;
    font-weight: 700;
}
.experience h2{
    font-size: 1.5em;
    margin-bottom: 30px;
    font-weight: 500;
}

.h22{
    font-weight: 700;
    color: #faa916;
    font-size: 2em;
    margin-bottom: 30px;
    font-weight: 500;
}

.demo-collapse{
    margin-bottom: 30px;
}

@media (max-width: 1200px) {
    .experience h1 {
        font-size: 2.2em;
    }

    .experience h2 {
        font-size: 1.4em;
    }

    .h22 {
        font-size: 1.8em;
    }

    .company {
        width: 30%; 
    }
}

@media (max-width: 992px) {
    .experience h1 {
        font-size: 2em;
    }

    .experience h2 {
        font-size: 1.3em;
    }

    .h22 {
        font-size: 1.6em;
    }

    .company {
        width: 35%;
    }
}

@media (max-width: 768px) {
    .experience h1 {
        font-size: 1.8em;
    }

    .experience h2 {
        font-size: 1.2em;
    }

    .h22 {
        font-size: 1.4em;
    }

    .company {
        width: 40%;
    }
}

@media (max-width: 576px) {
    .experience h1 {
        font-size: 1.6em;
    }

    .experience h2 {
        font-size: 1em;
    }

    .h22 {
        font-size: 1.2em; 
    }

    .company {
        width: 50%;
    }
}
</style>