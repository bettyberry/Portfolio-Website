<?php
$page_title = "My Projects | Betelhem Tekle";
include 'includes/header.php';

// Projects data
$projects = [
    [
        'image' => 'photo_2025-02-02_20-46-26.jpg',
        'live_url' => '#',
        'github_url' => '#',
        'title' => 'E-commerce Platform',
        'description' => 'A full-featured online shopping platform with payment integration and inventory management.',
        'tech' => ['React', 'Node.js', 'MongoDB', 'Stripe API']
    ],
    [
        'image' => 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1085&q=80',
        'live_url' => '#',
        'github_url' => '#',
        'title' => 'Train Amharic language model',
        'description' => 'Train amharic language model to answer in amharic.',
        'tech' => ['Python', 'TensorFlow', 'NLTK', 'Flask']
    ],
    [
        'image' => 'https://i.pinimg.com/736x/c3/ef/51/c3ef51a30b2bee0ab79739ccba64d858.jpg',
        'live_url' => '#',
        'github_url' => '#',
        'title' => 'Portfolio Template',
        'description' => 'A responsive portfolio template with modern animations and interactive elements.',
        'tech' => ['HTML/CSS', 'JavaScript', 'Responsive Design']
    ]
];
?>

    <!-- Projects Section -->
    <section id="projects" class="section">
        <div class="container">
            <h2 class="section-title">Featured <span class="highlight">Projects</span></h2>
            <div class="projects-grid">
                <?php foreach ($projects as $project): ?>
                <div class="project-card">
                    <div class="project-image">
                        <img src="<?php echo strpos($project['image'], 'http') === 0 ? $project['image'] : 'assets/images/' . $project['image']; ?>" alt="<?php echo $project['title']; ?>">
                        <div class="project-links">
                            <a href="<?php echo $project['live_url']; ?>" class="project-link"><i class="fas fa-external-link-alt"></i></a>
                            <a href="<?php echo $project['github_url']; ?>" class="project-link"><i class="fab fa-github"></i></a>
                        </div>
                    </div>
                    <div class="project-content">
                        <h3 class="project-title"><?php echo $project['title']; ?></h3>
                        <p class="project-description"><?php echo $project['description']; ?></p>
                        <div class="project-tech">
                            <?php foreach ($project['tech'] as $tech): ?>
                            <span><?php echo $tech; ?></span>
                            <?php endforeach; ?>
                        </div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
            <div class="view-more">
                <a href="#" class="btn btn-outline">View All Projects</a>
            </div>
        </div>
    </section>

<?php include 'includes/footer.php'; ?>