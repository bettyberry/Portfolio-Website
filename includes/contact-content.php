<div class="container">
    <h2 class="section-title">Let's <span class="highlight">Connect</span></h2>
    
    <?php if (isset($_SESSION['form_status'])): ?>
        <div class="alert <?= $_SESSION['form_status']['success'] ? 'alert-success' : 'alert-danger' ?>">
            <?= $_SESSION['form_status']['message'] ?>
        </div>
    <?php endif; ?>
    
    <div class="contact-content">
        <div class="contact-form">
            <form method="POST" action="includes/contact-handler.php">
                <div class="form-group">
                    <input type="text" name="name" placeholder="Your Name" required
                           value="<?= htmlspecialchars($_SESSION['form_data']['name'] ?? '') ?>">
                </div>
                <div class="form-group">
                    <input type="email" name="email" placeholder="Your Email" required
                           value="<?= htmlspecialchars($_SESSION['form_data']['email'] ?? '') ?>">
                </div>
                <div class="form-group">
                    <input type="text" name="subject" placeholder="Subject"
                           value="<?= htmlspecialchars($_SESSION['form_data']['subject'] ?? '') ?>">
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="Your Message" rows="5" required><?= 
                        htmlspecialchars($_SESSION['form_data']['message'] ?? '') 
                    ?></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
            </form>
        </div>
        <div class="contact-info">
            <div class="info-card">
                <i class="fas fa-envelope"></i>
                <h3>Email</h3>
                <a href="mailto:Betelhemtekle2021@gmail.com">Betelhemtekle2021@gmail.com</a>
            </div>
            <div class="info-card">
                <i class="fas fa-map-marker-alt"></i>
                <h3>Location</h3>
                <p>Addis Ababa, Ethiopia</p>
            </div>
            <div class="info-card">
                <i class="fas fa-phone-alt"></i>
                <h3>Phone</h3>
                <a href="tel:+251901076065">+251901076065</a>
            </div>
        </div>
    </div>
</div>
<?php unset($_SESSION['form_data']); ?>