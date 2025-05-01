:root {
    --primary: #8a2be2;
    --primary-light: #a855f7;
    --primary-dark: #5e17a8;
    --secondary: #ff6b6b;
    --dark: #0a0a0a;
    --light: #f8f8f8;
    --gray: #a0a0a0;
    --dark-gray: #333;
    --light-gray: #e0e0e0;
    --background: #120821;
    --card-bg: rgba(10, 10, 10, 0.3);
    --glow: 0 0 15px rgba(138, 43, 226, 0.7);
    --transition: all 0.3s ease;
    --shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    --border-radius: 8px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-size: 16px;
}

body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background);
    color: var(--light);
    line-height: 1.6;
    overflow-x: hidden;
    
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

section {
    padding: 100px 0;
}

.highlight {
    color: var(--primary);
    text-shadow: var(--glow);
}

.btn {
    display: inline-block;
    padding: 12px 24px;
    font-weight: 600;
    border-radius: var(--border-radius);
    transition: var(--transition);
    text-align: center;
    text-decoration: none;
}

.btn-primary {
    background-color: var(--primary);
    color: var(--light);
    box-shadow: var(--glow);
}

.btn-primary:hover {
    background-color: var(--primary-light);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.5);
}

.btn-secondary {
    background-color: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
}

.btn-secondary:hover {
    background-color: var(--primary);
    color: var(--light);
}

.btn-outline {
    background-color: transparent;
    color: var(--light);
    border: 2px solid var(--light);
}

.btn-outline:hover {
    background-color: var(--light);
    color: var(--dark);
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 3rem;
    text-align: center;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--primary);
    box-shadow: var(--glow);
}

.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(18, 8, 33, 0.9);
    backdrop-filter: blur(10px);
    transition: var(--transition);
}

.header.scrolled {
    box-shadow: var(--shadow);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
}

.logo {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary);
    text-decoration: none;
    text-shadow: var(--glow);
    transition: var(--transition);
}

.logo:hover {
    transform: scale(1.05);
}

.nav-menu {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-item {
    position: relative;
}

.nav-link {
    color: var(--light);
    font-weight: 500;
    font-size: 0.9rem;
    letter-spacing: 1px;
    text-decoration: none;
    transition: var(--transition);
    padding: 5px 0;
    position: relative;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: var(--transition);
    box-shadow: var(--glow);
}

.nav-link:hover,
.nav-link.active {
    color: var(--primary);
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.hamburger {
    display: none;
    cursor: pointer;
    z-index: 1001;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    background-color: var(--primary);
    transition: var(--transition);
}

/* ===== Hero Section ===== */
.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 100px;
}

.hero-content {
    display: flex;
    align-items: center;
    gap: 50px;
}

.hero-text {
    flex: 1;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 20px;
    color: var(--gray);
}

.hero-description {
    color: var(--gray);
    max-width: 500px;
    margin-bottom: 30px;
    font-size: 1.1rem;
    line-height: 1.7;
}

.hero-cta {
    display: flex;
    gap: 15px;
}

.hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
}

.profile-img {
    max-width: 100%;
    border-radius: 10px;
}

.wave {
    display: inline-block;
    animation: wave 2.5s infinite;
    transform-origin: 70% 70%;
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.service-card {
    background-color: var(--card-bg);
    border: 1px solid rgba(138, 43, 226, 0.3);
    border-radius: var(--border-radius);
    padding: 30px;
    text-align: center;
    transition: var(--transition);
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(138, 43, 226, 0.2);
    border-color: var(--primary);
}

.service-icon {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 20px;
    transition: var(--transition);
}

.service-card:hover .service-icon {
    transform: scale(1.1);
}

.service-title {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: var(--light);
}

.service-description {
    color: var(--gray);
    margin-bottom: 20px;
    font-size: 0.95rem;
}

.service-tech {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

.service-tech li {
    background-color: rgba(138, 43, 226, 0.2);
    color: var(--primary);
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 50px;
}

.project-card {
    background-color: var(--card-bg);
    border: 1px solid rgba(138, 43, 226, 0.3);
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition);
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(138, 43, 226, 0.2);
    border-color: var(--primary);
}

.project-image {
    position: relative;
    width: 100%;
    height: 250px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.project-card:hover .project-image img {
    transform: scale(1.1);
}

.project-links {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.7);
    opacity: 0;
    transition: var(--transition);
}

.project-card:hover .project-links {
    opacity: 1;
}

.project-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--primary);
    color: var(--light);
    border-radius: 50%;
    transition: var(--transition);
}

.project-link:hover {
    background-color: var(--light);
    color: var(--primary);
    transform: scale(1.1);
}

.project-content {
    padding: 20px;
}

.project-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
    color: var(--light);
}

.project-description {
    color: var(--gray);
    font-size: 0.9rem;
    margin-bottom: 15px;
}

.project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.project-tech span {
    background-color: rgba(138, 43, 226, 0.2);
    color: var(--primary);
    padding: 3px 10px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 500;
}

.view-more {
    text-align: center;
    margin-top: 50px;
}

/* ===== About Section ===== */
.about-content {
    display: flex;
    align-items: center;
    gap: 50px;
    margin-top: 50px;
    background-color: var(--card-bg);
    padding: 40px;
    border-radius: var(--border-radius);
    border: 1px solid rgba(138, 43, 226, 0.3);
}

.about-text {
    flex: 1.2;
}

.about-image {
    flex: 0.8;
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-image img {
    max-width: 100%;
    border-radius: var(--border-radius);
    filter: grayscale(20%);
    transition: var(--transition);
}

.about-image img:hover {
    filter: grayscale(0%);
}

.about-description {
    color: var(--gray);
    margin-bottom: 20px;
    font-size: 1rem;
    line-height: 1.7;
}

.skills {
    margin-top: 30px;
}

.skills-title {
    font-size: 1.3rem;
    margin-bottom: 15px;
    color: var(--light);
    text-align: center;
}

.skills-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin-top: 20px;
}

.skill-category h4 {
    color: var(--primary);
    margin-bottom: 15px;
    font-size: 1.1rem;
}

.skill-category ul {
    list-style: none;
}

.skill-category li {
    color: var(--gray);
    margin-bottom: 8px;
    font-size: 0.95rem;
    position: relative;
    padding-left: 20px;
}

.skill-category li::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: var(--primary);
}

.contact-content {
    display: flex;
    flex-direction: row-reverse;
    gap: 50px;
    margin-top: 50px;
}

.contact-form {
    flex: 1;
    background-color: var(--card-bg);
    padding: 30px;
    border-radius: var(--border-radius);
    border: 1px solid rgba(138, 43, 226, 0.3);
}

.form-group {
    margin-bottom: 20px;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 15px;
    background-color: rgba(10, 10, 10, 0.5);
    border: 1px solid rgba(138, 43, 226, 0.3);
    border-radius: var(--border-radius);
    color: var(--light);
    font-family: 'Poppins', sans-serif;
    transition: var(--transition);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 10px rgba(138, 43, 226, 0.3);
}

.form-group textarea {
    min-height: 150px;
    resize: vertical;
}

.contact-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.info-card {
    background-color: var(--card-bg);
    border: 1px solid rgba(138, 43, 226, 0.3);
    border-radius: var(--border-radius);
    padding: 20px;
    transition: var(--transition);
}

.info-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(138, 43, 226, 0.2);
    border-color: var(--primary);
}

.info-card i {
    font-size: 1.5rem;
    color: var(--primary);
    margin-bottom: 15px;
}

.info-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
    color: var(--light);
}

.info-card a,
.info-card p {
    color: var(--gray);
    transition: var(--transition);
}

.info-card a:hover {
    color: var(--primary);
}

.social-links {
    display: flex;
    gap: 15px;
    margin-top: 20px;
}

.social-link {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background-color: var(--card-bg);
    color: var(--light);
    border-radius: 50%;
    transition: var(--transition);
    border: 1px solid rgba(138, 43, 226, 0.3);
}

.social-link:hover {
    background-color: var(--primary);
    color: var(--light);
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(138, 43, 226, 0.3);
}

.footer {
    background-color: var(--dark);
    padding: 30px 0;
    text-align: center;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

.footer-logo {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary);
    margin-bottom: 20px;
    text-shadow: var(--glow);
}

.footer-links {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 20px;
}

.footer-links a {
    color: var(--gray);
    transition: var(--transition);
}

.footer-links a:hover {
    color: var(--primary);
}

.footer-copyright {
    color: var(--gray);
    font-size: 0.9rem;
}

/* ===== Back to Top Button ===== */
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background-color: var(--primary);
    color: var(--light);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    box-shadow: var(--glow);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 999;
}

.back-to-top.active {
    opacity: 1;
    visibility: visible;
}

.back-to-top:hover {
    background-color: var(--primary-light);
    transform: translateY(-5px);
}

/* ===== Animations ===== */
@keyframes wave {
    0% { transform: rotate(0deg); }
    10% { transform: rotate(14deg); }
    20% { transform: rotate(-8deg); }
    30% { transform: rotate(14deg); }
    40% { transform: rotate(-4deg); }
    50% { transform: rotate(10deg); }
    60% { transform: rotate(0deg); }
    100% { transform: rotate(0deg); }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@media (max-width: 992px) {
    .hero-content {
        flex-direction: column-reverse;
        text-align: center;
    }
    
    .hero-cta {
        justify-content: center;
    }
    
    .hero-description {
        margin: 0 auto 30px;
    }
    
    .about-content {
        flex-direction: column;
    }
    
    .contact-content {
        flex-direction: column;
    }
}

@media (max-width: 768px) {
    .hamburger {
        display: block;
    }
    
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }
    
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
    
    .nav-menu {
        position: fixed;
        top: 80px;
        left: -100%;
        width: 100%;
        background-color: rgba(18, 8, 33, 0.95);
        backdrop-filter: blur(10px);
        flex-direction: column;
        align-items: center;
        gap: 0;
        padding: 30px 0;
        transition: var(--transition);
    }
    
    .nav-menu.active {
        left: 0;
    }
    
    .nav-item {
        margin: 15px 0;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-subtitle {
        font-size: 1.25rem;
    }
}

@media (max-width: 576px) {
    .hero-cta {
        flex-direction: column;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 1.75rem;
    }
    
    .services-grid,
    .projects-grid {
        grid-template-columns: 1fr;
    }
}
