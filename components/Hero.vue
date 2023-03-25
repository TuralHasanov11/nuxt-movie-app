<template>
  <div class="hero">
    <img src="/img/hero.jpg" alt="" class="hero-bg">
    <div class="hero-text-container">
      <div class="hero-text">
        <h1><span>Now</span> Streaming</h1>
        <a href="#movies-now-playing" class="hero-btn mx-2">View Movies</a>
        <a href="#tv-shows-airing-today" class="btn btn-outline-light">View TV Shows</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  height: 400px;
  position: relative;
}

.hero img.hero-bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
  
.hero .hero-text-container{
  z-index: 99;
  position: absolute;
  top: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.hero .hero-text-container .hero-text {
    padding: 0 16px;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    font-size: 1.2em;
}
   
@media (min-width: 768px) {
  .hero .hero-text-container .hero-text h1{
      font-size: 84px;
  }

  .hero{
        height: 500px;
    }
}
.hero .hero-text-container .hero-text h1 {
  color: #fff;
  font-size: 64px;
  font-weight: 200;
  margin-bottom: 8px;
}

.hero .hero-text-container .hero-text h1 span {
  font-weight: 500;
}

.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}

.hero-btn {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  padding: 0.5em 1em;
  background-color: var(--colorPrimary);
  border: none;
  color: #fff;
  border-radius: 0.25em;
  cursor: pointer;
  transition: 0.3s ease all;
}

.hero-btn:hover {
  color: #eee;
  background-color: var(--colorSecondary);
}
</style>