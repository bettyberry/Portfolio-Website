<?php
$page_title = "My Services | Betelhem Tekle";
include 'includes/header.php';

// Services data
$services = [
    [
        'icon' => 'fas fa-code',
        'title' => 'Web Development',
        'description' => 'Building responsive, performant websites with modern frameworks like React, Vue, and Next.js.',
        'tech' => ['HTML5/CSS', 'JavaScript/TypeScript', 'React/Vue/Angular', 'Responsive Design']
    ],
    [
        'icon' => 'fas fa-paint-brush',
        'title' => 'UI/UX Design',
        'description' => 'Creating intuitive user interfaces with exceptional user experience principles.',
        'tech' => ['Figma/Sketch', 'User Research', 'Prototyping', 'Wireframing']
    ],
    [
        'icon' => 'fas fa-robot',
        'title' => 'AI Solutions',
        'description' => 'Developing intelligent systems with machine learning and artificial intelligence.',
        'tech' => ['Python/TensorFlow', 'Natural Language Processing', 'Computer Vision', 'Data Analysis']
    ]
];
?>

    <!-- Services Section -->
    <section id="services" class="section">
        <div class="container">
            <h2 class="section-title">My <span class="highlight">Services</span></h2>
            <div class="services-grid">
                <?php foreach ($services as $service): ?>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="<?php echo $service['icon']; ?>"></i>
                    </div>
                    <h3 class="service-title"><?php echo $service['title']; ?></h3>
                    <p class="service-description"><?php echo $service['description']; ?></p>
                    <ul class="service-tech">
                        <?php foreach ($service['tech'] as $tech): ?>
                        <li><?php echo $tech; ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>