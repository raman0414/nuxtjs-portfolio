<template>
    <section class="contact-section" id="contact-section">
      <h1>
        Contact
        <span class="text-primary">.</span>
      </h1>
      <div class="contact-method">
        <div class="contact-item">
          <img src="@/assets/icons/email.png" alt="Email Icon">
          <div class="contact-text">
            <p>Send me an email:<br><a href="mailto:mustaphaar0414@gmail.com">mustaphaar0414@gmail.com</a></p>
          </div>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/LinkedIn_icon.svg.png" alt="LinkedIn Icon">
          <p>LinkedIn:<br><a href="https://www.linkedin.com/in/abdul-rahman-mustapha-78b731313/">Abdul Rahman Mustapha</a></p>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/github.svg" alt="GitHub Icon">
          <p>GitHub:<br><a href="https://github.com/raman0414">/raman0414</a></p>
        </div>
        <div class="contact-item">
          <img src="@/assets/icons/fb.png" alt="Facebook Icon">
          <p>Facebook:<br><a href="https://www.facebook.com/cabbage.dhidjd/">Abdul Rahman O. Mustapha</a></p>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .contact-section h1 {
    font-weight: 700;
    font-size: 2.5em;
    margin-bottom: 30px;
  }
  
  .contact-method {
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    width: 250px;
    text-align: left;
    margin: 0 auto; 
  }
  
  .contact-item img {
    width: 50px;
    margin-right: 10px;
  }
  
  .contact-text {
    display: flex;
    flex-direction: column;
  }
  
  .contact-item p {
    margin: 0;
    font-size: 1.2em;
  }
  
  .contact-item a {
    color: #fff;
    text-decoration: none;
  }
  
  .contact-item a:hover {
    text-decoration: underline;
    color: #00a6fb;
  }
  
 
  @media (max-width: 1200px) {
    .contact-section h1 {
      font-size: 2.2em;
    }
  
    .contact-item {
      width: 220px;
    }
  
    .contact-method {
      gap: 30px;
    }
  }
  
  @media (max-width: 992px) {
    .contact-section h1 {
      font-size: 2em;
    }
  
    .contact-item {
      width: 200px;
    }
  
    .contact-method {
      gap: 20px;
    }
  }
  
  @media (max-width: 768px) {
    .contact-section h1 {
      font-size: 1.8em;
    }
  
    .contact-item {
      width: 180px;
    }
  
    .contact-method {
      gap: 15px;
      justify-content: center;
    }
  
    .contact-item p {
      font-size: 1em;
    }
  }
  
  @media (max-width: 576px) {
    .contact-section h1 {
      font-size: 1.6em;
    }
  
    .contact-item {
      width: 100%;
    }
  
    .contact-method {
      gap: 10px;
      flex-direction: column;
    }
  }
  </style>
  