<template>
  <div class="app-wrapper">
    <!-- Fixed Navbar -->
    <nav class="navbar">
      <router-link to="/" class="logo" @click="scrollToTop">trisha.</router-link>
      <div class="nav-links">
        <router-link to="/resume" class="nav-item">RESUME</router-link> 
        
        <!-- NEW: Expertise Scroll Link -->
        <a href="#" @click.prevent="handleExpertiseClick" class="nav-item">EXPERTISE</a>
        
        <a href="#" @click.prevent="handleProjectClick" class="nav-item">PROJECTS</a>
      </div>
    </nav>

    <!-- Page Content -->
    <router-view />

    <!-- BACK TO TOP BUTTON -->
    <Transition name="fade">
      <button 
        v-if="showBackToTop" 
        @click="scrollToTop" 
        class="back-to-top"
        title="Back to top"
      >
        <i class="bi bi-chevron-up"></i>
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const showBackToTop = ref(false)

// LOGIC FOR EXPERTISE LINK
const handleExpertiseClick = async () => {
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => { scrollToSection('about-detail') }, 300)
  } else {
    scrollToSection('about-detail')
  }
}

// LOGIC FOR PROJECTS LINK
const handleProjectClick = async () => {
  if (route.path !== '/') {
    await router.push('/')
    setTimeout(() => { scrollToSection('projects-section') }, 300)
  } else {
    scrollToSection('projects-section')
  }
}

// Reusable scroll function
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

const handleScroll = () => {
  showBackToTop.value = window.scrollY > 400
}

onMounted(() => { window.addEventListener('scroll', handleScroll) })
onUnmounted(() => { window.removeEventListener('scroll', handleScroll) })
</script>

<style>
/* GLOBAL STYLES */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background-color: #0a0a0c; color: #ffffff; font-family: 'Inter', sans-serif; overflow-x: hidden; }

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

.logo { font-size: 1.5rem; font-weight: 800; text-decoration: none; color: white; cursor: pointer; }

/* Adjusted gap for 3 nav items */
.nav-links { display: flex; gap: 30px; }

.nav-item { 
  color: #888; 
  text-decoration: none; 
  font-size: 0.75rem; 
  font-weight: 700; 
  letter-spacing: 1px; 
  transition: 0.3s;
}
.nav-item:hover, .router-link-active { color: #ffffff; }

/* BACK TO TOP BUTTON */
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 50px;
  height: 50px;
  background-color: #7c72ff;
  color: white;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1500;
  box-shadow: 0 10px 20px rgba(124, 114, 255, 0.3);
  transition: 0.3s;
}

.back-to-top:hover { transform: translateY(-5px); background-color: #6a61e6; }

/* MOBILE FIXES */
@media (max-width: 768px) {
  .navbar { padding: 20px 25px; }
  .logo { font-size: 1.2rem; }
  .nav-links { gap: 15px; } /* Smaller gap to fit 3 items on small screens */
  .nav-item { font-size: 0.65rem; }
  .back-to-top { bottom: 20px; right: 20px; width: 45px; height: 45px; }
}

/* FADE ANIMATION */
.fade-enter-active, .fade-leave-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(20px); }
</style>