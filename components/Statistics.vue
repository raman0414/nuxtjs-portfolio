<template>
    <div class="stats-section">
        <div class="stat-item">
            <div class="stat-number">0+</div>
            <div class="stat-label">Years of experience</div>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
            <div class="stat-number">9k+</div>
            <div class="stat-label">Cups of coffee consumed</div>
        </div>
        <div class="divider"></div>
        <div class="stat-item">
            <div class="stat-number">20k+</div>
            <div class="stat-label">Lines of code written</div>
        </div>
    </div>
  </template>
  <script setup>
  </script>
  
  <style scoped>
  .stats-section {
    scale: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .stat-item {
    display: flex;
    border-radius: 20px;
    padding: 30px 30px;
    margin: 0 10px;
    color: #fff;
    text-align: center;
  }
  
  .stat-number {
    background-color: #1d1e1f;
    border-radius: 20px;
    padding: 5px 20px 5px 20px;
    font-size: 24px;
    font-weight: bold;
  }
  
  .stat-label {
    font-size: 14px;
    margin-top: 5px;
  }
  
  .divider {
    height: 40px;
    width: 1px;
    background-color: #faa916;
  }
    @media (max-width: 1200px) {
    .stats-section {
      scale: 85%;
    }
    .stat-item {
      padding: 30px 20px;
    }
    .stat-number {
      font-size: 24px;
    }
    .stat-label {
      font-size: 14px;
    }
  }

  @media (max-width: 992px) {
    .stats-section {
      scale: 80%;
    }
    .stat-item {
      padding: 30px 20px;
    }
    .stat-number {
      font-size: 24px;
    }
    .stat-label {
      font-size: 14px; 
    }
  }

  @media (max-width: 768px) {
    .stats-section {
      scale: 75%;
    }
    .stat-item {
      padding: 20px 10px;
    }
    .stat-number {
      font-size: 18px;
    }
    .stat-label {
      font-size: 10px;
    }
    .divider {
      height: 40px;
    }
  }

  @media (max-width: 576px) {
    .stats-section {
      scale: 70%;
    }
    .stat-item {
      padding: 8px;
      margin: 5px 0;
    }
    .stat-number {
      font-size: 16px;
    }
    .stat-label {
      font-size: 10px;
    }
    .divider {
      height: 30px;
    }
  }
  </style>
  