<template>
    <div class="home">
        <div class="slogan">
            <div class="btn">
                <a>
                    <el-button
                    id=breathing-button
                    type="default" 
                    round size='large'>
                    👋 I'm Raman Mustapha
                    </el-button>
                </a>
            </div>
            <a>
                A 3rd Year 
                <span class="text-primary">Computer Science</span> 
                student with a focus on 
                <TextRotator />
            </a> 

        </div>
            <Statistics/>
        <div class="button">
            <a href="./assets/resume.pdf" target="_blank">
                <el-button type="primary"
                :icon="Edit"
                color="#1d1e1f"
                round 
                size='large'
                hover="grey"
                > Resume
                </el-button>
            </a>
            <a href="#contact-section">
                <el-button 
                    type="primary" 
                    color="#1d1e1f"
                    :icon="ChatLineRound" 
                    round 
                    size='large' 
                    href="#contact-section"> 
                    Contacts
                </el-button>
            </a>
        </div>
    </div>
</template>

<style scoped>

#breathing-button{
    -webkit-animation: breathing 1s ease-out infinite normal;
    animation: breathing 2s ease-out infinite normal;
    -webkit-font-smoothing: antialiased;
}
@-webkit-keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@keyframes breathing {
  0% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  25% {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
  }

  60% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }

  100% {
    -webkit-transform: scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
}

.home {
    justify-content: center;
    text-align: center;
    align-items: center;
    max-width: 800px;
    margin: auto;
    border-radius: 8px;
    margin-bottom: 5em;
}
.slogan h1 {
    font-size: 1rem;
    font-weight: 700;
}
.slogan a{
    color: #fffffc;
    font-size: 4.2rem;
    font-weight: 700;
    line-height: 3.9rem;
}

.button a{
    margin: 0em 1em;
    transition: scale 0.3s
}
.button a :hover{
    scale:105%;
}
.button{
    scale: 140%;
    margin-top: 2.5em;
}

.btn{
    padding: 12px 30px;
    margin: 10px;
    scale: 110%;
}


@media (max-width: 1200px) {
    .slogan a {
        font-size: 3.5rem;
        line-height: 3.2rem;
    }

    .button {
        scale: 130%;
        margin-top: 2em;
    }
}

@media (max-width: 992px) {
    .slogan a {
        font-size: 3rem;
        line-height: 2.8rem;
    }

    .btn {
        padding: 10px 25px;
        margin: 8px;
        scale: 105%;
    }

    .button {
        scale: 120%;
        margin-top: 1.5em;
    }
}

@media (max-width: 768px) {
    .slogan a {
        font-size: 2.5rem;
        line-height: 2.5rem;
    }

    .btn {
        padding: 8px 20px;
        margin: 6px;
        scale: 100%;
    }

    .button {
        scale: 110%;
        margin-top: 1em;
    }

    .home {
        margin-bottom: 3em;
    }
}

@media (max-width: 576px) {
    .slogan a {
        font-size: 2rem;
        line-height: 2rem;
    }

    .btn {
        padding: 6px 15px;
        margin: 4px;
        scale: 95%;
    }

    .button {
        scale: 100%;
        margin-top: 0.5em;
    }

    .home {
        margin-bottom: 2em;
    }
}

</style>

<script setup lang="ts">
    import { Edit, ChatLineRound} from '@element-plus/icons-vue'
</script>