<template>
  <div class="app-wrapper">
    <!-- Fixed Navbar -->
    <nav class="navbar">
      <router-link to="/" class="logo">trisha.</router-link>
      <div class="nav-links">
        <!-- Opens dedicated Resume Page -->
        <router-link to="/resume" class="nav-item">RESUME</router-link> 
        
        <!-- Logic: If not on Home, go Home then Scroll. If on Home, just Scroll. -->
        <a href="#" @click.prevent="handleProjectClick" class="nav-item">PROJECTS</a>
      </div>
    </nav>

    <!-- Page Content -->
    <router-view />
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const handleProjectClick = async () => {
  if (route.path !== '/') {
    // 1. If we are on the Resume page, navigate Home first
    await router.push('/')
    // 2. Small delay to allow the Home page to load before scrolling
    setTimeout(() => {
      scrollToProjects()
    }, 300)
  } else {
    // 3. If already Home, scroll immediately
    scrollToProjects()
  }
}

const scrollToProjects = () => {
  const element = document.getElementById('projects-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style>
/* GLOBAL STYLES */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #0a0a0c;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

.app-wrapper {
  min-height: 100vh;
}

/* NAVBAR STYLING */
.navbar {
  z-index: 1000;
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 80px;
  align-items: center;
  background: rgba(10, 10, 12, 0.8);
  backdrop-filter: blur(15px);
}

.logo {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  text-decoration: none;
  color: white;
}

.nav-links {
  display: flex;
  gap: 40px;
}

.nav-item {
  color: #888;
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  transition: 0.3s;
}

.nav-item:hover, .router-link-active {
  color: #ffffff;
}

@media (max-width: 768px) {
  .navbar {
    padding: 20px 30px;
  }
}
</style>