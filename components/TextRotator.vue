<!-- https://zooper.pages.dev/lab -->
<template>
  <div class="text-container">
    <span class="text-wrapper">
      <ul class="animate-text-slide">
        <li class="text-item">Front-end Developing<span class="text-primary">.</span></li>
        <li class="text-item">UI/UX<span class="text-primary">.</span></li>
        <li class="text-item">UX Writing<span class="text-primary">.</span></li>
        <li class="text-item">User Interface Design<span class="text-primary">.</span></li>
        <li class="text-item">Wireframing<span class="text-primary">.</span></li>
        <li class="text-item">Prototyping<span class="text-primary">.</span></li>
      </ul>
    </span>
  </div>
</template>

<style>
.text-container {
  font-weight: bold;
  font-size: 4.2rem; /* Default size */
  color: #faa916; /* Replace with appropriate color */
}

.text-wrapper {
  display: inline-flex;
  flex-direction: column;
  height: 4.8rem; /* Default height */
  line-height: 4.8rem;
  overflow: hidden;
  position: relative;
}

.animate-text-slide {
  animation: text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite;
  text-align: center;
  padding-left: 18px;
}

@keyframes text-slide {
  0%, 16% {
    transform: translateY(0%);
  }
  20%, 36% {
    transform: translateY(-16.66%);
  }
  40%, 56% {
    transform: translateY(-33.33%);
  }
  60%, 76% {
    transform: translateY(-50%);
  }
  80%, 96% {
    transform: translateY(-66.66%);
  }
  100% {
    transform: translateY(-83.33%);
  }
}

@media (max-width: 1200px) {
  .text-container {
    font-size: 3.5rem; 
  }
  .text-wrapper {
    height: 4.5rem; 
  }
}

@media (max-width: 992px) {
  .text-container {
    font-size: 3rem;
  }
  .text-wrapper {
    height: 4rem;
  }
}

@media (max-width: 768px) {
  .text-container {
    font-size: 2.5rem; 
  }
  .text-wrapper {
    height: 3.5rem; 
  }
  .animate-text-slide {
    padding-left: 10px;
  }
}

@media (max-width: 576px) {
  .text-container {
    font-size: 2rem; 
  }
  .text-wrapper {
    height: 3rem; 
  }
  .animate-text-slide {
    padding-left: 5px; 
  }
}
</style>
