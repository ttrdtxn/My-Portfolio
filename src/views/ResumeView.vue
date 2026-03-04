<template>
  <div class="resume-page">
    <div class="resume-wrapper">
      <!-- HEADER -->
      <header class="resume-header">
        <h1 class="name">TRISHA BERMUDEZ</h1>
        <p class="contact">
          09508293212 | trishabermudezdangan@gmail.com | 
          <a href="https://linkedin.com/in/bermudeztrisha" target="_blank">linkedin.com/in/bermudeztrisha</a>
        </p>
      </header>

      <div class="resume-grid">
        <!-- LEFT COLUMN -->
        <div class="left-col">
          <section class="section">
            <h2 class="section-title">PROFILE</h2>
            <p class="profile-text">
             Versatile Computer Engineering professional with expertise in Full-Stack Development (React, Node.js) and Network Infrastructure. Skilled in building scalable applications like SKILLCONNECT and troubleshooting Layer 1-3 connectivity. Eager to apply engineering logic to Software Development, Systems Engineering, or Technical Support roles.
            </p>
          </section>

          <section class="section">
            <h2 class="section-title">WORK EXPERIENCE</h2>
            
            <div class="item">
              <div class="item-header">
                <span class="role">CUSTOMER SERVICE REPRESENTATIVE</span>
                <span class="date">Sep 2025 - Mar 2026</span>
              </div>
              <p class="company">Alorica — Part Time (6 months)</p>
              <ul class="bullets">
                <li>Handled inbound customer inquiries related to healthcare services and benefits.</li>
                <li>Provided accurate information while ensuring compliance with company policies.</li>
                <li>Resolved customer concerns efficiently and professionally.</li>
              </ul>
            </div>

            <div class="item">
              <div class="item-header">
                <span class="role">TECHNICAL SUPPORT INTERN</span>
                <span class="date">May 2023 - Aug 2023</span>
              </div>
              <p class="company">Pinnacle Technologies Inc. — Internship (4 months)</p>
              <ul class="bullets">
                <li>Assisted in configuring, maintaining, and monitoring network systems.</li>
                <li>Supported troubleshooting of network and connectivity issues.</li>
                <li>Helped ensure optimal network performance and system reliability.</li>
              </ul>
            </div>
          </section>

          <section class="section">
            <h2 class="section-title">EDUCATION</h2>
            <div class="item">
              <p class="edu-school">Polytechnic University of the Philippines</p>
              <p class="edu-degree">Bachelor of Science in Computer Engineering Technology</p>
              <p class="edu-date">2023 - 2026</p>
            </div>
            <div class="item">
              <p class="edu-school">Polytechnic University of the Philippines</p>
              <p class="edu-degree">Diploma in Computer Engineering Technology</p>
              <p class="edu-date">2020 - 2023</p>
            </div>
          </section>
        </div>

        <!-- RIGHT COLUMN -->
        <div class="right-col">
          <section class="section">
            <h2 class="section-title">TECHNICAL SKILLS</h2>
            <div class="skill-group">
              <strong>Front-End:</strong> HTML5, CSS3, JavaScript
            </div>
            <div class="skill-group">
              <strong>Back-End:</strong> Kotlin, Ktor, Python, Java (basic)
            </div>
            <div class="skill-group">
              <strong>Databases:</strong> MongoDB, SQL
            </div>
            <div class="skill-group">
              <strong>Networking:</strong> Network setup, troubleshooting
            </div>
          </section>

          <section class="section">
            <h2 class="section-title">CERTIFICATIONS</h2>
            <ul class="cert-list">
              <li>Streamlining Project Management with Github (2025)</li>
              <li>From Raw Data to Career-Ready Skills (2025)</li>
              <li>Machine Learning for Image Processing (2025)</li>
              <li>The Power of Connection: Salesforce World (2025)</li>
              <li>The SAP Advantage: Business Operations (2025)</li>
              <li>AiLearn to AiEarn: Master Skills (2025)</li>
              <li>A Day in Fintech (2025)</li>
              <li>Demystifying AI (2025)</li>
              <li>Introduction to Careers in Cybersecurity (2021)</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resume-page { padding: 120px 20px 60px; background-color: #0a0a0c; color: #fff; min-height: 100vh; font-size: 0.9rem; }
.resume-wrapper { max-width: 900px; margin: 0 auto; }

.resume-header { text-align: center; margin-bottom: 50px; border-bottom: 1px solid #333; padding-bottom: 30px; }
.name { font-size: 3rem; letter-spacing: 5px; margin-bottom: 10px; font-weight: 800; }
.contact { color: #888; }
.contact a { color: #7c72ff; text-decoration: none; }

.resume-grid { display: grid; grid-template-columns: 1.5fr 1fr; gap: 50px; }
.section { margin-bottom: 40px; }
.section-title { font-size: 1.1rem; letter-spacing: 2px; color: #7c72ff; border-bottom: 1px solid #222; padding-bottom: 8px; margin-bottom: 20px; font-weight: 700; }

.item { margin-bottom: 25px; }
.item-header { display: flex; justify-content: space-between; font-weight: 700; margin-bottom: 5px; }
.role { color: #fff; }
.date { color: #666; font-size: 0.8rem; }
.company { color: #7c72ff; font-weight: 600; margin-bottom: 10px; }
.bullets { padding-left: 15px; color: #aaa; line-height: 1.6; }
.bullets li { margin-bottom: 5px; }

.skill-group { margin-bottom: 10px; color: #aaa; }
.skill-group strong { color: #fff; display: block; margin-bottom: 2px; }

.cert-list { list-style: none; padding: 0; color: #888; line-height: 1.8; }
.cert-list li::before { content: "• "; color: #7c72ff; }

.edu-school { font-weight: 700; }
.edu-degree { color: #aaa; }
.edu-date { color: #666; font-size: 0.8rem; }

@media (max-width: 768px) { .resume-grid { grid-template-columns: 1fr; } }
</style>