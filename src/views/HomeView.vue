<template>
  <div class="page-container">
    <!-- HERO SECTION -->
    <main class="hero">
      <div class="hero-content">
        <h1 class="main-title">Hello, I'm <br /><span class="highlight">Trisha.</span></h1>
        <p class="subtitle">
          Computer Engineering Technology graduate at <strong>PUP</strong>. <br />
          Full-stack developer focused on bridging academic excellence with industry-standard software solutions.
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
          
          <!-- 1. SKILLCONNECT (External Link) -->
          <a href="https://skill-share-sand.vercel.app/" target="_blank" class="project-card-link">
            <div class="project-card featured">
              <div class="project-header">
                <span class="tag purple">Full-Stack System</span>
                <i class="bi bi-box-arrow-up-right"></i>
              </div>
              <h3>SkillConnect</h3>
              <p class="role-tag">Capstone Project</p>
              <p class="desc">A geolocation-based platform connecting service providers with users. Features real-time matching and secure profile management.</p>
              <div class="stack">
                <span>React.js</span> <span>Node.js</span> <span>MongoDB</span> <span>Vercel</span>
              </div>
              <div class="view-hint">Visit Live Website <i class="bi bi-arrow-right"></i></div>
            </div>
          </a>

          <!-- 2. BLOOM AND THRIVE (Modal Gallery) -->
          <div class="project-card clickable" @click="openModal('bloom')">
            <div class="project-header">
              <span class="tag green">E-Commerce Logic</span>
              <i class="bi bi-zoom-in"></i>
            </div>
            <h3>Bloom and Thrive</h3>
            <p class="role-tag">Frontend & Logic Lead</p>
            <p class="desc">A multi-user agricultural marketplace. Developed role-based dashboards (Buyer/Seller) and complex product filtering systems.</p>
            <div class="stack">
              <span>HTML5</span> <span>CSS3</span> <span>JavaScript</span> <span>Swiper.js</span>
            </div>
            <div class="view-hint">Click to view project</div>
          </div>

          <!-- 3. PUP KIOSK MAP (Modal Iframe) -->
          <div class="project-card clickable" @click="openModal('kiosk')">
            <div class="project-header">
              <span class="tag blue">Interactive Map</span>
              <i class="bi bi-map"></i>
            </div>
            <h3>PUP Kiosk Map</h3>
            <p class="role-tag">Developer</p>
            <p class="desc">Digital navigation system for PUP Sta. Mesa. Includes an interactive legend and detailed information modals for 50+ campus buildings.</p>
            <div class="stack">
              <span>HTML5</span> <span>CSS3</span> <span>JavaScript</span> <span>Interactive UI</span>
            </div>
            <div class="view-hint">Click to launch map</div>
          </div>

          <!-- 4. JAKE'S COFFEE SHOP (Modal Gallery) -->
          <div class="project-card clickable" @click="openModal('coffee')">
            <div class="project-header">
              <span class="tag orange">Business Web App</span>
              <i class="bi bi-cup-hot"></i>
            </div>
            <h3>Jake's Coffee Shop</h3>
            <p class="role-tag">Web Developer</p>
            <p class="desc">Business interface featuring digital menus, live music event listings, and a career portal for recruitment management.</p>
            <div class="stack">
              <span>HTML5</span> <span>CSS3</span> <span>Multimedia</span>
            </div>
            <div class="view-hint">Click to view project</div>
          </div>

        </div>
      </div>
    </section>

    <!-- DYNAMIC PROJECT MODAL -->
    <Transition name="fade">
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container" :class="{ 'wide-modal': activeProject.type === 'iframe' }">
          <button class="close-modal" @click="closeModal">&times;</button>
          
          <div class="modal-header">
            <h2>{{ activeProject.title }}</h2>
            <p>{{ activeProject.subtitle }}</p>
          </div>

          <!-- IFRAME MODE (For Kiosk Map) -->
          <div v-if="activeProject.type === 'iframe'" class="iframe-wrapper">
             <iframe :src="activeProject.projectUrl" frameborder="0" class="project-iframe"></iframe>
          </div>

          <!-- GALLERY MODE (For Bloom and Coffee) -->
          <div v-else class="screenshot-gallery">
             <div v-for="(img, index) in activeProject.images" :key="index" class="gallery-item">
               <p class="image-label">{{ img.label }}</p>
               <img :src="img.url" :alt="img.label">
             </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const isModalOpen = ref(false)
const selectedProjectId = ref(null)

const projectsData = {
  bloom: {
    title: "Bloom & Thrive",
    subtitle: "Agriculture E-Commerce & Inventory System",
    type: "iframe",
    projectUrl: "/bloom/index.html",
    images: []
  },
  kiosk: {
    title: "PUP Kiosk Map",
    subtitle: "Interactive Campus Navigation Tool",
    type: "iframe",
    projectUrl: "/kiosk/index.html",
    images: []
  },
  coffee: {
    title: "Jake's Coffee Shop",
    subtitle: "Business Management & Menu System",
    type: "iframe",
    projectUrl: "/coffee/index.html",
    images: []
  }
}

const activeProject = computed(() => projectsData[selectedProjectId.value] || {})

const openModal = (id) => {
  selectedProjectId.value = id
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const scrollToProjects = () => {
  document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.page-container { background-color: #0a0a0c; color: white; }

/* HERO */
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

/* EXPERTISE SECTION */
.expertise-section { padding: 100px 50px; background-color: #0d0d0f; border-top: 1px solid rgba(255, 255, 255, 0.05); }
.expertise-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; max-width: 1200px; margin: 0 auto; }
.expertise-item { background: rgba(255, 255, 255, 0.02); padding: 40px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.05); transition: 0.3s; text-align: left; }
.expertise-item i { font-size: 2.5rem; color: #7c72ff; margin-bottom: 20px; display: block; }
.expertise-item h3 { font-size: 1.4rem; margin-bottom: 15px; color: #fff; }
.expertise-item p { color: #888; line-height: 1.6; font-size: 0.95rem; }

/* PROJECTS SECTION */
.projects-area { padding: 120px 50px; border-top: 1px solid rgba(255, 255, 255, 0.05); }
.section-title { font-size: 2.5rem; text-align: center; margin-bottom: 60px; font-weight: 700; color: white; }
.project-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; max-width: 1100px; margin: 0 auto; }

.project-card { 
  background: rgba(255, 255, 255, 0.02); padding: 40px; border-radius: 24px; border: 1px solid rgba(255, 255, 255, 0.05); 
  transition: 0.4s; position: relative; height: 100%; display: flex; flex-direction: column;
}
.project-card.featured { border-color: rgba(124, 114, 255, 0.2); background: linear-gradient(145deg, rgba(124, 114, 255, 0.05), rgba(10, 10, 12, 0)); }
.clickable { cursor: pointer; }
.clickable:hover, .project-card-link:hover .project-card { border-color: #7c72ff; background: rgba(124, 114, 255, 0.04); transform: translateY(-8px); }
.project-card-link { text-decoration: none; color: inherit; }

.project-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
.tag { font-size: 0.65rem; font-weight: 800; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; }
.tag.green { background: rgba(109, 159, 113, 0.2); color: #6D9F71; }
.tag.purple { background: rgba(124, 114, 255, 0.2); color: #a29bfe; }
.tag.blue { background: rgba(0, 210, 255, 0.2); color: #00d2ff; }
.tag.orange { background: rgba(214, 140, 69, 0.2); color: #D68C45; }

.role-tag { color: #7c72ff; font-weight: 600; font-size: 0.85rem; margin-bottom: 12px; }
.desc { color: #888; font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px; flex-grow: 1; }
.view-hint { margin-top: auto; font-size: 0.75rem; font-weight: 700; color: #555; text-transform: uppercase; letter-spacing: 1px; }

.stack { display: flex; gap: 8px; margin-top: 20px; flex-wrap: wrap; }
.stack span { font-size: 0.65rem; color: #666; background: rgba(255,255,255,0.05); padding: 4px 10px; border-radius: 5px; border: 1px solid rgba(255, 255, 255, 0.1); }

/* MODAL STYLING */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.9); backdrop-filter: blur(15px); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px; }
.modal-container { background: #121214; width: 100%; max-width: 1000px; max-height: 90vh; border-radius: 30px; border: 1px solid rgba(255, 255, 255, 0.1); padding: 50px; position: relative; overflow-y: auto; transition: width 0.3s ease; }
.wide-modal { max-width: 1300px; width: 95%; }

.close-modal { position: absolute; top: 20px; right: 30px; background: none; border: none; color: white; font-size: 2.5rem; cursor: pointer; opacity: 0.5; }
.close-modal:hover { opacity: 1; }
.modal-header { margin-bottom: 50px; text-align: center; }
.modal-header h2 { font-size: 2.5rem; color: #7c72ff; margin-bottom: 10px; }
.modal-header p { color: #666; }

/* IFRAME STYLING */
.iframe-wrapper { width: 100%; height: 70vh; border-radius: 20px; overflow: hidden; background: #fff; border: 1px solid rgba(255, 255, 255, 0.1); }
.project-iframe { width: 100%; height: 100%; }

.screenshot-gallery { display: flex; flex-direction: column; gap: 60px; }
.gallery-item { border-radius: 20px; overflow: hidden; background: #0a0a0c; border: 1px solid #222; }
.image-label { padding: 15px 25px; font-size: 0.85rem; color: #555; text-transform: uppercase; font-weight: 800; border-bottom: 1px solid #222; background: #0d0d0f; }
.gallery-item img { width: 100%; display: block; }

/* ANIMATION */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 900px) {
  .hero { flex-direction: column-reverse; text-align: center; height: auto; padding-top: 150px; gap: 40px; }
  .project-grid { grid-template-columns: 1fr; }
  .modal-container { padding: 20px; }
  .iframe-wrapper { height: 50vh; }
}
</style>