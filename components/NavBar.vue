<template>
        <nav>
            <div class="menu-toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
        <ul class="nav-links" id="nav-links">
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#experience" class="nav-link">Experience</a></li>
            <li><a href="#education-section" class="nav-link">Education</a></li>
            <li><a href="#skills" class="nav-link">Skills</a></li>
            <li><a href="#contact-section" class="nav-link">Contact</a></li>
        </ul>
        </nav>
</template>
<style scoped>


nav {
    margin: 1em;
    padding: 1em 0;
    position: relative;
    z-index: 1000;
    scroll-behavior: smooth;
}

.nav-links {
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
}

.nav-links li {
    margin: 0 1em;
}

.nav-links li a {
    font-size: 18px;
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5em 1em;
    transition: scale 0.3s
}

.nav-links li a:hover {
    scale: 200%;
    color: #faa916;
    border-radius: 5px;

}

.menu-toggle {
    display: none;
    flex-direction: column;
    cursor: pointer;
}

.menu-toggle .bar {
    width: 25px;
    height: 3px;
    background-color: #faa916;
    margin: 4px 0;
    transition: 0.4s;
}

.menu-toggle.is-active .bar:nth-child(1) {
    transform: rotate(-45deg) translate(-5px, 6px);
}

.menu-toggle.is-active .bar:nth-child(2) {
    opacity: 0;
}

.menu-toggle.is-active .bar:nth-child(3) {
    transform: rotate(45deg) translate(-5px, -6px);
}

@media (max-width: 1024px) {
    .skill-container {
        flex-direction: column;
        gap: 2rem;
    }

    .experience-item .experience-content {
        width: 100%;
    }
}

@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
        position: fixed;
        width: 100%;
        height: 100vh;
        background-color: #051923;
        top: -100%;
        left: 0;
        opacity: 0;
        transition: all 0.5s ease;
        overflow-y: auto;
    }

    .nav-links.active {
        top: 0;
        opacity: 1;
    }

    .menu-toggle {
        display: flex;
        position: absolute;
        right: 1em;
        top: 1em;
    }

    .nav-links li {
        margin: 1.5em 0;
        text-align: center;
    }

    .skill-container {
        flex-direction: column;
        gap: 2rem;
    }

    .slogan p {
        padding-left: 20px;
        padding-right: 20px;
        font-size: 2rem;
        line-height: 2.5rem;
    }

    .experience-item .experience-content {
        width: 100%;
    }
}

@media (max-width: 480px) {
    .slogan p {
        padding-left: 10px;
        padding-right: 10px;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .btn {
        padding: 10px 20px;
        margin: 5px;
    }
}
</style>
<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');

  mobileMenu.addEventListener('click', function() {
    this.classList.toggle('is-active');
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('is-active');
      navLinks.classList.remove('active');
    });
  });
});
</script>
  