<template>
  <div class="page-container">
    <!-- HERO SECTION -->
    <main class="hero">
      <div class="hero-content">
        <h1 class="main-title">
          Hello, I'm <br />
          <span class="highlight">Trisha.</span>
        </h1>

        <p class="subtitle">
          Computer Engineering Technology student at <strong>PUP</strong>. <br />
          Full-stack developer focused on bridging academic excellence <br />
          with industry-standard software solutions.
        </p>

        <div class="hero-btns">
          <a href="https://www.linkedin.com/in/bermudeztrisha" target="_blank" class="btn-primary">
            Get in touch <i class="bi bi-linkedin"></i>
          </a>
          <button @click="scrollToProjects" class="btn-secondary">View Portfolio</button>
        </div>
      </div>

      <div class="hero-image-container">
        <div class="image-card">
          <img src="../assets/profile-logo-creative.jpg" alt="Trisha Bermudez" />
        </div>
      </div>
    </main>

    <!-- TECHNICAL EXPERTISE SECTION -->
    <section id="about-detail" class="expertise-section">
      <div class="content-box">
        <h2 class="section-title">Technical Expertise</h2>
        <div class="expertise-grid">
          <div class="expertise-item">
            <i class="bi bi-stack"></i>
            <h3>Full-Stack Development</h3>
            <p>Experience building end-to-end applications using Node.js, Express, and React. Currently specializing in Vue.js.</p>
          </div>
          <div class="expertise-item">
            <i class="bi bi-database"></i>
            <h3>Database Management</h3>
            <p>Proficient in SQL and MongoDB. Skilled in CRUD operations and designing schemas for scalable storage.</p>
          </div>
          <div class="expertise-item">
            <i class="bi bi-cpu"></i>
            <h3>Computer Engineering</h3>
            <p>Strong foundation in troubleshooting, network monitoring, and system reliability from PUP training.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PORTFOLIO SECTION -->
    <section id="projects-section" class="projects-area">
      <div class="content-box">
        <h2 class="section-title">Featured Projects</h2>
        
        <div class="project-grid">
          <!-- Project 1: Bloom and Thrive (Triggers Modal) -->
          <div class="project-card clickable" @click="openBloomModal">
            <div class="project-header">
              <span class="tag green">E-Commerce Logic</span>
              <i class="bi bi-zoom-in"></i> <!-- Zoom icon suggests it can be opened -->
            </div>
            <h3>Bloom and Thrive</h3>
            <p class="role-tag">Frontend & Logic Lead</p>
            <p class="desc">A multi-user agricultural marketplace. Click to view project screenshots and interface design.</p>
            <div class="stack">
              <span>HTML5</span> <span>CSS3</span> <span>JavaScript</span> <span>Swiper.js</span>
            </div>
            <div class="view-hint">Click to view screenshots</div>
          </div>

          <!-- Project 2: SkillConnect (Direct Link) -->
          <a href="https://skill-share-sand.vercel.app/" target="_blank" class="project-card-link">
            <div class="project-card">
              <div class="project-header">
                <span class="tag purple">Full-Stack System</span>
                <i class="bi bi-box-arrow-up-right"></i>
              </div>
              <h3>SkillConnect</h3>
              <p class="role-tag">Capstone Project</p>
              <p class="desc">Geolocation platform connecting service providers with users. Built with React, Node, and MongoDB.</p>
              <div class="stack">
                <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Vercel</span>
              </div>
              <div class="view-hint">Visit Live Website <i class="bi bi-arrow-right"></i></div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- BLOOM AND THRIVE MODAL -->
    <Transition name="fade">
      <div v-if="isBloomModalOpen" class="modal-overlay" @click.self="closeBloomModal">
        <div class="modal-container">
          <button class="close-modal" @click="closeBloomModal">&times;</button>
          
          <div class="modal-header">
            <h2>Bloom & Thrive - Project Showcase</h2>
            <p>Role-based dashboards and agricultural inventory management system.</p>
          </div>

          <div class="screenshot-gallery">
            <!-- INSTRUCTION: Put your screenshots in src/assets/ and link them here -->
             <div class="gallery-item">
               <p class="image-label">Home</p>
               <img src="/src/assets/home_bloom.jpg" alt="Screenshot 1">
             </div>
             <div class="gallery-item">
               <p class="image-label">Register</p>
               <img src="/src/assets/register_bloom.jpg" alt="Screenshot 2">
             </div>
             <div class="gallery-item">
               <p class="image-label">Login</p>
               <img src="/src/assets/login_bloom.jpg" alt="Screenshot 3">
             </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const isBloomModalOpen = ref(false)

const openBloomModal = () => {
  isBloomModalOpen.value = true
  document.body.style.overflow = 'hidden' // Stop background scrolling
}

const closeBloomModal = () => {
  isBloomModalOpen.value = false
  document.body.style.overflow = 'auto' // Resume background scrolling
}

const scrollToProjects = () => {
  const element = document.getElementById('projects-section');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
</script>

<style scoped>
.page-container { background-color: #0a0a0c; }

/* HERO (Kept from previous) */
.hero { display: flex; align-items: center; justify-content: center; gap: 80px; padding: 0 50px; height: 100vh; }
.hero-content { max-width: 550px; }
.main-title { font-size: 5rem; font-weight: 800; line-height: 1.0; margin-bottom: 25px; }
.highlight { color: #7c72ff; background: linear-gradient(to right, #7c72ff, #00d2ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.subtitle { color: #a0a0a0; line-height: 1.6; margin-bottom: 40px; font-size: 1.1rem; }

.btn-primary { background-color: #7c72ff; color: white; padding: 14px 28px; border-radius: 12px; font-weight: 600; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; transition: 0.3s; }
.btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 20px rgba(124, 114, 255, 0.3); }
.btn-secondary { background: rgba(255,255,255,0.05); color: white; border: 1px solid #333; padding: 14px 28px; border-radius: 12px; cursor: pointer; transition: 0.3s; }

.hero-image-container { width: 380px; }
.image-card { width: 100%; aspect-ratio: 1/1; background: #121214; border-radius: 40px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.1); }
.image-card img { width: 100%; height: 100%; object-fit: cover; }

/* EXPERTISE SECTION STYLES */
.expertise-section { padding: 100px 50px; background-color: #0d0d0f; border-top: 1px solid rgba(255, 255, 255, 0.05); }
.expertise-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1100px; margin: 0 auto; }
.expertise-item { background: rgba(255, 255, 255, 0.02); padding: 40px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.05); transition: 0.3s; text-align: left; }
.expertise-item:hover { border-color: rgba(124, 114, 255, 0.3); transform: translateY(-5px); }
.expertise-item i { font-size: 2.5rem; color: #7c72ff; margin-bottom: 20px; display: block; }
.expertise-item h3 { font-size: 1.4rem; margin-bottom: 15px; color: #fff; }
.expertise-item p { color: #888; line-height: 1.6; font-size: 0.95rem; }

/* PORTFOLIO SECTION */
.projects-area { padding: 120px 50px; border-top: 1px solid rgba(255, 255, 255, 0.05); }
.section-title { font-size: 2.5rem; text-align: center; margin-bottom: 60px; font-weight: 700; color: white; }
.project-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; }

.project-card { 
  background: rgba(255, 255, 255, 0.02); 
  padding: 40px; 
  border-radius: 24px; 
  border: 1px solid rgba(255, 255, 255, 0.05); 
  transition: 0.4s; 
  position: relative;
  height: 100%;
}
.clickable { cursor: pointer; }
.clickable:hover { border-color: #7c72ff; background: rgba(124, 114, 255, 0.03); transform: translateY(-8px); }

.project-card-link { text-decoration: none; color: inherit; }
.project-card-link:hover .project-card { border-color: #a29bfe; background: rgba(162, 155, 254, 0.03); transform: translateY(-8px); }

.project-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
.tag { font-size: 0.7rem; font-weight: 800; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; }
.tag.green { background: rgba(109, 159, 113, 0.2); color: #6D9F71; }
.tag.purple { background: rgba(124, 114, 255, 0.2); color: #a29bfe; }

.role-tag { color: #7c72ff; font-weight: 600; font-size: 0.9rem; margin-bottom: 10px; }
.desc { color: #888; font-size: 0.95rem; line-height: 1.6; }
.view-hint { margin-top: 20px; font-size: 0.8rem; font-weight: 700; color: #444; text-transform: uppercase; }

.stack { display: flex; gap: 8px; margin-top: 25px; flex-wrap: wrap; }
.stack span { font-size: 0.7rem; color: #666; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 5px; border: 1px solid rgba(255, 255, 255, 0.1); }

/* MODAL STYLING */
.modal-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  z-index: 2000;
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
}

.modal-container {
  background: #121214;
  width: 100%; max-width: 900px;
  max-height: 85vh;
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 40px;
  position: relative;
  overflow-y: auto; /* Enables scrolling for screenshots */
}

.close-modal {
  position: absolute; top: 20px; right: 30px;
  background: none; border: none;
  color: white; font-size: 2.5rem; cursor: pointer;
  line-height: 1; opacity: 0.5;
}
.close-modal:hover { opacity: 1; }

.modal-header { margin-bottom: 40px; text-align: center; }
.modal-header h2 { font-size: 2rem; margin-bottom: 10px; color: #7c72ff; }
.modal-header p { color: #666; }

.screenshot-gallery { display: flex; flex-direction: column; gap: 40px; }
.gallery-item { border-radius: 15px; overflow: hidden; background: #0a0a0c; border: 1px solid #222; }
.image-label { padding: 10px 20px; font-size: 0.8rem; color: #444; text-transform: uppercase; font-weight: 800; border-bottom: 1px solid #222; }
.gallery-item img { width: 100%; display: block; }

/* Modal Animation */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .hero { flex-direction: column-reverse; text-align: center; height: auto; padding-top: 150px; gap: 40px; }
  .main-title { font-size: 3.5rem; }
  .modal-container { padding: 20px; }
}
</style>